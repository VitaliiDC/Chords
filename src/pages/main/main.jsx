import React from 'react';
import {Container} from '@mui/material';
import Tonalities from '../../components/main-items/main.tonalities';
import Notes from '../../components/main-items/main.notes';
import {useStyles} from './main.styles'; 

const Main = props => {

    const middleIndex = Math.ceil(props.notesButtons.length / 2);

    const firstHalfOfNotes = props.notesButtons.slice(0, middleIndex);
    const secondHalfOfNotes = props.notesButtons.slice(-middleIndex);

    const modNotes = [firstHalfOfNotes, secondHalfOfNotes];

    const styles = useStyles();

    return (
        <Container className={styles.root}>
            <Notes 
                modNotes={modNotes}
                toggleNoteButton={props.toggleNoteButton} />
            <Tonalities 
                tonalitiesToView={props.tonalitiesToView} />
        </Container>
    );
};

export default Main;