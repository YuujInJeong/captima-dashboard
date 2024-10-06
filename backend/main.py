from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sklearn.ensemble import IsolationForest
from transformers import pipeline

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Read the uploaded file
    contents = await file.read()
    df = pd.read_excel(contents)
    
    # Perform basic analysis
    analysis_result = df.describe().to_dict()
    
    # Detect anomalies
    iso_forest = IsolationForest(contamination=0.1)
    anomalies = iso_forest.fit_predict(df.select_dtypes(include=[np.number]))
    
    # Get context for anomalies using a pre-trained model
    nlp = pipeline("text-generation", model="gpt2")
    context = nlp(f"The sales data shows anomalies. Possible reasons include:")[0]['generated_text']
    
    return {
        "analysis": analysis_result,
        "anomalies": anomalies.tolist(),
        "context": context
    }

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Data Analysis API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
