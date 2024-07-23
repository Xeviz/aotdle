"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const PictureBox = styled(Box)({
  width: "76px",
  height: "76px",
});

const PictureTile: React.FC<{ name: string }> = ({ name }) => {
  const [formattedName, setFormattedName] = useState<string>(name);

  useEffect(() => {
    setFormattedName(name.replace(/ /g, "_"));
  }, [name]);

  return (
    <PictureBox
      sx={{
        backgroundImage: `url(/images/${formattedName}.png)`,
        backgroundSize: "cover",
        boxShadow: "2px 2px 4px #000000",
        backgroundPosition: "center",
      }}
    ></PictureBox>
  );
};
export default PictureTile;
