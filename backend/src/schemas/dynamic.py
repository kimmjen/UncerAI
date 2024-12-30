from pydantic import BaseModel
from typing import List, Union


class OptimalPathSchema(BaseModel):
    """Schema for representing the optimal path."""
    path: List[Union[int, str]]  # 정점 ID 또는 라벨
    cost: float  # 최적 경로의 비용


class DynamicSolutionSchema(BaseModel):
    optimal_path: List[int]
    cost: float
