import apiClient from "../apiClient";

export const getDynamicProgrammingSolution = async () => {
    try {
        const response = await apiClient.get("/dynamic/");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch dynamic programming solution:", error);
        throw error;
    }
};
