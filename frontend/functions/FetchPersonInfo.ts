"use client";
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

async function fetchPersonInfo(person: Person) {
  try {
    const fetchedGender = await axiosClient.get(`/genders/${person.gender}`);
    const fetchedDebut = await axiosClient.get(
      `/seasons/${person.debut_season}`
    );
    const fetchedFraction = await axiosClient.get(
      `/fractions/${person.fraction}`
    );
    const fetchedRank = await axiosClient.get(`/ranks/${person.rank}`);
    const personAdam: FetchedPerson = {
      id: person.id,
      name: person.name,
      gender: fetchedGender.data.gender,
      debut_season: fetchedDebut.data.season,
      fraction: fetchedFraction.data.fraction,
      rank: fetchedRank.data.rank,
      origins: person.origins,
    };
    return personAdam;
  } catch (error) {
    console.error("person info fetching error:", error);
    return null;
  }
}
export default fetchPersonInfo;
