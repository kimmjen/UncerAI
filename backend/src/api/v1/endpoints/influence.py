from fastapi import APIRouter, Depends, HTTPException
from src.schemas.influence import InfluenceDiagramSchema
from src.service.influence_service import InfluenceService
from src.model.influence import InfluenceModel

router = APIRouter()

@router.get("/", response_model=InfluenceDiagramSchema)
def get_influence_diagram(service: InfluenceService = Depends()):
    """Fetch Influence Diagram data."""
    try:
        result = service.get_diagram()
        return result  # Ensure it matches InfluenceDiagramSchema
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
