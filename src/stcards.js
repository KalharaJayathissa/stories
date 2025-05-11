import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const tiles = [
    {
        title: "A Journey Through the Mountains",
        description: "A short story about discovery and survival.",
        image: "https://picsum.photos/id/1018/400/200",
      },
      {
        title: "The Silent City",
        description: "Mystery unfolds in a city where time stands still.",
        image: "https://picsum.photos/id/1025/400/200",
      },
      {
        title: "Tales of the Ocean",
        description: "Stories from sailors lost and found.",
        image: "https://picsum.photos/id/1011/400/200",
      },
      {
        title: "The Last Sunset",
        description: "A love story set in a dystopian world.",
        image: "https://picsum.photos/id/1020/400/200",
      },
      {
        title: "Whispers in the Forest",
        description: "A horror tale deep in the woods.",
        image: "https://picsum.photos/id/1032/400/200",
      },
      {
        title: "Spacewalk",
        description: "Exploring the unknown aboard a forgotten spacecraft.",
        image: "https://picsum.photos/id/1041/400/200",
      },
    ];

  export default function Stcards() {
    const  handleClick = (id) => {
        //update this click function later.
        console.log("Tile Clicked: ", id);
    }
    return (
        <Grid container spacing={2}>
            {tiles.map((tile, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                        onClick={() => handleClick(tile.id)}
                        sx={{
                            cursor: "pointer",
                            transition: "transform 0.2s, box-shadow 0.2s",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                            },
                        }}

                    >    
                        <CardMedia
                            component="img"
                            alt={tile.title}
                            height="140"
                            image={tile.image}
                        />
                        <CardContent>
                            <Typography varient="h6" component="div">
                                {tile.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
  }