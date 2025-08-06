from fastapi import APIRouter

router = APIRouter()

@router.get("/conversations")
def get_conversations():
    return [
        {"reference_id": "first_date", "title": "First Date"},
        {"reference_id": "marriage_reconnect", "title": "Marriage Reconnect 3"},
    ]