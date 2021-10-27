import {createTheme} from '@mui/material';

const theme = createTheme({
    typography: {
        h5: {
            color: "#42a5f5",
            marginBottom: 7
        },
        button: {
            textTransform: 'none',
            marginBottom: 10
        }
    }
});

export default theme;