import "./App.css";
import Stcards from "./stcards";
import { Box, Button, Grid, Stack } from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";
import * as React from "react";

import { useNavigate } from "react-router-dom";

export default function Types() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/storypage");
  };
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stcards />
      <div
        className="modal"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <h1>Read More..</h1>
      </div>
    </Box>
  );
}
