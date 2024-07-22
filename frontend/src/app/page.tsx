"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import fetchPersons from "../../functions/FetchPersons";
import { Box, Button } from "@mui/material";
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
      <ClassicModeWindow />
    </Box>
  );
};

export default Home;
