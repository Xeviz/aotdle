"use client";
import { Box, Button } from "@mui/material";
import ClassicModeWindow from "../../components/classic/ClassicModeWindow";
import NavBar from "../../components/NavBar";

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
      <NavBar></NavBar>
      <ClassicModeWindow />
    </Box>
  );
};

export default Home;
