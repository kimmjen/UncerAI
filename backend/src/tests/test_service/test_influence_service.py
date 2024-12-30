from src.service.influence_service import InfluenceService
from tests.mocks.mock_influence_model import MockInfluenceModel
import pytest

@pytest.fixture
def service():
    """Fixture to create the InfluenceService with a mocked model."""
    model = MockInfluenceModel()
    return InfluenceService(model=model)

def test_get_diagram(service):
    """Test the get_diagram method in InfluenceService."""
    result = service.get_diagram()
    assert result == {
        "nodes": [
            {"id": 1, "label": "Node1", "type": "Decision"},
            {"id": 2, "label": "Node2", "type": "Chance"}
        ],
        "edges": [
            {"id": 1, "source": 1, "target": 2, "label": "Edge1"}
        ]
    }
