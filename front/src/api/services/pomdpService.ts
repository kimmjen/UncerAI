import apiClient from "../apiClient";

export const getPomdpSolution = async () => {
    try {
        const response = await apiClient.get("/pomdp/");
        return response.data;
    } catch (error) {
        // console.error(
        //     `Failed to fetch POMDP solution. Status: ${error.response?.status}, Message: ${error.message}`
        // );
        console.error("Failed to fetch POMDP solution status:", error);
        throw error;
    }
};
