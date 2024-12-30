import {useState, useEffect} from "react";
import {getInfluenceDiagram} from "@/api/services/influenceService";
import LoadingOrError from "@/components/common/LoadingOrError";

const InfluencePage = () => {
    const [data, setData] = useState<{
        nodes: { id: number; label: string; type: string }[];
        edges: { id: number; source: number; target: number; label: string }[]
    }>({
        nodes: [],
        edges: [],
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInfluenceData = async () => {
            try {
                setLoading(true);
                const result = await getInfluenceDiagram();
                setData(result);
                setError(null); // Clear any previous errors
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching the Influence Diagram.");
            } finally {
                setLoading(false);
            }
        };

        fetchInfluenceData();
    }, []);


    return (
        <LoadingOrError loading={loading} error={error} title="Influence Diagram">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Influence Diagram</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Nodes</h2>
                    {data.nodes.length > 0 ? (
                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                            {data.nodes.map((node) => (
                                <li key={node.id}>
                                    <strong>{node.label}</strong> (Type: {node.type})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-gray-600">No nodes data available.</p>
                    )}

                    <h2 className="text-xl font-semibold text-gray-800 mt-6">Edges</h2>
                    {data.edges.length > 0 ? (
                        <ul className="list-disc pl-5 mt-2 text-gray-600">
                            {data.edges.map((edge) => (
                                <li key={edge.id}>
                                    <strong>{edge.label}</strong>: {edge.source} → {edge.target}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-gray-600">No edges data available.</p>
                    )}
                </div>
            </div>
        </LoadingOrError>
    );
};

export default InfluencePage;
