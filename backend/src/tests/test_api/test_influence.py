from fastapi.testclient import TestClient
from src.main import app
from src.model.influence import InfluenceModel
import pytest

client = TestClient(app)

@pytest.fixture
def mock_service(monkeypatch):
    """Mock the InfluenceModel's fetch_nodes and fetch_edges methods."""
    def mock_fetch_nodes(self):
        return [
            {"id": 1, "label": "Node1", "type": "Decision"},
            {"id": 2, "label": "Node2", "type": "Chance"}
        ]

    def mock_fetch_edges(self):
        return [
            {"id": 1, "source": 1, "target": 2, "label": "Edge1"}
        ]

    monkeypatch.setattr(InfluenceModel, "fetch_nodes", mock_fetch_nodes)
    monkeypatch.setattr(InfluenceModel, "fetch_edges", mock_fetch_edges)

def test_get_influence_diagram(mock_service):
    """Test the /api/v1/influence/ endpoint."""
    response = client.get("/api/v1/influence/")
    assert response.status_code == 200
    assert response.json() == {
        "nodes": [
            {"id": 1, "label": "Node1", "type": "Decision"},
            {"id": 2, "label": "Node2", "type": "Chance"}
        ],
        "edges": [
            {"id": 1, "source": 1, "target": 2, "label": "Edge1"}
        ]
    }
