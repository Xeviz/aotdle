"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import fetchPersons from "../../functions/FetchPersons";
import fetchPersonInfo from "../../functions/FetchPersonInfo";
import PictureTile from "../../components/PictureTile";
import InfoTile from "../../components/InfoTile";
import { Box } from "@mui/material";
import GuessingRow from "../../components/GuessingRow";

interface FetchedPerson {
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
  const [person, setPerson] = useState<FetchedPerson | null>(null);

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
    const fetchData = async () => {
      try {
        const data = await fetchPersonInfo(possibleGuesses[0]);
        setPerson(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching person info:", error);
      }
    };

    fetchData();
  }, [possibleGuesses]);

  return (
    <Box
      display="flex"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {person && <GuessingRow person={person} correctPerson={person} />}
      xd
    </Box>
  );
};

export default Home;
