"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";
import PictureTile from "../classic/PictureTile";

const BorderWindow = styled(Box)({
  width: "306px",
  height: "316px",
  margin: "auto",
  marginTop: "20px",
  backgroundImage: "linear-gradient(to bottom, #ffffff, #cccccc)",
  boxShadow: "2px 4px 4px #000000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ContentWindow = styled(Box)({
  width: "300px",
  height: "calc(100% - 6px)",
  margin: "auto",
  backgroundImage: "linear-gradient(to bottom, #55ff55, #004400)",
});

const TextWrapper = styled(Box)({
  textAlign: "center",
  fontSize: "1.5vw",
  textShadow: "2px 4px 4px #000000",
  color: "#ffffff",
  marginTop: "10px",
});

const ImageAndTextContainer = styled(Box)({
  paddingTop: "20px",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const WinInfoText = styled(Box)({
  marginLeft: "10px",
  fontSize: "14px",
  textShadow: "2px 4px 4px #000000",
  color: "#ffffff",
  textAlign: "center",
});

const GameModeButton = styled(Button)({
  width: "100px",
  height: "40px",
  background: "red",
  margin: "auto",
  backgroundImage: "radial-gradient(#222222, #444444)",
  textShadow: "2px 4px 4px #000000",
  color: "#ffffff",
  fontFamily: "inherit",
  fontSize: "1.3vw",
  "&:hover": {
    opacity: "0.95",
    fontSize: "1.30vw",
    textShadow: "3px 5px 5px #000000",
  },
});

const ButtonBorder = styled(Box)({
  width: "108px",
  height: "48px",
  margin: "auto",
  marginTop: "10px",
  backgroundImage:
    "radial-gradient(ellipse at top, #AAAAFF, transparent), radial-gradient(ellipse at bottom, #AAAAFF, transparent);",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
});

const WinConfirmation: React.FC<{ name: string }> = ({ name }) => {
  return (
    <BorderWindow>
      <ContentWindow>
        <TextWrapper>{"Congratulations!"}</TextWrapper>
        <ImageAndTextContainer>
          <PictureTile name={name}></PictureTile>
          <WinInfoText>
            <b>{name}</b> <br></br>
            {"is today's answer!"}
          </WinInfoText>
        </ImageAndTextContainer>
        <TextWrapper>{"Play next gamemode:"}</TextWrapper>
        <ButtonBorder>
          <GameModeButton>{"Quote"}</GameModeButton>
        </ButtonBorder>
        <TextWrapper>{"or come back tomorrow"}</TextWrapper>
      </ContentWindow>
    </BorderWindow>
  );
};
export default WinConfirmation;
