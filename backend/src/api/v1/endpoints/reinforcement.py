from fastapi import APIRouter, Depends, HTTPException
from src.schemas.reinforcement import ReinforcementStatusSchema
from src.service.reinforcement_service import ReinforcementService
from src.model.reinforcement import ReinforcementModel

router = APIRouter()

@router.get("/", response_model=ReinforcementStatusSchema)
def get_reinforcement_status(service: ReinforcementService = Depends()):
    """Fetch reinforcement learning status."""
    try:
        return service.get_status()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching status: {str(e)}")
