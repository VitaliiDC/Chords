import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

import {LOGO} from '../../configs';

const AppHeader = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {LOGO}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader;