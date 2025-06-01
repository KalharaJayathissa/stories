import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Stcards from "./stcards";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import axios from "axios";
import { API_BASE_URL } from "./BackendUrl"; // Adjust the import path as necessary

function Storypage() {
  const navigate = useNavigate();

  // Define the tiles array
  const [tiles, setTiles] = useState([]);

  // Generate a random background image
  const getRandomBackgroundImage = () => {
    const randomNumber = Math.floor(Math.random() * 8) + 1; // Random number between 1 and 8
    return `/screen${randomNumber}.png`; // Path to the random background image
  };

  const [backgroundImage, setBackgroundImage] = useState(
    getRandomBackgroundImage()
  );

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/stories`);
        setTiles(res.data);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.2, ease: "easeOut" },
      }} // Animation duration
      exit={{
        opacity: 0,
        x: 50,
        transition: { duration: 0.2, ease: "easeIn" }, // Animation duration for exit
      }}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the random background image
        backgroundSize: "cover", // Ensure the image covers the entire background
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={-10}
        sx={{
          position: "fixed", // or "absolute" if inside a positioned parent
          top: 0,
          right: 0,
          width: "10%",
          height: "100vh", // full viewport height
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start", // or "center" if you want it centered vertically
          padding: 7, // optional padding
        }}
      >
        <div style={{ textAlign: "left", margin: "20px" }}>
          <Button
            variant="contained"
            color="white"
            onClick={() => navigate("/")}
          >
            &lt; Home
          </Button>
          <div style={{ padding: "15px" }}></div>
        </div>
        {tiles.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Loading / No items available or Back end is offline.</h2>
          </div>
        ) : (
          <Stcards tiles={tiles} />
        )}
      </Stack>
    </motion.div>
  );
}

export default Storypage;
