from fastapi import APIRouter, Depends, HTTPException
from src.schemas.pomdp import POMDPSolutionSchema
from src.service.pomdp_service import POMDPService
from src.model.pomdp import POMDPModel

router = APIRouter()

@router.get("/", response_model=POMDPSolutionSchema)
def get_pomdp_solution(service: POMDPService = Depends(lambda: POMDPService(model=POMDPModel()))):
    """
    Fetch the POMDP solution.
    :param service: Dependency injection of POMDPService
    :return: A POMDPSolutionSchema containing belief state and optimal action
    """
    try:
        result = service.get_solution()
        return result  # Ensure it matches POMDPSolutionSchema
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching POMDP solution: {str(e)}")
