import Stcards from "./stcards";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <div>
    <Box
      className="container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
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
      />
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
    </Box>
    </div>
  );
}
