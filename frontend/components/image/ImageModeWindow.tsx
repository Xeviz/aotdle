"use client";
import React, { ReactNode, useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import GuessingPrompter from "../GuessingPrompter";
import fetchPersons from "../../functions/FetchPersons";
import WinConfirmation from "../WinConfirmation";
import GuessTile from "./GuessTile";
import fetchRandomImage from "../../functions/FetchRandomImage";

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
  height: "400px",
  width: "606px",
  backgroundImage:
    "radial-gradient(ellipse at top, #AAAAFF, transparent), radial-gradient(ellipse at bottom, #AAAAFF, transparent);",
  borderRadius: "8px",
  marginBottom: "20px",
  boxSizing: "border-box",
});

const ContentTile = styled(Box)({
  margin: "auto",
  height: "calc(100% - 6px)",
  width: "600px",
  backgroundImage: "radial-gradient(#222222, #444444)",
  borderRadius: "8px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
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

const ImageModeWindow: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [imageId, setImageId] = useState<number>(0);
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
        const randomGuess = await fetchRandomImage();
        if (randomGuess) {
          setCorrectGuess(randomGuess[1]);
          setImageId(randomGuess[0]);
        }
        console.log(randomGuess);
      } catch (error) {
        console.error("Error fetching person info:", error);
      }
    };

    setCorrect();
  }, [possibleGuesses]);

  const handleInputChange = (value: string) => {
    console.log(value);
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
          <Box
            style={{
              width: "350px",
              height: "350px",
              margin: "auto",
              backgroundImage: `url(/images/image_mode/${imageId}.png)`,
              backgroundPosition: "left bottom",
              overflow: "hidden",
              boxShadow: "4px 4px 8px #000000",
            }}
          ></Box>
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
      {win && (
        <Box
          style={{
            width: "350px",
            height: "350px",
            margin: "auto",
            backgroundImage: `url(/images/image_mode/${imageId}.png)`,
            backgroundSize: "cover",
            marginTop: "20px",
            boxShadow: "4px 4px 8px #000000",
          }}
        ></Box>
      )}
      {win && correctGuess && <WinConfirmation name={correctGuess.name} />}
    </BoxWrapper>
  );
};
export default ImageModeWindow;
