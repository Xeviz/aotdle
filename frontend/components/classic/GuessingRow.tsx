"use client";
import React, { useState, useEffect } from "react";
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

const ContainerBox = styled(Box)({
  display: "flex",
  position: "relative",
  marginTop: "10px",
});

const TileDelayer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible" && prop !== "transitionDelay",
})<{ visible: boolean; transitionDelay: number }>(
  ({ visible, transitionDelay }) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 0.75s cubic-bezier(0.25, 0.1, 0.25, 1) ${transitionDelay}s`,
  })
);

interface GuessingRowProps {
  onVictory: () => void;
  person: Person;
  comparison: Comparison;
}

const GuessingRow: React.FC<GuessingRowProps> = ({
  person,
  comparison,
  onVictory,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const isVictory =
      comparison.gender[0] &&
      comparison.debut_season[0] &&
      comparison.fraction[0] &&
      comparison.rank[0] &&
      comparison.origins[0];

    if (isVictory) {
      const timer = setTimeout(() => {
        onVictory();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [comparison, onVictory]);

  return (
    <ContainerBox>
      <Box display={"flex"} margin={"auto"}>
        <TileDelayer visible={visible} transitionDelay={0}>
          <PictureTile name={person.name}></PictureTile>
        </TileDelayer>

        <TileDelayer visible={visible} transitionDelay={1}>
          <InfoTile
            isCorrect={comparison.gender[0]}
            isPartiallyCorrect={comparison.gender[1]}
            content={person.gender}
          ></InfoTile>
        </TileDelayer>

        <TileDelayer visible={visible} transitionDelay={2}>
          <InfoTile
            isCorrect={comparison.debut_season[0]}
            isPartiallyCorrect={comparison.debut_season[1]}
            content={person.debut_season}
          ></InfoTile>
        </TileDelayer>

        <TileDelayer visible={visible} transitionDelay={3}>
          <InfoTile
            isCorrect={comparison.fraction[0]}
            isPartiallyCorrect={comparison.fraction[1]}
            content={person.fraction}
          ></InfoTile>
        </TileDelayer>

        <TileDelayer visible={visible} transitionDelay={4}>
          <InfoTile
            isCorrect={comparison.rank[0]}
            isPartiallyCorrect={comparison.rank[1]}
            content={person.rank}
          ></InfoTile>
        </TileDelayer>

        <TileDelayer visible={visible} transitionDelay={5}>
          <InfoTile
            isCorrect={comparison.origins[0]}
            isPartiallyCorrect={comparison.origins[1]}
            content={person.origins}
          ></InfoTile>
        </TileDelayer>
      </Box>
    </ContainerBox>
  );
};
export default GuessingRow;
