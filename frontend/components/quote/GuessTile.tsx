"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { StringDecoder } from "string_decoder";

const PictureBox = styled(Box)({
  width: "76px",
  height: "76px",
});

const ContentTile = styled(Box, {
  shouldForwardProp: (prop) => prop !== "correct",
})<{ correct: boolean }>(({ correct }) => ({
  width: "340px",
  height: "90px",
  backgroundImage: correct
    ? "radial-gradient(#00FF00, #33FF33, #99FF99)"
    : "radial-gradient(#FF0000, #FF3333, #FF7777)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  margin: "auto",
}));

const BorderTile = styled(Box)({
  width: "346px",
  height: "96px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  backgroundImage: "linear-gradient(to bottom, #aaaaaa, #000000)",
  marginTop: "15px",
});

const TileDelayer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ visible }) => ({
  opacity: visible ? 1 : 0,
  transition: `opacity 0.75s cubic-bezier(0.25, 0.1, 0.25, 1)`,
}));

interface GuessTileProps {
  onVictory: () => void;
  name: string;
  correct: boolean;
}

const GuessTile: React.FC<GuessTileProps> = ({ onVictory, name, correct }) => {
  const [formattedName, setFormattedName] = useState<string>(name);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setFormattedName(name.replace(/ /g, "_"));
    setVisible(true);
  }, [name]);

  useEffect(() => {
    const isVictory = correct;
    if (isVictory) {
      const timer = setTimeout(() => {
        onVictory();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [correct, onVictory]);

  return (
    <TileDelayer visible={visible}>
      <BorderTile>
        <ContentTile correct={correct}>
          <PictureBox
            sx={{
              backgroundImage: `url(/images/${formattedName}.png)`,
              backgroundSize: "cover",
              boxShadow: "2px 2px 4px #000000",
              backgroundPosition: "center",
            }}
          ></PictureBox>
        </ContentTile>
      </BorderTile>
    </TileDelayer>
  );
};
export default GuessTile;
