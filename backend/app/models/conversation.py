from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship
from app.db.base import Base


class Conversation(Base):
    __tablename__ = "conversations"

    id = Column(Integer, primary_key=True, index=True)
    reference_id = Column(String, unique=True, index=True)
    title = Column(String, nullable=False)

    questions = relationship("Question", back_populates="conversation", cascade="all, delete-orphan")
