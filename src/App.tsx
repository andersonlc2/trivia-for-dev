import React from 'react';
import Route from './routes';
import {theme} from './theme';
import {ThemeProvider} from 'styled-components/native';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Route />
        </ThemeProvider>
    );
}
