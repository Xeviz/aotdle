from sqlalchemy import Table, Column, Integer, String, ForeignKey, Boolean, ClauseList
from sqlalchemy.orm import relationship
from config import Base


class Person(Base):
    __tablename__ = 'persons'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    gender = Column(Integer, ForeignKey("genders.id"), nullable=True)
    debut_season = Column(Integer, ForeignKey("seasons.id"), nullable=True)
    fraction = Column(Integer, ForeignKey("fractions.id"), nullable=True)
    rank = Column(Integer, ForeignKey("ranks.id"), nullable=True)
    origins = Column(String, nullable=True)


class Gender(Base):
    __tablename__ = 'genders'

    id = Column(Integer, primary_key=True, index=True)
    gender = Column(String, index=True, unique=True)

class Season(Base):
    __tablename__ = 'seasons'

    id = Column(Integer, primary_key=True, index=True)
    season = Column(String, index=True, unique=True)
    release_date = Column(String)

class Fraction(Base):
    __tablename__ = 'fractions'

    id = Column(Integer, primary_key=True, index=True)
    fraction = Column(String, index=True, unique=True)

class Rank(Base):
    __tablename__ = 'ranks'

    id = Column(Integer, primary_key=True, index=True)
    rank = Column(String, index=True, unique=True)

class Origin(Base):
    __tablename__ = 'origins'

    id = Column(Integer, primary_key=True, index=True)
    origin = Column(String, index=True, unique=True)

class Quote(Base):
    __tablename__ = 'quotes'

    id = Column(Integer, primary_key=True, index=True)
    quote = Column(String, index=True, unique=True)
    person_id = Column(Integer, ForeignKey("persons.id"), nullable=False)

class ImageAddress(Base):
    __tablename__ = 'image_addresses'

    id = Column(Integer, primary_key=True, index=True)
    person_id = Column(Integer, ForeignKey("persons.id"), nullable=False)
    image_id = Column(Integer, nullable=False)
