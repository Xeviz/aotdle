"use client";
import { Box, Button } from "@mui/material";
import ClassicModeWindow from "../../components/classic/ClassicModeWindow";
import NavBar from "../../components/NavBar";

const Home: React.FC = () => {
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
      <NavBar></NavBar>
      <ClassicModeWindow />
    </Box>
  );
};

export default Home;
