import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";





export default function AddStoryDialog({ onAddStory }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [storyLink, setStoryLink] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAdd = () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    onAddStory({ title, thumbnailUrl, storyLink });
    setTitle("");
    setThumbnailUrl("");
    setStoryLink("");
    setOpen(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 90, sm: 24, md: 80 },
        right: { xs: 80, sm: 24, md: 80 },
        zIndex: 1000,
      }}
    >
      {/* Floating Action Button */}
      <Fab color="primary" onClick={handleOpen} aria-label="add story">
        <AddIcon />
      </Fab>

      {/* Dialog Popup */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Story</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {/* <TextField
            margin="dense"
            label="Thumbnail URL"
            type="url"
            fullWidth
            variant="standard"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
          /> */}
          <TextField
            margin="dense"
            label="Story Link"
            type="url"
            fullWidth
            variant="standard"
            value={storyLink}
            onChange={(e) => setStoryLink(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained">
            Add Story
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
