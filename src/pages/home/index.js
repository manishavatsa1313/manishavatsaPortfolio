import React from 'react';
import Grid from '@mui/material/Grid';
import Typewriter from 'typewriter-effect';
import { introdata } from '../../content_option';
import image from './media/manisha-main.jpg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { StyledButton, StyledTypography } from '../../app/theme';
import { Grow } from '@mui/material';

import './style.scss';

const styles = {
  image: {
    transition: 'transform 0.2s ease-in-out',
    "&:hover": {
      transform: 'scale(1.5)',
    },
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Optionally set a fixed height for the grid items
  },
};

export const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const margin = isMobile ? '20px' : '50px';

  return (
    <div className="home">
      <Grid container spacing={2}>
        {/* On small screens (xs), stack the items on top of each other */}
        <Grid item xs={12} sm={6} style={styles.gridItem}>
          <div style={{ margin: margin }}>
            <StyledTypography variant="h2"> {introdata.title}</StyledTypography>
            <Typewriter
              className="Typewriter"
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
                <Grid item md={12} lg={6}>
                  <Link to="/projects" className="text_2">
                    <StyledButton onClick={() => {}}>Projects</StyledButton>
                  </Link>
                </Grid>
                <Grid item md={12} lg={6}>
                  <Link to="/contact">
                    <StyledButton onClick={() => {}}>Contact Me</StyledButton>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} style={styles.gridItem}>
          <Grow in={true} timeout={300}>
            <img src={image} alt="ProfilePicture" className={styles.image} style={{ width: '90%', height: 'auto' }} />
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};
