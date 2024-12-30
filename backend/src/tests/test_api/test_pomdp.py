import pytest
from fastapi.testclient import TestClient
from src.main import app
from src.model.pomdp import POMDPModel
from tests.mocks.mock_pomdp_model import MockPOMDPModel

client = TestClient(app)

@pytest.fixture
def mock_service(monkeypatch):
    """Mock the POMDPModel's fetch_solution method."""
    def mock_fetch_solution(self):
        return {
            "belief_state": {
                "state_probabilities": {
                    "state1": 0.7,
                    "state2": 0.3
                }
            },
            "optimal_action": "MoveForward"
        }
    monkeypatch.setattr(POMDPModel, "fetch_solution", mock_fetch_solution)

def test_get_pomdp_solution(mock_service):
    """Test the /api/v1/pomdp/ endpoint."""
    response = client.get("/api/v1/pomdp/")
    assert response.status_code == 200
    assert response.json() == {
        "belief_state": {
            "state_probabilities": {
                "state1": 0.7,
                "state2": 0.3
            }
        },
        "optimal_action": "MoveForward"
    }
