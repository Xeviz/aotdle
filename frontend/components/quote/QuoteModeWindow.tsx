"use client";
import React, { ReactNode, useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import GuessingPrompter from "../GuessingPrompter";
import comparePersons from "../../functions/ComparePersons";
import fetchPersons from "../../functions/FetchPersons";
import WinConfirmation from "../quote/WinConfirmation";
import fetchRandomPerson from "../../functions/FetchRandomPerson";

const BoxWrapper = styled(Box)({
  margin: "auto",
  width: "50%",
  alignItems: "center",
  paddingBottom: "120px",
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

const QuoteModeWindow: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [quote, setQuote] = useState<string>("");
  const [usedGuesses, setUsedGuesses] = useState<Person[]>([]);
  const [possibleGuesses, setPossibleGuesses] = useState<Person[]>([]);
  const [correctGuess, setCorrectGuess] = useState<Person>();
  const [win, setWin] = useState(false);

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
        const randomGuess = await fetchRandomPerson();
        if (randomGuess) {
          setCorrectGuess(randomGuess);
        }
        console.log(randomGuess);
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
        setUsedGuesses((prevUsedGuesses) => [posGuess, ...prevUsedGuesses]);
        setPossibleGuesses(
          possibleGuesses.filter((posGuess) => posGuess.name !== inputValue)
        );
        return;
      }
    });
  };

  return (
    <BoxWrapper>
      {!win && (
        <div>
          <TextWrapper>{"Which character once said:"}</TextWrapper>
          <TextWrapper>{"TBD " + quote}</TextWrapper>
          <GuessingPrompter
            onInputChange={handleInputChange}
            onSubmit={onSubmit}
            possibleGuesses={possibleGuesses}
          ></GuessingPrompter>
        </div>
      )}
    </BoxWrapper>
  );
};
export default QuoteModeWindow;
