from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def create_scatterplot():
    return {"message": "Scatterplot created!"}