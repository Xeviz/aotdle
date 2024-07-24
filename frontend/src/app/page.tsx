"use client";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import ClassicModeWindow from "../../components/classic/ClassicModeWindow";
import QuoteModeWindow from "../../components/quote/QuoteModeWindow";
import ImageModeWindow from "../../components/image/ImageModeWindow";
import NavBar from "../../components/NavBar";

const Home: React.FC = () => {
  const [currentMode, setCurrentMode] = useState("classic");

  useEffect(() => {
    const updateModeFromHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash === "classic" || hash === "quote" || hash === "image") {
        setCurrentMode(hash);
      } else {
        setCurrentMode("classic");
      }
    };
    updateModeFromHash();

    window.addEventListener("hashchange", updateModeFromHash);

    return () => {
      window.removeEventListener("hashchange", updateModeFromHash);
    };
  }, []);

  let ModeComponent;
  switch (currentMode) {
    case "quote":
      ModeComponent = QuoteModeWindow;
      break;
    case "image":
      ModeComponent = ImageModeWindow;
      break;
    case "classic":
    default:
      ModeComponent = ClassicModeWindow;
      break;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        backgroundImage: "url(/images/background.png)",
        backgroundSize: "auto",
        backgroundPosition: "top left",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      <ModeComponent />
    </Box>
  );
};

export default Home;
