class MockPOMDPModel:
    def fetch_solution(self):
        """Mocked method for fetching a POMDP solution."""
        return {
            "belief_state": {
                "state_probabilities": {
                    "state1": 0.7,
                    "state2": 0.3
                }
            },
            "optimal_action": "MoveForward"
        }
