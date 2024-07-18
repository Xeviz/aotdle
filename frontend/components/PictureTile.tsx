"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const PictureBox = styled(Box)({
  width: "64px",
  height: "64px",
  background: "linear-gradient(to bottom, grey, blue)",
});

const PictureTile: React.FC = () => {
  return <PictureBox></PictureBox>;
};
export default PictureTile;
