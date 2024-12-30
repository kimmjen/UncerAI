from pydantic import BaseModel
from typing import Dict


class BeliefStateSchema(BaseModel):
    """Schema for representing the belief state in a POMDP."""
    state_probabilities: Dict[str, float]  # 각 상태와 해당 확률


class POMDPSolutionSchema(BaseModel):
    """Schema for representing a POMDP solution."""
    belief_state: BeliefStateSchema  # POMDP의 신념 상태
    optimal_action: str  # 최적 행동
