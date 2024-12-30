from pydantic import BaseModel

class ReinforcementStatusSchema(BaseModel):
    current_episode: int
    total_reward: float
    policy: dict
