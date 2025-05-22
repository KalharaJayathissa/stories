//this component is yet to be built

export default function DialogPopup({}) {
  return (
    <div>
      {/* Dialog Popup */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New/Update Story</DialogTitle>
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
            label="Thumbnail URL"
            type="url"
            fullWidth
            variant="standard"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
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
          <Button onClick={handleAdd} variant="contained">
            Add Story
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
