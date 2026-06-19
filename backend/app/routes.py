from fastapi import APIRouter
from app.models import Incident

router = APIRouter()

DB = []

@router.post("/incidents")
def create_incident(incident: Incident):
    incident.id = len(DB) + 1
    DB.append(incident)
    return incident

@router.get("/incidents")
def list_incidents():
    return DB

@router.patch("/incidents/{incident_id}")
def update_incident(incident_id: int, status: str):
    for i in DB:
        if i.id == incident_id:
            i.status = status
            return i
    return {"error": "not found"}
