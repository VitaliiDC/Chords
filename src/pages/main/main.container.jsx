import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Main from './main';
import {toggleNoteButton, setTonalitiesToView} from '../../redux/main/main.actions';

const MainContainer = props => {
    useEffect(() => {
        props.setTonalitiesToView();
    }, [props.notesButtons])

    return <Main {...props} />
}

const propsToState = state => ({
    notesButtons: state.Main.notesButtons,
    tonalitiesToView: state.Main.tonalitiesToView
});

const propsToDispatch = {toggleNoteButton, setTonalitiesToView};

export default connect(propsToState, propsToDispatch)(MainContainer);

