"use client";
import { useState } from "react";
import axiosClient from "../components/Api";

interface Person {
  id: number;
  name: string;
  gender: number;
  debut_season: number;
  fraction: number;
  rank: number;
  origins: string;
}

interface FetchedPerson {
  id: number;
  name: string;
  gender: string;
  debut_season: string;
  fraction: string;
  rank: string;
  origins: string;
}

function getIdForToday(): number {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const randomId = (dayOfYear % 6) + 1;
  return randomId;
}

async function fetchRandomPerson() {
  let person: Person;
  const id = getIdForToday();
  try {
    const fetchedResult = await axiosClient.get(`/persons/${id}`);
    person = fetchedResult.data;
    if (person) {
      const fetchedGender = await axiosClient.get(`/genders/${person.gender}`);
      const fetchedDebut = await axiosClient.get(
        `/seasons/${person.debut_season}`
      );
      const fetchedFraction = await axiosClient.get(
        `/fractions/${person.fraction}`
      );
      const fetchedRank = await axiosClient.get(`/ranks/${person.rank}`);
      const randomPerson: FetchedPerson = {
        id: person.id,
        name: person.name,
        gender: fetchedGender.data.gender,
        debut_season: fetchedDebut.data.season,
        fraction: fetchedFraction.data.fraction,
        rank: fetchedRank.data.rank,
        origins: person.origins,
      };
      return randomPerson;
    }
  } catch (error) {
    console.error("person info fetching error:", error);
    return null;
  }
}
export default fetchRandomPerson;
