from fastapi import APIRouter
from app.api.endpoints import conversations

api_router = APIRouter()
api_router.include_router(conversations.router, tags=["conversations"])