from fastapi.testclient import TestClient
from src.main import app
from pytest import MonkeyPatch

client = TestClient(app)

def test_get_bayesian_network(monkeypatch: MonkeyPatch):
    from tests.mocks.mock_bayesian_model import MockBayesianModel
    from src.service.bayesian_service import BayesianService

    def mock_service():
        return BayesianService(model=MockBayesianModel())

    monkeypatch.setattr("src.api.v1.endpoints.bayesian.BayesianService", mock_service)

    response = client.get("/api/v1/bayesian/")
    assert response.status_code == 200
    assert "nodes" in response.json()
    assert "edges" in response.json()
