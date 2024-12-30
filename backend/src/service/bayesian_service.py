from src.model.bayesian import BayesianModel

class BayesianService:
    def __init__(self, model=None):
        self.model = model or BayesianModel()

    def get_network(self):
        """Fetch Bayesian Network data."""
        nodes = self.model.fetch_nodes()
        edges = self.model.fetch_edges()
        return {"nodes": nodes, "edges": edges}
