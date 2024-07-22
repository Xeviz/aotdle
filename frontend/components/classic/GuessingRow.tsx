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

interface Comparison {
  gender: boolean[];
  debut_season: boolean[];
  fraction: boolean[];
  rank: boolean[];
  origins: boolean[];
}

interface GuessingRowProps {
  person: Person;
  comparison: Comparison;
}

const ContainerBox = styled(Box)({
  display: "flex",
  position: "relative",
  marginTop: "10px",
});

const GuessingRow: React.FC<GuessingRowProps> = ({ person, comparison }) => {
  return (
    <ContainerBox>
      <Box display={"flex"} margin={"auto"}>
        <PictureTile></PictureTile>
        <InfoTile
          isCorrect={comparison.gender[0]}
          isPartiallyCorrect={comparison.gender[1]}
          content={person.gender}
        ></InfoTile>
        <InfoTile
          isCorrect={comparison.debut_season[0]}
          isPartiallyCorrect={comparison.debut_season[1]}
          content={person.debut_season}
        ></InfoTile>
        <InfoTile
          isCorrect={comparison.fraction[0]}
          isPartiallyCorrect={comparison.fraction[1]}
          content={person.fraction}
        ></InfoTile>
        <InfoTile
          isCorrect={comparison.rank[0]}
          isPartiallyCorrect={comparison.rank[1]}
          content={person.rank}
        ></InfoTile>
        <InfoTile
          isCorrect={comparison.origins[0]}
          isPartiallyCorrect={comparison.origins[1]}
          content={person.origins}
        ></InfoTile>
      </Box>
    </ContainerBox>
  );
};
export default GuessingRow;
