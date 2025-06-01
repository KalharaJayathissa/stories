import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Stcards from "./stcards";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import PageFooter from "./PageFooter";
import axios from "axios";
import { API_BASE_URL } from "./BackendUrl"; // Adjust the import path as necessary

function Storypage() {
  const navigate = useNavigate();

  // Define the tiles array
  const [tiles, setTiles] = useState([]);

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
      //Animation

      style={{
        background: "linear-gradient(to bottom, #cce0ff,  #3385ff)", // Gradient background
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
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
          <div style={{ padding: "15px" }}>
            
            
          </div>
        </div>
        {tiles.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Loading / No items availabele or Back end is offline.</h2>
          </div>
        ) : (
          <Stcards tiles={tiles} />
        )}
      </Stack>
      <PageFooter />
    </motion.div>
  );
}

export default Storypage;
