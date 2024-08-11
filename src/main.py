from fastapi import FastAPI
from .cors import add_cors
from .admin import init_admin

app = FastAPI()
add_cors(app)
init_admin(app)

@app.get("/")
async def root():
    return "Hello world"