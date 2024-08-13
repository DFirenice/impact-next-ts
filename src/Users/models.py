from sqlalchemy import Column, String
from sqlalchemy.orm import relationship
from ..database import Base
from src.associations import project_collaborators
import uuid

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True, nullable=False, unique=True, default=lambda: str(uuid.uuid4()))
    username = Column(String, nullable=False, index=True, unique=True)
    email = Column(String, nullable=False, index=True, unique=True)
    hashed_password = Column(String, nullable=False)

    projects = relationship('Project', secondary=project_collaborators, back_populates='collaborators')
    owned_projects = relationship('Project', back_populates='owner')

    def __repr__(self):
        return f"{self.id}, {self.username}, {self.email}"