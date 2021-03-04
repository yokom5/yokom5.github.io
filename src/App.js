import React from 'react';
import './App.css';
import Profile from "./Profile";
import {Box, Grid} from "@material-ui/core";
import Menu from "./Menu";

function App() {
    return (
        <Box className="App">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Menu/>
                </Grid>
                <Grid item xs={12}>
                    <Profile/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
