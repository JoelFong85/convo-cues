from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.conversation import Conversation
from app.api.dependencies import get_db

router = APIRouter()


@router.get("/conversations")
def get_conversations(db: Session = Depends(get_db)):
    conversations = db.query(Conversation).all()

    result = []

    for c in conversations:
        result.append({"reference_id": c.reference_id, "title": c.title})

    return result


@router.get("/conversations/{convo_ref_id}/questions")
def get_questions(convo_ref_id: str, db: Session = Depends(get_db)):
    convo = db.query(Conversation).filter_by(reference_id=convo_ref_id).first()
    if not convo:
        raise HTTPException(status_code=404, detail="Conversation not found")

    result = []
    for q in convo.questions:
        result.append({"id": q.id, "question_text": q.question_text})

    return result
