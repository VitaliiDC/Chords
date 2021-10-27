import React from 'react';
import {ButtonGroup, Button, Box} from '@mui/material';

const Notes = props => props.modNotes.map((e, i) => {
    return (
        <Box key={i} mt={2} mb={2} sx={{display: "flex",justifyContent: "center", flexWrap: "wrap"}}>
            <ButtonGroup fullWidth size="large">
                {e.map((a, j) => {
                    return <Button 
                            variant={a.toggled ? "contained" : "outlined"} 
                            key={j}
                            onClick={() => props.toggleNoteButton(a.name)}
                            >{a.name}</Button>
                })}
            </ButtonGroup>
        </Box>
    );
});

export default Notes;