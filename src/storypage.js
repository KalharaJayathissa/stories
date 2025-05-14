import React from "react";
import { Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Stcards from "./stcards";


function Storypage() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "#d7e7e3", height: "100vh" }}>
        <Stack sx={{ backgroundColor: "#d7e7e3"}} spacing={2}>
            <div style={{ textAlign: "left", marginTop: "20px" , marginLeft: "20px"}}>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    &lt; Home
                </Button>
                <h1>Story Page</h1>
                <p>This is the story page.</p>
            </div>
            <Stcards />
        </Stack>
        </div>
    );
}

export default Storypage;