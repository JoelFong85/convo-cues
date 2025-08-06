from app.db.session import SessionLocal
from app.models.conversation import Conversation
from app.models.question import Question
from sqlalchemy.exc import SQLAlchemyError


def seed():
    # create db session
    db = SessionLocal()

    try:
        # Begin a transaction
        with db.begin():
            # First Dates
            convo = Conversation(reference_id="first-date", title="First Dates")
            db.add(convo)
            db.flush()  # ensures convo.id is available without committing

            questions = [
                "Who has had the biggest influence on your outlook on life?",
                "If you could be the child of a famous public figure, who would it be?",
                "If you could be the parent of a famous public figure, who would it be?",
                "If you were a food, what would it be?",
                "If you could go back in time and kill someone, who would it be?",
                "Weekend in a city, by the seaside or on a mountain?",
                "Who was your biggest childhood enemy. What made you hate them?",
                "What's the biggest risk you've ever taken?",
                "What’s your love language—or what do you think it might be?",
                "If you won the lottery of $1m, what would you do with the money?",
                "If you were a warning label, what would yours say?",
                "What’s a conspiracy theory you don’t believe—but secretly wish were true?"
                "If your inner child could throw a tantrum right now, what would it be about?",
                "You get $5,000 to prank a wedding couple. What’s your plan?",
                "If your exes had to give a Yelp 1-star review of you, what it say?",
                "If your exes had to give a Yelp 5-star review of you, what it say?",
                "What’s a lie you once told to impress someone?",
                "If you could punch one fictional character in the face, who would it be?",
                "If you could punch one historical figure in the face, who would it be?",
                "If you could be a superhero, who would you be?",
                "If you could be a villain in a comic universe, who would you be?",
                "If your most reckless decision had worked out perfectly, how different would your life be?",
                "What’s something you low-key judge people for—but won’t admit out loud?",
                "If your personality were a cocktail, what’s in it?",
                "You’re famous for something completely ridiculous.What is it?",
                "What’s something absurd you believed as a child— and kind of wish were real?",
                "What’s a hill you’d die on that most people would roll their eyes at?",
                "If love were a competitive sport, what would be your signature move?",
                "If your dating life had a soundtrack, what’s would be the theme song on it?",
                "What’s a red flag you used to ignore—but now run from like a fire drill?",
                "If you had to get a tattoo of something you’re ashamed of… what would it be?",
                "You can remove one societal norm with zero consequences. What are you wiping off the map?",
                "What’s a petty revenge story you’re still a little too proud of?",
                "If you could invent a law everyone had to follow on dates, what would it be?",
                "What’s a secret rule you use to decide whether someone is “your kind of person”?",
                "You can only fall in love under one absurd condition—what is it?",
                "What’s something weirdly romantic to you that most people wouldn’t get?",
                "If your heart were a room, what would it's deco look like? Be brutally honest.",
                "What’s a relationship value that’s non-negotiable—even if it makes you seem difficult?",
                "If you time travel to a different time in your life, when would it be, and what would you do?",
                "If you could read your date’s mind for 60 seconds, when would you use it?",
                "What’s something you wish people dared to ask on a first date—but never do?",
            ]

            db.add_all([Question(conversation_id=convo.id, question_text=q) for q in questions])

            # Couples Seeking Deeper Connection
            convo = Conversation(reference_id="couples-seeking-a-deeper-connection",
                                 title="Couples Seeking A Deeper Connection")
            db.add(convo)
            db.flush()

            questions = [
                "What do you think is the most misunderstood part of who you are, even by me?",
                "If you could press a button and relive one year of our relationship, which year would you pick and why?",
                "If you could erase one moment in our relationship and rewrite it, which one would it be?",
                "What’s a truth you’ve been sitting on, but unsure how to say?",
                "If our love had a flavor, what would it taste like right now?",
                "What’s something you need more of from me but hesitate to ask for?",
                "If we suddenly had to live in separate cities for a year, how do you think we’d change?",
                "What part of your inner world have you kept safe from me?",
                "When was the last time you felt truly seen by me?",
                "What’s a story from your past you’ve never shared because you weren’t ready?",
                "What version of you do I bring out the most, good or bad?",
                "When have I made you feel strongest? When have I made you feel small?",
                "What’s a conflict we keep circling that you wish we could finally break?",
                "If our love were a house, what does it's interior design look like?",
                "What do you think our relationship teaches others who see us from the outside?",
                "What’s something small you do for me that you don’t think I notice?",
                "When do you miss me even when I’m right next to you?",
                "What’s a version of “us” you still want to become?",
                "What habit or dynamic between us do you secretly worry might never change?",
                "If I had a secret regret, what do you think it might be?",
                "What’s something I used to do that made you feel deeply loved, and I’ve stopped doing?",
                "What kind of couple do you not want us to become?",
                "If we had to write a new set of “relationship vows” right now, what would yours include?",
                "What do you think we’re still afraid to talk about?",
                "What’s a dream we gave up on too easily?",
                "How has our intimacy changed, not just physically, but emotionally?",
                "When do you feel most like we’re truly a team?",
                "What emotional muscle have we built together that you’re proud of?",
                "If we broke up tomorrow, what would you miss most about being with me?",
                "How can I love you better in the way you actually need to be loved, not how I assume?",
                "Which song would best describe our relationship?"
                "If we had a brutally honest marriage counselor, what’s the first thing they’d call us out on?",
                "What’s a wound we never really healed, just stepped around?",
                "What part of being with me do you think people envy, and what do they have no clue about?",
                "What's something you're ashamed of needing from me?",
                "When do you feel like you're just 'performing' your role in this relationship?",
                "If I left to work overseas for a year and came back, what would you secretly hope had changed, in me or in us?",
                "If our love had a warning label, what would it say now?",
            ]

            db.add_all([Question(conversation_id=convo.id, question_text=q) for q in questions])

        print("Done seeding conversations and questions (committed).")

    except SQLAlchemyError as e:
        db.rollback()
        print("Seed failed, rolled back.")
        print(f"Error: {e}")

    finally:
        db.close()


if __name__ == "__main__":
    seed()
