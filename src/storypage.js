import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Storypage() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "left", marginTop: "20px" , marginLeft: "20px"}}>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                &lt; Home
            </Button>
            <h1>Story Page</h1>
            <p>This is the story page.</p>
        </div>
    );
}

export default Storypage;