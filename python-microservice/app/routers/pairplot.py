from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def create_pairplot():
    return {"message": "Pairplot created!"}