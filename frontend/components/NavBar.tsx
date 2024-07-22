"use client";
import React from "react";
import { styled } from "@mui/system";
import { Box, Card, Button, Container } from "@mui/material";
import Image from "next/image";

const ContentBox = styled(Box)({
  width: "100%",
  height: "300px",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

const ImageBox = styled(Box)({
  width: "50%",
  height: 0,
  paddingBottom: "300px",
  backgroundImage: "url(/images/title-cut.png)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  filter: "drop-shadow(5px 10px 10px )",
  margin: "auto",
});

const FullWidthContainer = styled(Container)({
  width: "100%",
  padding: 0,
});

const NavBar: React.FC = () => {
  return (
    <FullWidthContainer>
      <ContentBox>
        <ImageBox></ImageBox>
      </ContentBox>
    </FullWidthContainer>
  );
};
export default NavBar;
