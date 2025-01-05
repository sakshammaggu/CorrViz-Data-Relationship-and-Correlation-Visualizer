from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import pandas as pd
from io import StringIO

router = APIRouter(
    prefix="/api", 
    tags=["csv_processing"]
)

class CSVRequest(BaseModel):
    filename: str
    data: str

@router.post("/process-csv")
async def process_csv(request: CSVRequest):
    try:
        csv_data = StringIO(request.data)
        df = pd.read_csv(csv_data)
        cleaned_data = df.dropna()

        return JSONResponse(
            status_code=200,
            content={
                "message": "CSV processed successfully",
                "summary": {
                    "columns": list(cleaned_data.columns),
                    "rows": len(cleaned_data),
                },
                "head": cleaned_data.head(5).to_dict(orient="records")
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))