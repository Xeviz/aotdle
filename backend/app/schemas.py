from pydantic import BaseModel
from typing import List, Optional


class GenderBase(BaseModel):
    gender: str


class GenderCreate(GenderBase):
    pass


class Gender(GenderBase):
    id: int

    class Config:
        from_attributes = True


class SeasonBase(BaseModel):
    season: str
    release_date: Optional[str] = None


class SeasonCreate(SeasonBase):
    pass


class Season(SeasonBase):
    id: int

    class Config:
        from_attributes = True


class FractionBase(BaseModel):
    fraction: str


class FractionCreate(FractionBase):
    pass


class Fraction(FractionBase):
    id: int

    class Config:
        from_attributes = True


class RankBase(BaseModel):
    rank: str


class RankCreate(RankBase):
    pass


class Rank(RankBase):
    id: int

    class Config:
        from_attributes = True


class OriginBase(BaseModel):
    origin: str


class OriginCreate(OriginBase):
    pass


class Origin(OriginBase):
    id: int

    class Config:
        from_attributes = True


class QuoteBase(BaseModel):
    quote: str
    person_id: int


class QuoteCreate(QuoteBase):
    pass


class Quote(QuoteBase):
    id: int

    class Config:
        from_attributes = True


class PersonBase(BaseModel):
    name: str
    gender: Optional[int] = None
    debut_season: Optional[int] = None
    fraction: Optional[int] = None
    rank: Optional[int] = None
    origins: Optional[str] = None


class PersonCreate(PersonBase):
    pass


class Person(PersonBase):
    id: int

    class Config:
        from_attributes = True
