import apiClient from "@/api/apiClient";
import { ReinforcementStatus } from "@/types/reinforcement";

export const getReinforcementLearningStatus = async (): Promise<ReinforcementStatus> => {
    try {
        const response = await apiClient.get<ReinforcementStatus>("/reinforcement/");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch reinforcement learning status:", error);
        throw new Error("Unable to fetch reinforcement learning status. Please try again later.");
    }
};
