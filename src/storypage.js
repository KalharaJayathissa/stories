import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Stcards from "./stcards";

function Storypage() {
  const navigate = useNavigate();

  // Define the tiles array
  const tiles = [
    {
      id: 1,
      title: "A Journey Through the Mountains",
      description: "A short story about discovery and survival.",
      image: "https://picsum.photos/id/1018/400/200",
    },
    {
      id: 2,
      title: "The Silent City",
      description: "Mystery unfolds in a city where time stands still.",
      image: "https://picsum.photos/id/1025/400/200",
    },
    {
      id: 3,
      title: "Tales of the Ocean",
      description: "Stories from sailors lost and found.",
      image: "https://picsum.photos/id/1011/400/200",
    },
    {
      id: 4,
      title: "The Last Sunset",
      description: "A love story set in a dystopian world.",
      image: "https://picsum.photos/id/1020/400/200",
    },
    {
      id: 5,
      title: "Whispers in the Forest",
      description: "A horror tale deep in the woods.",
      image: "https://picsum.photos/id/1032/400/200",
    },
    {
      id: 6,
      title: "Spacewalk",
      description: "Exploring the unknown aboard a forgotten spacecraft.",
      image: "https://picsum.photos/id/1041/400/200",
    },
    {
      id: 7,
      title: "The Hidden Valley",
      description: "A tale of adventure in a mysterious valley.",
      image: "https://picsum.photos/id/1050/400/200",
    },
    {
      id: 8,
      title: "Echoes of the Past",
      description: "Uncovering secrets buried in time.",
      image: "https://picsum.photos/id/1062/400/200",
    },
    {
      id: 9,
      title: "The Forgotten Island",
      description: "A story of survival on an uncharted island.",
      image: "https://picsum.photos/id/1071/400/200",
    },
    {
      id: 10,
      title: "The Clockmaker's Legacy",
      description: "A mystery revolving around a clockmaker's invention.",
      image: "https://picsum.photos/id/1084/400/200",
    },
    {
      id: 11,
      title: "Beneath the Waves",
      description: "Exploring the wonders of the deep sea.",
      image: "https://picsum.photos/id/1096/400/200",
    },
    {
      id: 12,
      title: "The Desert Mirage",
      description: "A journey through the scorching sands.",
      image: "https://picsum.photos/id/1104/400/200",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #cce0ff,  #3385ff)", // Gradient background
        height: "100vh",
        width: "100vw",
        position: "fixed", // Ensures the page fully covers the viewport
        top: 0,
        left: 0,
        overflow: "auto", // Allows scrolling if content exceeds the viewport
      }}
    >
      <Stack spacing={2}>
        <div style={{ textAlign: "left", margin: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            &lt; Home
          </Button>
          <h1>Story Page</h1>
          <p>This is the story page.</p>
        </div>
        <Stcards tiles={tiles} />
      </Stack>
    </div>
  );
}

export default Storypage;
