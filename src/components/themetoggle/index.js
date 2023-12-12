import React, { useEffect, useState } from 'react';
import './style.scss';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import { ColorModeContext } from '../../app/App';

const Themetoggle = () => {
  const colorMode = React.useContext(ColorModeContext);
  const [theme, settheme] = useState(colorMode.mode);
  const themetoggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    settheme(newTheme);
    colorMode.toggleColorMode(); 
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode.mode);
    localStorage.setItem('theme', colorMode.mode);
  }, [colorMode, theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
