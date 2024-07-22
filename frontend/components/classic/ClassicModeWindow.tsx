"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import GuessingPrompter from "./GuessingPrompter";
import GuessingInfoRow from "./GuessingInfoRow";
import GuessingRow from "./GuessingRow";
import comparePersons from "../../functions/ComparePersons";
import fetchPersons from "../../functions/FetchPersons";

const BoxWrapper = styled(Box)({
  margin: "auto",
  width: "50%",
  alignItems: "center",
});

const TextWrapper = styled(Box)({
  textAlign: "center",
  fontSize: "1.1vw",
  textShadow: "1px 1px 2px #000000",
  color: "#ffffff",
  marginBottom: "30px",
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

interface Comparison {
  gender: boolean[];
  debut_season: boolean[];
  fraction: boolean[];
  rank: boolean[];
  origins: boolean[];
}

const ClassicModeWindow: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [usedGuesses, setUsedGuesses] = useState<Person[]>([]);
  const [possibleGuesses, setPossibleGuesses] = useState<Person[]>([]);
  const [correctGuess, setCorrectGuess] = useState<Person>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPersons();
        setPossibleGuesses(data);
      } catch (error) {
        console.error("Error fetching persons:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const setCorrect = async () => {
      try {
        console.log(possibleGuesses[0]);
        setCorrectGuess(possibleGuesses[0]);
      } catch (error) {
        console.error("Error fetching person info:", error);
      }
    };

    setCorrect();
  }, [possibleGuesses]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const onSubmit = async () => {
    console.log(inputValue);
    possibleGuesses.forEach((posGuess) => {
      if (posGuess.name === inputValue && correctGuess) {
        const comparison = comparePersons(posGuess, correctGuess);
        setComparisons((prevComparisons) => [comparison, ...prevComparisons]);
        setUsedGuesses((prevUsedGuesses) => [posGuess, ...prevUsedGuesses]);
        setPossibleGuesses(
          possibleGuesses.filter((posGuess) => posGuess.name !== inputValue)
        );
        return;
      }
    });
  };

  const onVictory = async () => {
    console.log("victory");
  };

  return (
    <BoxWrapper>
      <TextWrapper>{"Guess today's Attack on Titan Character"}</TextWrapper>
      <GuessingPrompter
        onInputChange={handleInputChange}
        onSubmit={onSubmit}
        possibleGuesses={possibleGuesses}
      ></GuessingPrompter>
      <GuessingInfoRow></GuessingInfoRow>
      {usedGuesses.map((guess, index) => (
        <GuessingRow
          key={guess.id}
          onVictory={onVictory}
          person={guess}
          comparison={
            comparisons[index] || {
              gender: [false, false],
              debut_season: [false, false],
              fraction: [false, false],
              rank: [false, false],
              origins: [false, false],
            }
          }
        />
      ))}
    </BoxWrapper>
  );
};
export default ClassicModeWindow;
