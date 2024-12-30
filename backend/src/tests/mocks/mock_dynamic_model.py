class MockDynamicModel:
    """Mocked DynamicModel for testing."""
    def fetch_solutions(self):
        """Return mocked solutions for Dynamic Programming."""
        return {
            "optimal_path": [1, 2, 3],  # Mocked optimal path
            "cost": 15.5               # Mocked cost
        }
