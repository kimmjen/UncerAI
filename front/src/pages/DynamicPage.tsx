import {useState, useEffect} from "react";
import {getDynamicProgrammingSolution} from "@/api/services/dynamicService";
import LoadingOrError from "@/components/common/LoadingOrError"; // Adjust the path for your alias setup

const DynamicPage = () => {
    const [solution, setSolution] = useState<{ optimal_path: number[]; cost: number }>({
        optimal_path: [],
        cost: 0,
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDynamicData = async () => {
            try {
                setLoading(true);
                const result = await getDynamicProgrammingSolution();
                setSolution(result);
                setError(null); // Clear any previous errors
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching Dynamic Programming solution.");
            } finally {
                setLoading(false);
            }
        };

        fetchDynamicData();
    }, []);


    return (
        <LoadingOrError loading={loading} error={error} title="Dynamic Programming Solution">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dynamic Programming Solution</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Optimal Path</h2>
                    <p className="mt-2 text-gray-600">{solution.optimal_path.join(" → ")}</p>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Cost</h2>
                    <p className="mt-2 text-gray-600">{solution.cost}</p>
                </div>
            </div>
        </LoadingOrError>
    );
};

export default DynamicPage;
