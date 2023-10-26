import React from 'react';
import Grid from '@mui/material/Grid';
import Typewriter from 'typewriter-effect';
import { introdata, meta } from '../../content_option';
import image from './media/manisha-main.jpg';
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';

import './style.scss';

const styles = {
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Optionally set a fixed height for the grid items
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain', // Resize the image to fit the box
  },
};

export const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const margin = isMobile ? '20px' : '50px';

  return (
      <Grid container spacing={2}>
        {/* On small screens (xs), stack the items on top of each other */}
        <Grid item xs={12} sm={6} style={styles.gridItem}>
        <div style={{ margin: margin }}>
            <p> {introdata.title}</p>
            <Typewriter style={styles.typewriter}
              options={{
                strings: [introdata.animated.first, introdata.animated.second, introdata.animated.third],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
            <p>{introdata.description}</p>
            <div className="intro_btn-action pb-5">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/projects" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} style={styles.gridItem}>
          <img src={image} alt="ProfilePicture" style={styles.image} />
        </Grid>
      </Grid>
  );
};
