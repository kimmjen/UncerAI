class MockInfluenceModel:
    """Mocked InfluenceModel for testing."""
    def fetch_nodes(self):
        """Return mocked nodes for Influence Diagram."""
        return [
            {"id": 1, "label": "Node1", "type": "Decision"},
            {"id": 2, "label": "Node2", "type": "Chance"}
        ]

    def fetch_edges(self):
        """Return mocked edges for Influence Diagram."""
        return [
            {"id": 1, "source": 1, "target": 2, "label": "Edge1"}
        ]
