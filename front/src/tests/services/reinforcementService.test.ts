import { getReinforcementLearningStatus } from "@/api/services/reinforcementService";
import apiClient from "@/api/apiClient";

jest.mock("@/api/apiClient");

describe("Reinforcement Service", () => {
    it("should fetch reinforcement learning status successfully", async () => {
        const mockData = {
            current_episode: 10,
            total_reward: 120.5,
            policy: { state1: "action1", state2: "action2" },
        };

        (apiClient.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

        const data = await getReinforcementLearningStatus();
        expect(data).toEqual(mockData);
    });

    it("should throw an error when API call fails", async () => {
        (apiClient.get as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

        await expect(getReinforcementLearningStatus()).rejects.toThrow("Unable to fetch reinforcement learning status. Please try again later.");
    });
});
