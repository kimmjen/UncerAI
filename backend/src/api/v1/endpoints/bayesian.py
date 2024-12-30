from fastapi import APIRouter, Depends, HTTPException
from src.schemas.bayesian import BayesianNetworkSchema
from src.service.bayesian_service import BayesianService

router = APIRouter()

@router.get("/", response_model=BayesianNetworkSchema)
def get_bayesian_network(service: BayesianService = Depends()):
    """Fetch Bayesian Network data."""
    try:
        return service.get_network()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error fetching Bayesian Network: {str(e)}"
        )
