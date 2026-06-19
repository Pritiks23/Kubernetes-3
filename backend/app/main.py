from fastapi import FastAPI
from app.routes import router

app = FastAPI(title="Incident Response API")

app.include_router(router, prefix="/api")
