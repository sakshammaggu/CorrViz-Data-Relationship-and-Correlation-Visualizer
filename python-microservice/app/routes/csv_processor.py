from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from io import StringIO
import pandas as pd

from app.services.heatmap_service import generate_correlation_heatmap
from app.services.pairplot_service import generate_pairplot

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

        heatmap_base64 = ""
        heatmap_file_path = ""
        try:
            heatmap_base64, heatmap_file_path = generate_correlation_heatmap(cleaned_data)
        except Exception as e:
            print(f"Error generating heatmap: {str(e)}")

        pairplot_base64 = ""
        pairplot_file_path = ""
        try:
            pairplot_base64, pairplot_file_path = generate_pairplot(cleaned_data)
        except Exception as e:
            print(f"Error generating pairplot: {str(e)}")

        return JSONResponse(
            status_code=200,
            content={
                "message": "CSV processed successfully",
                "summary": {
                    "columns": list(cleaned_data.columns),
                    "rows": len(cleaned_data),
                },
                "head": cleaned_data.head(5).to_dict(orient="records"),
                "heatmap": {
                    "heatmap_base64": heatmap_base64, 
                    "heatmap_file_path": heatmap_file_path
                },
                "pairplot": {
                    "pairplot_base64": pairplot_base64,
                    "pairplot_file_path": pairplot_file_path,
                }
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))