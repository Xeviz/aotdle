"use client";
import React, { ReactNode, useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import GuessingPrompter from "../GuessingPrompter";
import comparePersons from "../../functions/ComparePersons";
import fetchPersons from "../../functions/FetchPersons";
import WinConfirmation from "../WinConfirmation";
import GuessTile from "./GuessTile";
import fetchRandomQuote from "../../functions/FetchRandomQuote";

const BoxWrapper = styled(Box)({
  margin: "auto",
  width: "50%",
  alignItems: "center",
  paddingBottom: "120px",
});

const BorderTile = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  height: "200px",
  width: "406px",
  backgroundImage:
    "radial-gradient(ellipse at top, #AAAAFF, transparent), radial-gradient(ellipse at bottom, #AAAAFF, transparent);",
  borderRadius: "8px",
  marginBottom: "20px",
  boxSizing: "border-box",
});

const ContentTile = styled(Box)({
  margin: "auto",
  height: "calc(100% - 6px)",
  width: "400px",
  backgroundImage: "radial-gradient(#222222, #444444)",
  borderRadius: "8px",
  boxSizing: "border-box",
});

const TextWrapper = styled(Box)({
  paddingTop: "5px",
  textAlign: "center",
  fontSize: "0.8vw",
  textShadow: "1px 1px 2px #000000",
  color: "#ffffff",
});

const QuoteWrapper = styled(Box)({
  textAlign: "center",
  fontSize: "1.1vw",
  textShadow: "3px 5px 5px #000000",
  color: "#ffffff",
  margin: "auto",
  width: "95%",
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
        const randomGuess = await fetchRandomQuote();
        if (randomGuess) {
          setCorrectGuess(randomGuess[1]);
          setQuote(randomGuess[0]);
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
    console.log(correctGuess);
    console.log(inputValue);
    possibleGuesses.forEach((posGuess) => {
      if (posGuess.name === inputValue && correctGuess) {
        setUsedGuesses((prevUsedGuesses) => [posGuess, ...prevUsedGuesses]);
        setPossibleGuesses(
          possibleGuesses.filter((posGuess) => posGuess.name !== inputValue)
        );
        return;
      }
    });
  };

  const onVictory = async () => {
    setWin(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <BoxWrapper>
      <BorderTile>
        <ContentTile>
          <TextWrapper>{"Which character once said:"}</TextWrapper>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            }}
          >
            <QuoteWrapper>{quote}</QuoteWrapper>
          </Box>
        </ContentTile>
      </BorderTile>
      {!win && (
        <GuessingPrompter
          onInputChange={handleInputChange}
          onSubmit={onSubmit}
          possibleGuesses={possibleGuesses}
        ></GuessingPrompter>
      )}
      {usedGuesses.map((guess) => (
        <GuessTile
          key={guess.id}
          name={guess.name}
          correct={correctGuess ? guess.id === correctGuess.id : false}
          onVictory={onVictory}
        ></GuessTile>
      ))}
      {win && correctGuess && <WinConfirmation name={correctGuess.name} />}
    </BoxWrapper>
  );
};
export default QuoteModeWindow;
