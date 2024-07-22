"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

interface InfoProps {
  isCorrect: boolean;
  isPartiallyCorrect: boolean;
  content: string;
}

const BorderTile = styled(Box)({
  width: "76px",
  height: "76px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "linear-gradient(to bottom, brown, black)",
  marginLeft: "10px",
});

const ContainerTile = styled(Box, {
  shouldForwardProp: (prop) => prop !== "correct" && prop !== "partially",
})<{ correct: boolean; partially: boolean }>(({ correct, partially }) => ({
  width: "72px",
  height: "72px",
  backgroundImage: correct
    ? "radial-gradient(#00FF00, #33FF33, #99FF99)"
    : partially
      ? "radial-gradient(#FFFF00, #FFFF33, #FFFF99)"
      : "radial-gradient(#FF0000, #FF3333, #FF7777)",
  alignContent: "center",
  textAlign: "center",
  fontSize: "12px",
  margin: "auto",
}));

const InfoTile: React.FC<InfoProps> = ({
  isCorrect,
  isPartiallyCorrect,
  content,
}) => {
  return (
    <BorderTile>
      <ContainerTile correct={isCorrect} partially={isPartiallyCorrect}>
        {content}
      </ContainerTile>
    </BorderTile>
  );
};

export default InfoTile;
