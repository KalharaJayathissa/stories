import Stcards from "./stcards";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageFooter from "./PageFooter";
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

  let content;
  if (loading) {
    content = <p>Loading</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (tiles.length === 0) {
    content = <p>No availabel stories. Add new stories to read.</p>;
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
        setError("Backend is currently offline!");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();

    // Listen for messages from the BroadcastChannel( IE.other tabs)
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

        {content}

        <AddStoryDialog onAddStory={handleAddStory} />
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
