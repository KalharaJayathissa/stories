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
        bottom: 5,
        right: 5,
        zIndex: 1000,
      }}
    >
      {/* Floating Action Button */}
      <Fab color="primary" onClick={handleOpen} aria-label="add story">
        <AddIcon />
      </Fab>

      {/* Dialog Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: "transparent" }, // Prevent background dimming
        }}
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute", // Position the dialog absolutely
            bottom: 16, // Distance from the bottom of the screen
            right: 16, // Distance from the right of the screen
            width: "250px", // Set the width of the dialog
            height: "210px", // Allow height to adjust based on content
            maxWidth: "90%", // Ensure it doesn't exceed the viewport width
            padding: 2, // Optional: Add padding inside the dialog
            boxShadow: "none", // Remove the shadow
          },
        }}
      >
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
          <Button onClick={handleAdd}>Add Story</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
