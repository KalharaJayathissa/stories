import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Skeleton,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import axios from "axios";
import { API_BASE_URL } from "./BackendUrl"; // Adjust the import path as necessary

export default function Stcards({ tiles }) {
  const [loadedImages, setLoadedImages] = useState({});
  const [showTitles, setShowTitles] = useState(false); // for the name skeleton
  const [open, setOpen] = useState(false);
  const [storyTiles, setStoryTiles] = useState(tiles);

  const handleClick = (id) => {
    console.log("Tile Clicked: ", id);
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Sync prop changes to local state
  useEffect(() => {
    setStoryTiles(tiles);
  }, [tiles]);

  // Timer to show story name skeleton for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitles(true);
    }, 300); // Time takes to show name after the skeleton

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      flexDirection={"column"}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Dynamically adjust card size
        gap: 3,
        padding: 2,
        paddingLeft: { xs: 0, sm: 2 }, // Remove left padding for mobile screens
        justifyContent: { xs: "center", sm: "flex-start" }, // Center cards for mobile screens
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: { xs: "center", sm: "flex-start" }, // Center grid items for mobile screens
        }}
      >
        {storyTiles.map((tile) => {
          const isLoaded = loadedImages[tile.id];

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={tile.id}
              sx={{
                px: { sm: 1 }, // Adjust horizontal padding for small screens
                py: 2,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Card
                  onClick={() => isLoaded && handleClick(tile.id)}
                  sx={{
                    cursor: isLoaded ? "pointer" : "default",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    width: { xs: "300px", sm: "300px" }, // Smaller width for mobile screens
                    height: "200px", // Adjust height dynamically for mobile screens
                    display: "flex",
                    flexDirection: "column",
                    margin: { xs: "0 auto", sm: "0 auto" }, // Center cards horizontally on mobile screens
                    "&:hover": isLoaded && {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {!isLoaded && (
                    <Skeleton
                      variant="rectangular"
                      height={200}
                      width="100%"
                      sx={{ borderRadius: "4px" }} // Add rounded corners to the skeleton
                    />
                  )}
                  <CardMedia
                    component="img"
                    alt={tile.title}
                    height="150"
                    image={tile.thumbnailUrl}
                    onLoad={() => handleImageLoad(tile.id)}
                    sx={{
                      objectFit: "cover",
                      display: isLoaded ? "block" : "none",
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {showTitles ? (
                      <Typography variant="h6" component="div">
                        {tile.title}
                      </Typography>
                    ) : (
                      <Skeleton width="60%" />
                    )}
                  </CardContent>
                </Card>
                <SpeedDial
                  ariaLabel="Story Actions"
                  sx={{ position: "absolute", top: -28, right: 8 }}
                  icon={<SpeedDialIcon />}
                  direction="up"
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                >
                  <SpeedDialAction
                    icon={<EditIcon />}
                    slotProps={{
                      tooltip: { title: "Update" },
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      
                      console.log("Update story:", tile.id);
                    }}
                  />
                  <SpeedDialAction
                    icon={<DeleteIcon />}
                    slotProps={{
                      tooltip: { title: "Delete" },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Delete story:", tile.id);
                      setStoryTiles((prev) => prev.filter((t) => t.id !== tile.id)); // remove immediately
                      axios
                        .delete(`${API_BASE_URL}/api/stories/${tile.id}`)
                        .then((res) => {
                          console.log("Story deleted:", tile.id);
                          // Optionally, you can update the UI or state here
                        })
                        .catch((error) => {
                          console.error("Error deleting story:", error);
                        });
                    }}
                  />
                </SpeedDial>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

Stcards.propTypes = {
  tiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
