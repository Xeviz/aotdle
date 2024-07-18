"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import PictureTile from "./PictureTile";
import InfoTile from "./InfoTile";

interface Person {
  id: number;
  name: string;
  gender: string;
  debut_season: string;
  fraction: string;
  rank: string;
  origins: string;
}

interface GuessingRowProps {
  person: Person;
  correctPerson: Person;
}

const GuessingRow: React.FC<GuessingRowProps> = ({ person, correctPerson }) => {
  return (
    <Box display={"flex"}>
      <PictureTile></PictureTile>
      <InfoTile
        isCorrect={person.gender === correctPerson.gender}
        isPartiallyCorrect={person.gender === correctPerson.gender}
        content={person.gender}
      ></InfoTile>
      <InfoTile
        isCorrect={person.debut_season === correctPerson.debut_season}
        isPartiallyCorrect={person.debut_season === correctPerson.debut_season}
        content={person.debut_season}
      ></InfoTile>
      <InfoTile
        isCorrect={person.fraction === correctPerson.fraction}
        isPartiallyCorrect={person.fraction === correctPerson.fraction}
        content={person.fraction}
      ></InfoTile>
      <InfoTile
        isCorrect={person.rank === correctPerson.rank}
        isPartiallyCorrect={person.rank === correctPerson.rank}
        content={person.rank}
      ></InfoTile>
      <InfoTile
        isCorrect={person.origins === correctPerson.origins}
        isPartiallyCorrect={person.origins === correctPerson.origins}
        content={person.origins}
      ></InfoTile>
    </Box>
  );
};
export default GuessingRow;
