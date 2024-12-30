from pydantic import BaseModel
from typing import List, Dict

class BayesianNodeSchema(BaseModel):
    id: int
    label: str
    states: List[str]

class BayesianEdgeSchema(BaseModel):
    id: int
    source: int
    target: int

class BayesianNetworkSchema(BaseModel):
    nodes: List[BayesianNodeSchema]
    edges: List[BayesianEdgeSchema]
