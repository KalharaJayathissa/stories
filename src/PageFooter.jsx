import { Box, Typography } from "@mui/material";

function PageFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 2,
        px: 4,
        background:
          "linear-gradient(to bottom, rgb(90, 139, 211), rgb(98, 100, 207))", // Gradient background
        textAlign: "center", // Fixed capitalization of "Center"
        width: "100%",
      }}
    >
      <Typography variant="body2" color="#ffffff">
        {" "}
        {/* Fixed typo in "variant" */}© 2025 Kalhara Jayathissa |
        kalharaj.23@cse.mrt.ac.lk
      </Typography>
    </Box>
  );
}

export default PageFooter;
