import {useState, useEffect} from "react";
import {getReinforcementLearningStatus} from "@/api/services/reinforcementService";
import LoadingOrError from "@/components/common/LoadingOrError";

type ReinforcementStatus = {
    current_episode: number;
    total_reward: number;
    policy: Record<string, string>;
};

const ReinforcementPage = () => {
    const [status, setStatus] = useState<ReinforcementStatus>({
        current_episode: 0,
        total_reward: 0,
        policy: {},
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                setLoading(true);
                const data = await getReinforcementLearningStatus();
                setStatus(data);
                setError(null); // Clear previous errors
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching the reinforcement learning status.");
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, []);


    return (
        <LoadingOrError loading={loading} error={error} title="reinforcement learning status">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Reinforcement Learning Status</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Current Episode</h2>
                    <p className="mt-2 text-gray-600">{status.current_episode}</p>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Total Reward</h2>
                    <p className="mt-2 text-gray-600">{status.total_reward.toFixed(2)}</p>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Policy</h2>
                    {Object.keys(status.policy).length > 0 ? (
                        <pre className="mt-2 bg-gray-100 p-4 rounded">{JSON.stringify(status.policy, null, 2)}</pre>
                    ) : (
                        <p className="text-gray-600">No policy data available.</p>
                    )}
                </div>
            </div>
        </LoadingOrError>
    );
};

export default ReinforcementPage;
