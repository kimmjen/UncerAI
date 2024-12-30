class MockBayesianModel:
    def fetch_nodes(self):
        return [{"id": 1, "label": "A", "states": ["on", "off"]},
                {"id": 2, "label": "B", "states": ["yes", "no"]}]

    def fetch_edges(self):
        return [{"id": 1, "source": 1, "target": 2}]
