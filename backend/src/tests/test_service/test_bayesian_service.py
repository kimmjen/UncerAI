import pytest
from tests.mocks.mock_bayesian_model import MockBayesianModel
from src.service.bayesian_service import BayesianService

@pytest.fixture
def service():
    model = MockBayesianModel()
    return BayesianService(model=model)

def test_get_network(service):
    result = service.get_network()
    assert "nodes" in result
    assert "edges" in result
    assert len(result["nodes"]) == 2
    assert len(result["edges"]) == 1
