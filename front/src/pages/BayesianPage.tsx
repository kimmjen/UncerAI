import {useState, useEffect} from "react";
import {getBayesianNetworkStatus} from "@/api/services/bayesianService";
import LoadingOrError from "@/components/common/LoadingOrError"; // Adjust the path for your alias setup
import NetworkVisualizer, { NetworkNode, NetworkEdge } from "@/components/BayesianNetwork/NetworkVisualizer";

const BayesianPage = () => {
    const [data, setData] = useState<{ nodes: NetworkNode[]; edges: NetworkEdge[] }>({nodes: [], edges: []});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);
    const [activeTab, setActiveTab] = useState<string>("visualization");

    useEffect(() => {
        const fetchBayesianData = async () => {
            try {
                setLoading(true);
                const result = await getBayesianNetworkStatus();
                if (result && Object.keys(result).length > 0) {
                    setData(result);
                } else {
                    setData(getSampleData());
                }
                setError(null);
            } catch (err: any) {
                console.warn("API 호출 실패, 샘플 데이터 사용:", err.message);
                setData(getSampleData());
                setError(null);
            } finally {
                setLoading(false);
            }
        };

        fetchBayesianData();
    }, []);

    const getSampleData = (): { nodes: NetworkNode[]; edges: NetworkEdge[] } => {
        return {
            nodes: [
                { id: "a", name: "Rain", type: "chance", probability: 0.2, parents: [] },
                { id: "b", name: "Sprinkler", type: "chance", probability: 0.1, parents: ["a"] },
                { id: "c", name: "Wet Grass", type: "query", probability: 0.99, parents: ["a", "b"] },
                { id: "d", name: "Slippery", type: "evidence", probability: 0.8, parents: ["c"] },
                { id: "e", name: "Accident", type: "chance", probability: 0.01, parents: ["d"] }
            ],
            edges: [
                { source: "a", target: "b", weight: 0.4 },
                { source: "a", target: "c", weight: 0.8 },
                { source: "b", target: "c", weight: 0.9 },
                { source: "c", target: "d", weight: 0.7 },
                { source: "d", target: "e", weight: 0.3 }
            ]
        };
    };

    const handleNodeSelect = (node: NetworkNode) => {
        setSelectedNode(node);
    };

    const handleChangeNodeType = (nodeId: string, newType: string) => {
        setData(prevData => ({
            ...prevData,
            nodes: prevData.nodes.map(node => 
                node.id === nodeId ? { ...node, type: newType } : node
            )
        }));
    };

    return (
        <LoadingOrError loading={loading} error={error} title="Bayesian Network">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Bayesian Network Analysis</h1>
                    
                    <div className="flex space-x-2">
                        <button 
                            onClick={() => setActiveTab("visualization")}
                            className={`px-4 py-2 rounded ${activeTab === "visualization" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Visualization
                        </button>
                        <button 
                            onClick={() => setActiveTab("data")}
                            className={`px-4 py-2 rounded ${activeTab === "data" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Raw Data
                        </button>
                    </div>
                </div>

                {activeTab === "visualization" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Network Graph</h2>
                                <NetworkVisualizer 
                                    nodes={data.nodes} 
                                    edges={data.edges} 
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Network Statistics</h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Nodes:</span>
                                        <span className="font-medium">{data.nodes.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Edges:</span>
                                        <span className="font-medium">{data.edges.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Max Probability:</span>
                                        <span className="font-medium">
                                            {data.nodes.length > 0 
                                                ? `${(Math.max(...data.nodes.filter(n => n.probability !== undefined).map(n => n.probability || 0)) * 100).toFixed(0)}%` 
                                                : "N/A"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Node Controls</h2>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Select Node:</label>
                                    <select 
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={selectedNode?.id || ""}
                                        onChange={(e) => {
                                            const node = data.nodes.find(n => n.id === e.target.value);
                                            if (node) setSelectedNode(node);
                                        }}
                                    >
                                        <option value="">Select a node</option>
                                        {data.nodes.map(node => (
                                            <option key={node.id} value={node.id}>{node.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {selectedNode && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Node Type:</label>
                                            <select 
                                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={selectedNode.type}
                                                onChange={(e) => handleChangeNodeType(selectedNode.id, e.target.value)}
                                            >
                                                <option value="chance">Chance</option>
                                                <option value="evidence">Evidence</option>
                                                <option value="query">Query</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Probability:</label>
                                            <input 
                                                type="range" 
                                                min="0" 
                                                max="100" 
                                                value={(selectedNode.probability || 0) * 100}
                                                onChange={(e) => {
                                                    const newProb = Number(e.target.value) / 100;
                                                    setData(prevData => ({
                                                        ...prevData,
                                                        nodes: prevData.nodes.map(node => 
                                                            node.id === selectedNode.id ? { ...node, probability: newProb } : node
                                                        )
                                                    }));
                                                    setSelectedNode({...selectedNode, probability: newProb});
                                                }}
                                                className="w-full"
                                            />
                                            <div className="text-center mt-1">
                                                {((selectedNode.probability || 0) * 100).toFixed(0)}%
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 mb-2">Parents:</label>
                                            <div className="text-sm">
                                                {selectedNode.parents && selectedNode.parents.length > 0 ? (
                                                    <ul className="list-disc pl-5">
                                                        {selectedNode.parents.map(parentId => {
                                                            const parent = data.nodes.find(n => n.id === parentId);
                                                            return (
                                                                <li key={parentId}>
                                                                    {parent ? parent.name : parentId}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-500">No parents</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Nodes</h2>
                                <ul className="space-y-4">
                                    {data.nodes.map((node, index) => (
                                        <li key={index} className="border rounded p-3 bg-gray-50">
                                            <h3 className="font-medium text-blue-600">{node.name}</h3>
                                            <p className="text-sm text-gray-600">ID: {node.id}</p>
                                            <p className="text-sm text-gray-600">Type: {node.type}</p>
                                            {node.probability !== undefined && (
                                                <p className="text-sm text-gray-600">
                                                    Probability: {(node.probability * 100).toFixed(1)}%
                                                </p>
                                            )}
                                            {node.parents && node.parents.length > 0 && (
                                                <p className="text-sm text-gray-600">
                                                    Parents: {node.parents.join(", ")}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Edges</h2>
                                <ul className="space-y-4">
                                    {data.edges.map((edge, index) => (
                                        <li key={index} className="border rounded p-3 bg-gray-50">
                                            <p className="text-sm text-gray-600">
                                                From: {edge.source} → To: {edge.target}
                                            </p>
                                            {edge.weight !== undefined && (
                                                <p className="text-sm text-gray-600">
                                                    Weight: {edge.weight.toFixed(2)}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LoadingOrError>
    );
};

export default BayesianPage;
