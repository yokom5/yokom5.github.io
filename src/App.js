import React from 'react';
import './App.css';
import Profile from "./Profile";
import { Box } from "@material-ui/core";
import Menu from "./Menu";

function App() {
    return (
        <Box className="App">
            <Menu/>
            <Profile/>
        </Box>
    );
}

export default App;
