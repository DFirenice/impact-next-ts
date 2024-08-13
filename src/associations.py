from sqlalchemy import Table, Column, Integer, ForeignKey
from src.database import Base

project_collaborators = Table(
    'project_collaborators', Base.metadata,
    Column('project_id', Integer, ForeignKey('projects.id'), primary_key=True),
    Column('user_id', Integer, ForeignKey('users.id'), primary_key=True)
)