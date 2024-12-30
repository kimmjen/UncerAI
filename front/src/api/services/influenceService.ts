import apiClient from "@/api/apiClient";

export const getInfluenceDiagram = async () => {
    try {
        const response = await apiClient.get("/influence/");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Influence Diagram:", error);
        throw error;
    }
};
