from .database import SessionLocla

def get_db():
    db = SessionLocla()
    try:
        yield db
    except:
        db.close()