import React, { useEffect, useState } from 'react';
import './style.scss';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import { ColorModeContext } from '../../app/App';

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem('theme'));
  const themetoggle = () => {
    settheme(theme === 'dark' ? 'light' : 'dark');
    colorMode.toggleColorMode();
  };
  const colorMode = React.useContext(ColorModeContext);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
