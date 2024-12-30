import {useState, useEffect} from "react";
import {getBayesianNetworkStatus} from "@/api/services/bayesianService";
import LoadingOrError from "@/components/common/LoadingOrError"; // Adjust the path for your alias setup

const BayesianPage = () => {
    const [data, setData] = useState<{ nodes: any[]; edges: any[] }>({nodes: [], edges: []});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBayesianData = async () => {
            try {
                setLoading(true);
                const result = await getBayesianNetworkStatus();
                setData(result);
                setError(null); // Clear any previous errors
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching Bayesian Network data.");
            } finally {
                setLoading(false);
            }
        };

        fetchBayesianData();
    }, []);


    return (
        <LoadingOrError loading={loading} error={error} title="Bayesian Network data">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Bayesian Network</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Nodes</h2>
                    <ul className="list-disc ml-6 mt-2">
                        {data.nodes.map((node, index) => (
                            <li key={index}>
                                <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(node, null, 2)}</pre>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Edges</h2>
                    <ul className="list-disc ml-6 mt-2">
                        {data.edges.map((edge, index) => (
                            <li key={index}>
                                <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(edge, null, 2)}</pre>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </LoadingOrError>
    );
};

export default BayesianPage;
