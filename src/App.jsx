import Stcards from "./stcards";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import axios from "axios";
import AddStoryDialog from "./Dialog.jsx";
import { API_BASE_URL } from "./BackendUrl"; // Adjust the import path as necessary

export default function App() {
  const navigate = useNavigate();
  const channel = new BroadcastChannel("story-updates");

  // Define the tiles array
  const [tiles, setTiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Generate a random background image
  const getRandomBackgroundImage = () => {
    const randomNumber = Math.floor(Math.random() * 8) + 1; // Random number between 1 and 10
    return `/screen${randomNumber}.png`; // Path to the random background image
  };

  const [backgroundImage, setBackgroundImage] = useState(
    getRandomBackgroundImage()
  );

  let content;
  if (loading) {
    content = <p>Loading</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (tiles.length === 0) {
    content = <p>No available stories. Add new stories to read.</p>;
  } else {
    content = <Stcards tiles={tiles} />;
  }

  // Fetch stories from the backend
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/stories`);
        setTiles(res.data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
        setError(
          "The backend is currently offline! Please contact the relevant personnel."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStories();

    // Listen for messages from the BroadcastChannel (IE. other tabs)
    channel.onmessage = (event) => {
      if (event.data.type === "NEW_STORY_ADDED") {
        fetchStories(); // Refresh stories when a new story is added
      }
    };
  }, []);

  const handleAddStory = async (newStory) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/stories`,
        newStory
      );
      setTiles((prevTiles) => [response.data, ...prevTiles]); // Use response from backend
      channel.postMessage({ type: "NEW_STORY_ADDED" });
    } catch (error) {
      console.error("Failed to add story:", error);
    }
  };

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
      <Button
        variant=""
        color="primary"
        onClick={handleClick}
        sx={{
          position: "absolute", // Position the button absolutely
          top: 16, // Distance from the top of the screen
          right: 16, // Distance from the right of the screen
          padding: "16px 32px", // Increase padding for a larger button
          fontSize: "1.00rem", // Increase font size
          width: "auto", // Adjust width automatically
          height: "auto", // Adjust height automatically
        }}
      >
      >  {/* > this not error    */}
      </Button>
      <Box>
        <AddStoryDialog onAddStory={handleAddStory} />
      </Box>
    </motion.div>
  );
}
