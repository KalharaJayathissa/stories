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
import { useState } from "react";

export default function Stcards({ tiles }) {
  const [loadedImages, setLoadedImages] = useState({});

  const handleClick = (id) => {
    console.log("Tile Clicked: ", id);
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <Box
      sx={{
        height: "500px",
        overflowY: "auto",
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
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
            >
              <Card
                onClick={() => isLoaded && handleClick(tile.id)}
                sx={{
                  cursor: isLoaded ? "pointer" : "default",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  width: "300px",
                  height: "200px",
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
                  {isLoaded ? (
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
