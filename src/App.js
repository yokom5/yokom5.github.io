import React from 'react';
import './App.css';
import Profile from "./Profile";
import {Box, Grid} from "@material-ui/core";
import Menu from "./Menu";

function App() {
    return (
        <Box>
            <Grid container spacing={3} alignItems={"center"} justify={"center"}>
                <Grid item xs={12} justify={"center"}>
                    <Menu/>
                </Grid>
                <Grid item xs={12} justify={"center"}>
                    <Profile/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
