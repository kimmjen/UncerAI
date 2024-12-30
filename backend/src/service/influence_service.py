from model.influence import InfluenceModel


class InfluenceService:
    def __init__(self, model=None):
        self.model = model or InfluenceModel()

    def get_diagram(self):
        nodes = self.model.fetch_nodes()
        edges = self.model.fetch_edges()

        # Ensure response matches InfluenceDiagramSchema
        return {
            "nodes": [{"id": node["id"], "label": node["label"], "type": node["type"]} for node in nodes],
            "edges": [{"id": edge["id"], "source": edge["source"], "target": edge["target"], "label": edge["label"]} for edge in edges],
        }
