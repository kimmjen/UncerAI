class MockReinforcementModel:
    """Mock for the ReinforcementModel."""

    def fetch_status(self):
        return {
            "current_episode": 10,
            "total_reward": 120.5,
            "policy": {"state1": "action1", "state2": "action2"}
        }
