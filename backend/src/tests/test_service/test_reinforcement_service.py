import pytest
from src.service.reinforcement_service import ReinforcementService
from tests.mocks.mock_reinforcement_model import MockReinforcementModel


@pytest.fixture
def service():
    """Fixture to provide the ReinforcementService with a mock model."""
    model = MockReinforcementModel()
    return ReinforcementService(model=model)


def test_get_status(service):
    """Test the get_status method of the ReinforcementService."""
    result = service.get_status()
    assert result == {
        "current_episode": 10,
        "total_reward": 120.5,
        "policy": {"state1": "action1", "state2": "action2"}
    }
