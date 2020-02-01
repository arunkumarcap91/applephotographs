import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './config';
import App from "./App";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import WebFont from 'webfontloader';

const store = configureStore();
WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#232F3E',
            light: '#232F3E40',
            dark: '#232F3E',
        },
        secondary: {
            main: '#232F3E'
        },
        info: {
            main: '#9c27b0',
            light: '#f5e9f7'
        },
        success: {
            main: '#7db343',
            light: '#7db34340',
        },
        error: {
            main: '#ef3c42',
            light: '#fde7e8'
        },
        warning: {
            main: '#f9a825',
            light: '#f9a82540',
        },
        white: {
            main: "#FFFFFF"
        },
        footer: {
            main: "#ffffff"
        }
    },
    typography: {
        "fontFamily": "\"Titillium Web\", sans-serif",
        "fontSize": 14,
        "fontWeightRegular": 400,
        "fontWeightBold": 700,
        "fontWeightBlack": 900,
        "textSecondary": "#222831",
        useNextVariants: true,
    },
    overrides: {
        MuiListItem: {
            root: {
                "&$selected": {
                    backgroundColor: '#00adb5',
                    "&:hover": { backgroundColor: '#00adb5' },
                },
            },
        },
        MuiInput: {
            underline: {
                "&:after": {
                    display: 'none'
                },
                "&:before": {
                    display: 'none'
                }
            }
        }
    },
});
ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));