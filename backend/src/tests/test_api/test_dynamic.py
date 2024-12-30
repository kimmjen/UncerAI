from fastapi.testclient import TestClient
from src.main import app
from src.model.dynamic import DynamicModel
import pytest

client = TestClient(app)

@pytest.fixture
def mock_service(monkeypatch):
    """Mock the DynamicModel's fetch_solutions method."""
    def mock_fetch_solutions(self):
        return {
            "optimal_path": [1, 2, 3],  # Mocked optimal path
            "cost": 15.5                # Mocked cost
        }
    monkeypatch.setattr(DynamicModel, "fetch_solutions", mock_fetch_solutions)

def test_get_dynamic_solution(mock_service):
    """Test the /api/v1/dynamic/ endpoint."""
    response = client.get("/api/v1/dynamic/")
    assert response.status_code == 200
    assert response.json() == {
        "optimal_path": [1, 2, 3],
        "cost": 15.5
    }
