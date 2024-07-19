"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import fetchPersons from "../../functions/FetchPersons";
import { Box } from "@mui/material";
import GuessingRow from "../../components/classic/GuessingRow";
import GuessingInfoRow from "../../components/classic/GuessingInfoRow";
import GuessingPrompter from "../../components/classic/GuessingPrompter";
import ClassicModeWindow from "../../components/classic/ClassicModeWindow";

interface Person {
  id: number;
  name: string;
  gender: string;
  debut_season: string;
  fraction: string;
  rank: string;
  origins: string;
}

const Home: React.FC = () => {
  const [possibleGuesses, setPossibleGuesses] = useState([]);
  const [usedGuesses, setUsedGuesses] = useState([]);
  const [correctGuess, setCorrectGuess] = useState<Person | null>(null);

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

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ClassicModeWindow
        possibleGuesses={possibleGuesses}
        usedGuesses={usedGuesses}
        correctGuess={correctGuess}
      ></ClassicModeWindow>
      {correctGuess && (
        <GuessingRow person={correctGuess} correctPerson={correctGuess} />
      )}
    </Box>
  );
};

export default Home;
