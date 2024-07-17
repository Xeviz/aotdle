from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Annotated
from sqlalchemy.orm import Session
from config import engine, SessionLocal
import models
import schemas

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.post("/origins/", response_model=schemas.Origin)
def create_origin(origin: schemas.OriginCreate, db: Session = Depends(get_db)):
    db_origin = models.Origin(origin=origin.origin)
    db.add(db_origin)
    db.commit()
    db.refresh(db_origin)
    return db_origin

@app.post("/multiple_origins/", response_model=List[schemas.Origin])
def create_multiple_origins(origins: List[schemas.OriginCreate], db: Session = Depends(get_db)):
    db_origins = [models.Origin(origin=origin.origin) for origin in origins]
    db.add_all(db_origins)
    db.commit()
    for db_origin in db_origins:
        db.refresh(db_origin)
    return db_origins

@app.get("/origins/", response_model=List[schemas.Origin])
def read_origins(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    origins = db.query(models.Origin).offset(skip).limit(limit).all()
    return origins

@app.get("/origins/{origin_id}", response_model=schemas.Origin)
def read_origin(origin_id: int, db: Session = Depends(get_db)):
    origin = db.query(models.Origin).filter(models.Origin.id == origin_id).first()
    if origin is None:
        raise HTTPException(status_code=404, detail="Origin not found")
    return origin


@app.post("/genders/", response_model=schemas.Gender)
def create_gender(gender: schemas.GenderCreate, db: Session = Depends(get_db)):
    db_gender = models.Gender(gender=gender.gender)
    db.add(db_gender)
    db.commit()
    db.refresh(db_gender)
    return db_gender

@app.get("/genders/", response_model=List[schemas.Gender])
def read_genders(skip: int = 0, limit: int = None, db: Session = Depends(get_db)):
    genders = db.query(models.Gender).offset(skip).limit(limit).all()
    return genders

@app.get("/genders/{gender_id}", response_model=schemas.Gender)
def read_gender(gender_id: int, db: Session = Depends(get_db)):
    gender = db.query(models.Gender).filter(models.Gender.id == gender_id).first()
    if gender is None:
        raise HTTPException(status_code=404, detail="Gender not found")
    return gender


@app.post("/ranks/", response_model=schemas.Rank)
def create_rank(rank: schemas.RankCreate, db: Session = Depends(get_db)):
    db_rank = models.Rank(rank=rank.rank)
    db.add(db_rank)
    db.commit()
    db.refresh(db_rank)
    return db_rank

@app.post("/multiple_ranks/", response_model=List[schemas.Rank])
def create_multiple_ranks(ranks: List[schemas.RankCreate], db: Session = Depends(get_db)):
    db_ranks = [models.Rank(rank=rank.rank) for rank in ranks]
    db.add_all(db_ranks)
    db.commit()
    for db_rank in db_ranks:
        db.refresh(db_rank)
    return db_ranks

@app.get("/ranks/", response_model=List[schemas.Rank])
def read_ranks(skip: int = 0, limit: int = None, db: Session = Depends(get_db)):
    ranks = db.query(models.Rank).offset(skip).limit(limit).all()
    return ranks

@app.get("/ranks/{ranks_id}", response_model=schemas.Rank)
def read_rank(rank_id: int, db: Session = Depends(get_db)):
    rank = db.query(models.Rank).filter(models.Rank.id == rank_id).first()
    if rank is None:
        raise HTTPException(status_code=404, detail="Rank not found")
    return rank


@app.post("/fractions/", response_model=schemas.Fraction)
def create_fraction(fraction: schemas.FractionCreate, db: Session = Depends(get_db)):
    db_fraction = models.Fraction(fraction=fraction.fraction)
    db.add(db_fraction)
    db.commit()
    db.refresh(db_fraction)
    return db_fraction

@app.post("/multiple_fractions/", response_model=List[schemas.Fraction])
def create_multiple_fractions(fractions: List[schemas.FractionCreate], db: Session = Depends(get_db)):
    db_fractions = [models.Fraction(fraction=fraction.fraction) for fraction in fractions]
    db.add_all(db_fractions)
    db.commit()
    for db_fraction in db_fractions:
        db.refresh(db_fraction)
    return db_fractions

@app.get("/fractions/", response_model=List[schemas.Fraction])
def read_fractions(skip: int = 0, limit: int = None, db: Session = Depends(get_db)):
    fractions = db.query(models.Fraction).offset(skip).limit(limit).all()
    return fractions

@app.get("/fractions/{fraction_id}", response_model=schemas.Fraction)
def read_fraction(fraction_id: int, db: Session = Depends(get_db)):
    fraction = db.query(models.Fraction).filter(models.Fraction.id == fraction_id).first()
    if fraction is None:
        raise HTTPException(status_code=404, detail="Fraction not found")
    return fraction


@app.post("/seasons/", response_model=schemas.Season)
def create_season(season: schemas.SeasonCreate, db: Session = Depends(get_db)):
    db_season = models.Season(season=season.season, release_date=season.release_date)
    db.add(db_season)
    db.commit()
    db.refresh(db_season)
    return db_season

@app.post("/multiple_seasons/", response_model=List[schemas.Season])
def create_multiple_seasons(seasons: List[schemas.SeasonCreate], db: Session = Depends(get_db)):
    db_seasons = [models.Season(season=season.season, release_date=season.release_date) for season in seasons]
    db.add_all(db_seasons)
    db.commit()
    for db_season in db_seasons:
        db.refresh(db_season)
    return db_seasons

@app.get("/seasons/", response_model=List[schemas.Season])
def read_seasons(skip: int = 0, limit: int = None, db: Session = Depends(get_db)):
    seasons = db.query(models.Season).offset(skip).limit(limit).all()
    return seasons

@app.get("/seasons/{season_id}", response_model=schemas.Season)
def read_season(season_id: int, db: Session = Depends(get_db)):
    season = db.query(models.Season).filter(models.Season.id == season_id).first()
    if season is None:
        raise HTTPException(status_code=404, detail="Season not found")
    return season


@app.post("/persons/", response_model=schemas.Person)
def create_person(person: schemas.PersonCreate,  db: Session = Depends(get_db)):

    db_person = models.Person(
        name=person.name,
        gender=person.gender,
        debut_season=person.debut_season,
        fraction=person.fraction,
        rank=person.rank,
        origins=person.origins
    )

    db.add(db_person)
    db.commit()
    db.refresh(db_person)

    return db_person

@app.post("/multiple_persons/", response_model=List[schemas.Person])
def create_multiple_persons(persons: List[schemas.PersonCreate], db: Session = Depends(get_db)):

    db_persons = [models.Person(
        name=person.name,
        gender=person.gender,
        debut_season=person.debut_season,
        fraction=person.fraction,
        rank=person.rank,
        origins=person.origins
    ) for person in persons]
    db.add_all(db_persons)
    db.commit()
    for db_person in db_persons:
        db.refresh(db_person)
    return db_persons

@app.get("/persons/", response_model=List[schemas.Person])
def read_persons(skip: int = 0, limit: int = None, db: Session = Depends(get_db)):
    persons = db.query(models.Person).offset(skip).limit(limit).all()
    return persons


@app.get("/persons/{person_id}", response_model=schemas.Person)
def read_person(person_id: int, db: Session = Depends(get_db)):
    person = db.query(models.Person).filter(models.Person.id == person_id).first()
    if person is None:
        raise HTTPException(status_code=404, detail="Person not found")
    return person
