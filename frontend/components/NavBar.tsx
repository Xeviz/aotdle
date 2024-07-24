"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box, Card, Button, Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ImageIcon from "@mui/icons-material/Image";

const ContentBox = styled(Box)({
  width: "100%",
  height: "250px",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

const ImageBox = styled(Box)({
  width: "50%",
  height: 0,
  paddingTop: "25px",
  paddingBottom: "250px",
  backgroundImage: "url(/images/title-cut.png)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  filter: "drop-shadow(5px 10px 10px )",
  margin: "auto",
});

const FullWidthContainer = styled(Container)({
  width: "100%",
  padding: 0,
});

const ModePicker = styled(Button)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "linear-gradient(to bottom, #1a1a1a, #000000, #151515)",
  margin: "auto",
  minWidth: "0",
  "&:hover": {
    background: "linear-gradient(to bottom, #2a2a2a, #222222, #252525)",
  },
});

const ModePickerBorder = styled(Box)({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  backgroundImage: "linear-gradient(to bottom, yellow, white, yellow)",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "2px 3px 3px #000000",
});

const ModePickersContainer = styled(Box)({
  margin: "auto",
  background: "transparent",
  width: "250px",
  display: "flex",
  paddingBottom: "30px",
  textAlign: "center",
});

const TextWrapper = styled(Box)({
  textAlign: "center",
  fontSize: "1.1vw",
  textShadow: "2px 4px 4px #000000",
  color: "#ffffff",
  marginBottom: "10px",
});

const BorderTile = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  height: "100px",
  width: "284px",
  backgroundImage:
    "radial-gradient(ellipse at top, #AAAAFF, transparent), radial-gradient(ellipse at bottom, #AAAAFF, transparent);",
  borderRadius: "8px",
  marginBottom: "20px",
});

const ContentTile = styled(Box)({
  margin: "auto",
  height: "96px",
  width: "276px",
  backgroundImage: "radial-gradient(#222222, #444444)",
  borderRadius: "8px",
});

const NavBar: React.FC = () => {
  return (
    <FullWidthContainer>
      <ContentBox>
        <ImageBox></ImageBox>
      </ContentBox>
      <TextWrapper>{"Gamemode:"}</TextWrapper>
      <ModePickersContainer>
        <ModePickerBorder>
          <ModePicker>
            <QuestionMarkIcon
              style={{
                fontSize: "220%",
                color: "orange",
                filter: "drop-shadow(1px 1px 2px #ffffff)",
              }}
            ></QuestionMarkIcon>
          </ModePicker>
        </ModePickerBorder>

        <ModePickerBorder>
          <ModePicker>
            <FormatQuoteIcon
              style={{
                fontSize: "220%",
                color: "orange",
                filter: "drop-shadow(1px 1px 2px #ffffff)",
              }}
            ></FormatQuoteIcon>
          </ModePicker>
        </ModePickerBorder>

        <ModePickerBorder>
          <ModePicker>
            <ImageIcon
              style={{
                fontSize: "180%",
                color: "orange",
                filter: "drop-shadow(1px 1px 1px #ffffff)",
              }}
            ></ImageIcon>
          </ModePicker>
        </ModePickerBorder>
      </ModePickersContainer>
    </FullWidthContainer>
  );
};
export default NavBar;
