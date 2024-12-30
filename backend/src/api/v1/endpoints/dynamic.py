from fastapi import APIRouter, Depends, HTTPException
from src.schemas.dynamic import DynamicSolutionSchema
from src.service.dynamic_service import DynamicService
from src.model.dynamic import DynamicModel

router = APIRouter()

# 의존성을 주입하는 함수
def get_dynamic_service():
    model = DynamicModel()  # 필요 시 다른 모델 구현체로 교체 가능
    return DynamicService(model=model)

@router.get("/", response_model=DynamicSolutionSchema)
def get_dynamic_solution(service: DynamicService = Depends(get_dynamic_service)):
    """Fetch solutions for Dynamic Programming."""
    try:
        result = service.get_solution()
        return result  # 반환 값은 DynamicSolutionSchema와 일치해야 함
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=f"Invalid data: {str(ve)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching solution: {str(e)}")
