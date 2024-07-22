"use client";

interface Person {
  id: number;
  name: string;
  gender: string;
  debut_season: string;
  fraction: string;
  rank: string;
  origins: string;
}

interface Comparison {
  gender: boolean[];
  debut_season: boolean[];
  fraction: boolean[];
  rank: boolean[];
  origins: boolean[];
}

function comparePersons(guess: Person, correctGuess: Person) {
  const comparison: Comparison = {
    gender: [
      guess.gender === correctGuess.gender,
      guess.gender === correctGuess.gender,
    ],
    debut_season: [
      guess.debut_season === correctGuess.debut_season,
      guess.debut_season === correctGuess.debut_season,
    ],
    fraction: [
      guess.fraction === correctGuess.fraction,
      correctGuess.fraction.includes(guess.fraction),
    ],
    rank: [
      guess.rank === correctGuess.rank,
      correctGuess.rank.includes(guess.rank),
    ],
    origins: [
      guess.origins === correctGuess.origins,
      correctGuess.origins.includes(guess.origins),
    ],
  };
  return comparison;
}
export default comparePersons;
