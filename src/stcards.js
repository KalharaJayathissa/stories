import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";

export default function Stcards({ tiles }) {
  // Accept tiles as a prop
  const handleClick = (id) => {
    console.log("Tile Clicked: ", id);
  };

  return (
    <Box
      sx={{
        height: "500px", // Set a fixed height for the scrollable container
        overflowY: "auto", // Enable vertical scrolling
        padding: 2, // Optional padding
        display: "flex", // Use flexbox for centering
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      <Grid
        container
        spacing={3} // Increased spacing between rows and columns
        sx={{
          justifyContent: "center", // Center the grid items horizontally
        }}
      >
        {tiles.map((tile, index) => (
          <Grid
            item
            xs={12}
            sx={{ px: 5, py: 2 }} // Added vertical padding (py) for more space between rows
            sm={6}
            md={4}
            key={index}
          >
            <Card
              onClick={() => handleClick(tile.id)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                width: "300px", // Set a fixed width
                height: "200px", // Set a fixed height
                display: "flex",
                flexDirection: "column", // Ensure content stacks vertically
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={tile.title}
                height="200" // Set a fixed height for the image
                image={tile.image}
                sx={{
                  objectFit: "cover", // Ensure the image covers the area
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1, // Ensures content fills the remaining space
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" component="div">
                  {tile.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
