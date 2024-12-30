from model.reinforcement import ReinforcementModel


class ReinforcementService:
    def __init__(self, model=None):
        self.model = model or ReinforcementModel()

    def get_status(self):
        """Get the current status of Reinforcement Learning."""
        result = self.model.fetch_status()
        if not result:
            return {
                "current_episode": 0,
                "total_reward": 0.0,
                "policy": {}
            }

        # Ensure the result matches the response schema
        return {
            "current_episode": result["current_episode"],
            "total_reward": result["total_reward"],
            "policy": result["policy"],
        }
