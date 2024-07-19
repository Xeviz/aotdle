"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box, TextField, Button, Autocomplete } from "@mui/material";
import { useState } from "react";

const BorderTile = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  width: "254px",
  backgroundImage:
    "radial-gradient(ellipse at top, #AAAAFF, transparent), radial-gradient(ellipse at bottom, #AAAAFF, transparent);",
  borderRadius: "4px",
});

const SendButton = styled(Button)({
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  background: "radial-gradient(#FF0000, #000000)",
  position: "absolute",
  right: "-37.5px",
  top: "50%",
  transform: "translateY(-50%)",
  border: "2px solid white",
  "&:hover": {
    background: "radial-gradient(#FF2020, #000000)",
  },
});

const PromptTextField = styled(TextField)({
  margin: "auto",
  height: "56px",
  width: "246px",
  backgroundImage: "radial-gradient(#222222, #444444)",
  borderRadius: "3px",
  "& .MuiInputBase-input": {
    color: "#ffffff",
    textShadow: "2px 2px 3px #000000",
    textAlign: "center",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Ukrycie borderu w normalnym stanie
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Ukrycie borderu przy najechaniu
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Ukrycie borderu przy fokusie
    },
  },
});

const ContainerBox = styled(Box)({
  display: "flex",
  position: "relative",
  width: "250px",
  margin: "auto",
});

interface Person {
  id: number;
  name: string;
  gender: string;
  debut_season: string;
  fraction: string;
  rank: string;
  origins: string;
}

interface GuessingPrompterProps {
  onInputChange: (value: string) => void;
  possibleGuesses: Person[];
}

const GuessingPrompter: React.FC<GuessingPrompterProps> = ({
  onInputChange,
  possibleGuesses,
}) => {
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setTextFieldValue(value);
    onInputChange(value);
  };

  const handleButtonClick = () => {
    onInputChange(textFieldValue);
  };

  const filteredGuesses =
    textFieldValue.length > 0
      ? possibleGuesses.map((option) => option.name)
      : [];

  return (
    <ContainerBox>
      <BorderTile>
        <Autocomplete
          freeSolo
          options={filteredGuesses}
          value={textFieldValue}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <PromptTextField {...params} variant="outlined" />
          )}
        />
      </BorderTile>
      <SendButton onClick={handleButtonClick}></SendButton>
    </ContainerBox>
  );
};
export default GuessingPrompter;
