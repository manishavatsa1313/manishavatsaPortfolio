import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';
import { StyledTypography } from '../../app/theme';

import './style.scss';

const ProjectItem = ({ subtitle, company, companyLink, details }) => (
  <Grid item xs={12}>
    <StyledTypography variant="h3">{subtitle}</StyledTypography>
    <StyledTypography variant="h5" sx={{ margin: { s: '5px', md: '5px' } }}>
      <a href={companyLink} target="_blank" rel="noopener noreferrer">
        {company}
      </a>
    </StyledTypography>
    <ul>
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </Grid>
);

export const Projects = () => {
  return (
    <Grid container spacing={3} sx={{ padding: { s: '5px', md: '90px' } }}>
      {/* Title Grid */}
      <Grid item s={12} md={8} style={{ margin: { s: 'none', md: '50px' } }}>
        <StyledTypography variant="h1" gutterBottom style={{ margin: '30px' }}>
          Work
        </StyledTypography>
        <Stack spacing={2}>
          <ProjectItem
            subtitle="Surefront Syndication System"
            company="Surefront"
            companyLink="https://www.surefront.com/"
            details={[
              'Designed and developed a Syndication service, eliminating the manual product publication to e-commerce platforms and expediting the time to market by 75%',
              'Ideated the concept, gathered requirements, architected and developed an MVP by playing the roles of a Team lead, Software architect, Scrum master, and developer',
            ]}
          />

          <ProjectItem
            subtitle="Online Course Development"
            company="TEEL Lab, CMU"
            companyLink="http://teel.cs.cmu.edu/"
            details={[
              'Construction and development of online courses for the Database system and Cloud backup and disaster recovery using automated submitter and graders enabling automatic assessment and evaluation',
            ]}
          />
        </Stack>
      </Grid>

      {/* Other sections (Education, Skills, Projects & Certifications) can be added similarly */}
    </Grid>
  );
};
