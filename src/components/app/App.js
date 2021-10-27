import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import Routes from '../../routes/routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './app-theme/app.theme';

import {setNotesButtons, setTonalities} from '../../redux/main/main.actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotesButtons());
    dispatch(setTonalities());
  }, [dispatch]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
