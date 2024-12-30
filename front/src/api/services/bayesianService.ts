import apiClient from "../apiClient";

export const getBayesianNetworkStatus = async () => {
    try {
        const response = await apiClient.get("/bayesian/");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Bayesian network status:", error);
        throw error;
    }
};
