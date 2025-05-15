import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Skeleton,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Stcards({ tiles }) {
  const [loadedImages, setLoadedImages] = useState({});
  const [showTitles, setShowTitles] = useState(false); //for the name skelton

  const handleClick = (id) => {
    console.log("Tile Clicked: ", id);
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  //timer to show story name skelton for 1 second (as avission illusion instead of
  // waiting untillloading image)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitles(true);
    }, 300); //time takes to show name after the skeleton

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      flexDirection={"column"}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 3,
        padding: 2,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "flex-start",
        }}
      >
        {tiles.map((tile) => {
          const isLoaded = loadedImages[tile.id];

          return (
            <Grid
              item
              xs={12}
              sx={{ px: 5, py: 2 }}
              sm={6}
              md={4}
              key={tile.id}
              dx={{ px: 1, py: 2 }}
            >
              <Card
                onClick={() => isLoaded && handleClick(tile.id)}
                sx={{
                  cursor: isLoaded ? "pointer" : "default",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  width: "350px",
                  height: "87%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": isLoaded && {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {!isLoaded && (
                  <Skeleton variant="rectangular" height={200} width="100%" />
                )}
                <CardMedia
                  component="img"
                  alt={tile.title}
                  height="200"
                  image={tile.image}
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
