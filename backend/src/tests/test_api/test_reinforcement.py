import pytest
from fastapi.testclient import TestClient
from src.main import app
from src.model.reinforcement import ReinforcementModel

client = TestClient(app)

@pytest.fixture
def mock_service(monkeypatch):
    """Mock the ReinforcementModel's fetch_status method."""
    def mock_fetch_status(self):
        return {
            "current_episode": 10,
            "total_reward": 120.5,
            "policy": {"state1": "action1", "state2": "action2"}
        }
    monkeypatch.setattr(ReinforcementModel, "fetch_status", mock_fetch_status)

def test_get_reinforcement_status(mock_service):
    """Test the /api/v1/reinforcement/ endpoint."""
    response = client.get("/api/v1/reinforcement/")
    assert response.status_code == 200
    assert response.json() == {
        "current_episode": 10,
        "total_reward": 120.5,
        "policy": {"state1": "action1", "state2": "action2"}
    }
