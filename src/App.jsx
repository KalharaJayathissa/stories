import Stcards from "./stcards";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageFooter from "./PageFooter";
import NavBar from "./NavBar";

export default function Types() {
  const navigate = useNavigate();

  // Define the tiles array
  const tiles = [
    {
      id: 1,
      title: "A Journey Throus",
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
      id: 12,
      title: "The Desert Mirage",
      description: "A journey through the scorching sands.",
      image: "https://picsum.photos/id/1104/400/200",
    },
  ];

  const handleClick = () => {
    navigate("/storypage");
  };

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
    >
      <NavBar />
      <Box
        className="container"
        sx={{
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
        <h1
          style={{
            alignSelf: "flex-start",
            marginLeft: "15px",
            color: "#000000",
            fontSize: "45px",
            fontFamily: " times-bold-italic",
            fontStyle: "italic",
          }}
        >
          read Stories And feel the vibe...
        </h1>
        <h3>Newly Added</h3>

        {/* Background Image (Apply if needed)
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/back.jpg')", // Corrected background image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)", // Apply blur effect
            zIndex: -1, // Place it behind the content
            pointerEvents: "none", // Ensure it doesn't interfere with interactions
          }}
        /> */}
        {/* Pass the tiles array as a prop to Stcards */}

        <Stcards tiles={tiles} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{
            marginTop: 2, // Add some spacing above the button
            alignSelf: "auto", // Center the button horizontally
            padding: "16px 32px", // Increase padding for a larger button
            fontSize: "1.00rem", // Increase font size
            width: "200px", // Optional: Set a fixed width
            height: "60px", // Optional: Set a fixed height
          }}
        >
          Read More..
        </Button>
        <PageFooter />
      </Box>
      
    </motion.div>
  );
}
