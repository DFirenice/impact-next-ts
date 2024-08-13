from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base
from src.associations import project_collaborators
import uuid
from datetime import datetime, timezone

class Project(Base):
    __tablename__ = "projects"

    id = Column(String, primary_key=True, index=True, nullable=False, unique=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False, index=True)
    is_public = Column(Boolean, nullable=False, default=True)
    creation_date = Column(DateTime, default=datetime.now(timezone.utc), index=True)
    status = Column(String, nullable=False)
    state = Column(String, nullable=False, index=True)
    activate_version = Column(String, nullable=False)

    files = relationship("File", back_populates="project")
    owner = relationship("User", back_populates='owned_projects')
    owner_id = Column(String, ForeignKey("users.id"))
    collaborators = relationship('User', secondary=project_collaborators, back_populates='projects')

    def __repr__(self):
        return f"{self.id}, {self.name}, {self.creation_date}, {self.owner, self.owner_id}, {self.collaborators}"

