from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Ezyschooling API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data Models
class School(BaseModel):
    id: int
    name: str
    location: str
    sector: str
    board: str
    fees: str
    rating: float
    image: str

class City(BaseModel):
    id: int
    name: str
    state: str

class Area(BaseModel):
    id: int
    name: str
    school_count: int

# Sample Data
cities = [
    {"id": 1, "name": "Noida", "state": "Uttar Pradesh"},
    {"id": 2, "name": "Delhi", "state": "Delhi"},
    {"id": 3, "name": "Gurgaon", "state": "Haryana"},
    {"id": 4, "name": "Bangalore", "state": "Karnataka"},
    {"id": 5, "name": "Pune", "state": "Maharashtra"},
]

schools = [
    {
        "id": 1,
        "name": "Delhi Public School",
        "location": "Noida",
        "sector": "Sector 132",
        "board": "CBSE",
        "fees": "₹15,000/month",
        "rating": 4.5,
        "image": "/images/dps.jpg"
    },
    {
        "id": 2,
        "name": "Manav Rachna International School",
        "location": "Noida",
        "sector": "Sector 51",
        "board": "CBSE",
        "fees": "₹12,000/month",
        "rating": 4.3,
        "image": "/images/mris.jpg"
    },
    {
        "id": 3,
        "name": "ASPAM Scottish School",
        "location": "Noida",
        "sector": "Sector 62",
        "board": "CBSE",
        "fees": "₹10,000/month",
        "rating": 4.2,
        "image": "/images/aspam.jpg"
    },
    {
        "id": 4,
        "name": "Mayoor School",
        "location": "Noida",
        "sector": "Sector 126",
        "board": "CBSE",
        "fees": "₹11,000/month",
        "rating": 4.4,
        "image": "/images/mayoor.jpg"
    },
    {
        "id": 5,
        "name": "Ramagya School",
        "location": "Noida",
        "sector": "Sector 50",
        "board": "CBSE",
        "fees": "₹13,000/month",
        "rating": 4.1,
        "image": "/images/ramagya.jpg"
    },
]

areas = [
    {"id": 1, "name": "Sector 45", "school_count": 15},
    {"id": 2, "name": "Sector 62A", "school_count": 14},
    {"id": 3, "name": "Sector 49", "school_count": 11},
    {"id": 4, "name": "Sector 62", "school_count": 9},
    {"id": 5, "name": "Sector 63", "school_count": 9},
]

boards = [
    {"id": 1, "name": "CBSE", "school_count": 185},
    {"id": 2, "name": "State Board", "school_count": 43},
    {"id": 3, "name": "IB Board", "school_count": 8},
    {"id": 4, "name": "Cambridge/IGCSE", "school_count": 12},
    {"id": 5, "name": "ICSE/CISCE", "school_count": 6},
]

# API Endpoints
@app.get("/")
def read_root():
    return {"message": "Welcome to Ezyschooling API"}

@app.get("/api/cities")
def get_cities():
    return cities

@app.get("/api/schools")
def get_schools(city: Optional[str] = None, board: Optional[str] = None):
    filtered_schools = schools
    if city:
        filtered_schools = [s for s in filtered_schools if s["location"].lower() == city.lower()]
    if board:
        filtered_schools = [s for s in filtered_schools if s["board"].lower() == board.lower()]
    return filtered_schools

@app.get("/api/schools/{school_id}")
def get_school(school_id: int):
    school = next((s for s in schools if s["id"] == school_id), None)
    if school:
        return school
    return {"error": "School not found"}

@app.get("/api/areas")
def get_areas():
    return areas

@app.get("/api/boards")
def get_boards():
    return boards

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
