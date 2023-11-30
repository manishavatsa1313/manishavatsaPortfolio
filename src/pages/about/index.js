import React from 'react';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import {StyledButton, StyledTypography} from '../../app/theme';

import './style.scss';

export const About = () => {
    return (
      <Grid container spacing={3} sx={{ padding: {s: '5px', md:'50px'} }}>
          {/* Title Grid */}
          <Grid item s={12} md={6} style={{margin: {s: 'none', md:'50px'}}}>
            <StyledTypography variant="h1" gutterBottom>
                About Me
            </StyledTypography>
            <StyledTypography variant="h2" gutterBottom>
                I am Manisha. A full stack software enginner with a passion for problem solving.
            </StyledTypography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum</p>
            <StyledTypography variant="h3" gutterBottom>
                EXPERIENCE
            </StyledTypography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum</p>
            <StyledTypography variant="h3" gutterBottom>
                SKILLS
            </StyledTypography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum</p>
            <StyledButton onClick={() => {}}>Resume</StyledButton>
            <StyledTypography variant="h3" gutterBottom>
                Education
            </StyledTypography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum</p>
            
          </Grid>
        </Grid>
      );
    };