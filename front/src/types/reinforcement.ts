export interface ReinforcementStatus {
    current_episode: number;
    total_reward: number;
    policy: Record<string, string>;
}
