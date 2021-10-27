import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppFooter = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="subtitle2">
                    Made by Vitalii's Inc. Corporation®
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppFooter;