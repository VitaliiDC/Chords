import React from 'react';
import {Box, Typography, ButtonGroup, Button} from '@mui/material';

const Tonalities = props => props.tonalitiesToView.map((e, i) => {
    return (
        <Box key={i} mb={1} sx={{width: "100%"}}>
            <Typography variant="h5">
                {e[0]}
            </Typography>
            <ButtonGroup variant="text" fullWidth>
                {e.map((a, j) => {
                    return (
                        <Button key={j}>
                            {a}
                        </Button>
                    )
                })}
            </ButtonGroup>
        </Box>
    )
});

export default Tonalities;