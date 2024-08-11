from fastapi import FastAPI
from sqladmin import Admin, ModelView

def init_admin(app: FastAPI, engine):
    admin = Admin(app, engine)