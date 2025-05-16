import { Box } from "@mui/material";

function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", // Added to vertically align content
        padding: 2,
        color: "#ffffff", // Changed to white for better contrast
        background: "#000000", // Gradient background
        height: "1vh", // Changed from "100vh" to "10vh" for a typical navbar height
        textAlign: "center", // Fixed capitalization of "Center"
        width: "100%",
        position: "auto", // Changed to "auto" for a typical navbar position
        top: 0, // Ensures the navbar stays at the top
        zIndex: 1000, // Added to ensure the navbar stays above other elements
      }}
    >
      This is the NavBar
    </Box>
  );
}

export default NavBar;
