import {useState, useEffect} from "react";
import {getPomdpSolution} from "@/api/services/pomdpService";
import LoadingOrError from "@/components/common/LoadingOrError";

const PomdpPage = () => {
    const [solution, setSolution] = useState<{ belief_state: Record<string, number | null>; optimal_action: string }>({
        belief_state: {},
        optimal_action: "",
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSolution = async () => {
            try {
                setLoading(true);
                const data = await getPomdpSolution();
                setSolution(data);
                setError(null); // Clear any previous errors
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching the POMDP solution.");
            } finally {
                setLoading(false);
            }
        };

        fetchSolution();
    }, []);

    return (
        <LoadingOrError loading={loading} error={error} title="POMDP Solution">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">POMDP Solution</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Belief State</h2>
                    <div className="mt-2">
                        {Object.entries(solution.belief_state).length > 0 ? (
                            <ul className="list-disc pl-5 text-gray-600">
                                {Object.entries(solution.belief_state).map(([state, probability]) => (
                                    <li key={state}>
                                        <strong>{state}</strong>: {typeof probability === "number" ? probability.toFixed(2) : "N/A"}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No belief state data available.</p>
                        )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Optimal Action</h2>
                    <p className="mt-2 text-gray-600">
                        {solution.optimal_action || "No optimal action available."}
                    </p>
                </div>
            </div>
        </LoadingOrError>
    );
};

export default PomdpPage;
