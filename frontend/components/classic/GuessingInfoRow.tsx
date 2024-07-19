"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import PictureTile from "./PictureTile";
import InfoTile from "./InfoTile";

const BorderTile = styled(Box)({
  width: "76px",
  height: "76px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "2px",
  textShadow: "2px 2px 4px #000000",
  color: "#ffffff",
});

const ContainerTile = styled(Box)({
  width: "64px",
  height: "48px",
  borderBottom: "2px solid #ffffff",
  boxShadow: "0 4px 4px #000000",
  fontSize: "12px",
  margin: "auto",
  display: "grid",
  textAlign: "center",
  alignItems: "center",
});

const ContainerBox = styled(Box)({
  display: "flex",
  position: "relative",
  width: "50%",
  margin: "auto",
});

const GuessingInfoRow: React.FC = () => {
  return (
    <ContainerBox>
      <Box display={"flex"}>
        <BorderTile>
          <ContainerTile>Character</ContainerTile>
        </BorderTile>
        <BorderTile>
          <ContainerTile>Gender</ContainerTile>
        </BorderTile>
        <BorderTile>
          <ContainerTile>Debut Season</ContainerTile>
        </BorderTile>
        <BorderTile>
          <ContainerTile>Fraction</ContainerTile>
        </BorderTile>
        <BorderTile>
          <ContainerTile>Rank</ContainerTile>
        </BorderTile>
        <BorderTile>
          <ContainerTile>Origin</ContainerTile>
        </BorderTile>
      </Box>
    </ContainerBox>
  );
};
export default GuessingInfoRow;
