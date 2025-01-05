from fastapi import FastAPI
from app.routes import csv_processor, pairplot, scatterplot

app = FastAPI()

app.include_router(csv_processor.router)
app.include_router(pairplot.router, prefix="/pairplot", tags=["pairplot"])  
app.include_router(scatterplot.router, prefix="/scatterplot", tags=["scatterplot"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Data Visualization Microservice!"}