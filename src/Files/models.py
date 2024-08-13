from sqlalchemy import Column, String, LargeBinary, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base
import uuid

class File(Base):
    __tablename__ = "files"

    id = Column(String, primary_key=True, index=True, nullable=False, unique=True, default=lambda: str(uuid.uuid4()))
    file_name = Column(String, nullable=False)
    file_data = Column(LargeBinary, nullable=False)

    project_id = Column(String, ForeignKey("projects.id"))
    project = relationship("Project", back_populates="files")

    def __repr__(self):
        return f"{self.id}, {self.file_name}, {self.project_id}, {self.project}"