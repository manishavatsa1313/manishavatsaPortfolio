import React, { useEffect, createContext, useState, useMemo } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import withRouter from '../hooks/withRouter';
import AppRoutes from './routes';
import Headermain from '../header';
import AnimatedCursor from '../hooks/AnimatedCursor';
import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { createDesign } from './theme';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: '' });

export function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme')?? 'dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(() => createTheme(createDesign(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function Main() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain className="header" />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
