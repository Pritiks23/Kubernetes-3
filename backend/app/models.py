from pydantic import BaseModel
from datetime import datetime

class Incident(BaseModel):
    id: int | None = None
    title: str
    severity: str  # low, medium, high, critical
    status: str = "open"
    created_at: datetime = datetime.utcnow()
