from app.db.session import engine
from app.db.base import Base

# import models
from app.models.conversation import Conversation
from app.models.question import Question


def init_db():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    init_db()
