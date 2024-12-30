from src.service.dynamic_service import DynamicService
from tests.mocks.mock_dynamic_model import MockDynamicModel
import pytest

@pytest.fixture
def service():
    """Fixture to create the DynamicService with a mocked model."""
    model = MockDynamicModel()
    return DynamicService(model=model)

def test_get_solution(service):
    """Test the get_solution method in DynamicService."""
    result = service.get_solution()
    assert result == {
        "optimal_path": [1, 2, 3],
        "cost": 15.5
    }
