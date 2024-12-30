from pydantic import BaseModel
from typing import List

class InfluenceNodeSchema(BaseModel):
    id: int
    label: str
    type: str

class InfluenceEdgeSchema(BaseModel):
    id: int
    source: int
    target: int
    label: str

class InfluenceDiagramSchema(BaseModel):
    nodes: List[InfluenceNodeSchema]
    edges: List[InfluenceEdgeSchema]
