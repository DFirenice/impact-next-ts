from fastapi import FastAPI
from sqladmin import Admin, ModelView
from .Users.models import User
from .Projects.models import Project
from .Files.models import File

class UserAdmin(ModelView, model=User):
    column_list = [User.id, User.username, User.username, User.owned_projects, User.projects]

class ProjectAdmin(ModelView, model=Project):
    column_list = [Project.id, Project.name, Project.creation_date, Project.owner, Project.owner_id, Project.is_public, Project.state, Project.status, Project.activate_version, Project.collaborators]

class FileAdmin(ModelView, model=File):
    column_list = [File.id, File.file_name, File.project, File.project_id]

def init_admin(app: FastAPI, engine):
    admin = Admin(app, engine)
    admin.add_view(UserAdmin)
    admin.add_view(ProjectAdmin)
    admin.add_view(FileAdmin)