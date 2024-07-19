"use client";
import React, { ReactNode } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import GuessingPrompter from "./GuessingPrompter";
import GuessingInfoRow from "./GuessingInfoRow";
import GuessingRow from "./GuessingRow";
import { useState } from "react";

const BoxWrapper = styled(Box)({
  margin: "auto",
  width: "50%",
  alignItems: "center",
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

interface ClassicModeProps {
  possibleGuesses: Person[];
  usedGuesses: Person[];
  correctGuess: Person | null;
}

const ClassicModeWindow: React.FC<ClassicModeProps> = ({
  possibleGuesses,
  usedGuesses,
  correctGuess,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (value: string) => {
    console.log(value);
    setInputValue(value);
  };
  return (
    <BoxWrapper>
      <GuessingPrompter
        onInputChange={handleInputChange}
        possibleGuesses={possibleGuesses}
      ></GuessingPrompter>
      <GuessingInfoRow></GuessingInfoRow>
    </BoxWrapper>
  );
};
export default ClassicModeWindow;
