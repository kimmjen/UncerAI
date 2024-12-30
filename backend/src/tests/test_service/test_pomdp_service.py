import pytest
from src.service.pomdp_service import POMDPService
from tests.mocks.mock_pomdp_model import MockPOMDPModel

@pytest.fixture
def mock_service():
    """Fixture for initializing the POMDPService with a mocked model."""
    model = MockPOMDPModel()
    return POMDPService(model=model)

def test_get_solution(mock_service):
    """Test the get_solution method of POMDPService."""
    result = mock_service.get_solution()
    assert result == {
        "belief_state": {
            "state_probabilities": {
                "state1": 0.7,
                "state2": 0.3
            }
        },
        "optimal_action": "MoveForward"
    }
