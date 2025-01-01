from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def create_heatmap():
    return {"message": "Heatmap created!"}