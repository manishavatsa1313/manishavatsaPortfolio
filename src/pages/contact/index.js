import React from 'react';
import Grid from '@mui/material/Grid';
import { StyledTypography } from '../../app/theme';
import { contactConfig } from '../../content_option';
import { useMediaQuery } from '@mui/material';

import './style.scss';

const styles = {
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    height: '100%',
  },
};

export const ContactMe = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const margin = isMobile ? '20px' : '50px';

  return (
    <div className="contact-me">
      <Grid container spacing={2} style={styles.gridContainer}>
        {/* On small screens (xs), stack the items on top of each other */}
        <Grid item xs={12} sm={6} style={styles.gridItem}>
          <div style={{ margin: margin }}>
            <StyledTypography variant="h1" gutterBottom>
              Hello.
            </StyledTypography>
            <StyledTypography variant="h4" gutterBottom>
              {contactConfig.TITLE}
            </StyledTypography>
            <p>
              {' '}
              Email: <span style={{ textDecoration: 'underline' }}>{contactConfig.YOUR_EMAIL}</span>
            </p>
            <p> {contactConfig.description}</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} style={styles.gridItem}>
          {/* <StyledTypography variant="h4" gutterBottom>
            Leave a Message
          </StyledTypography>
          <ContactForm /> */}
        </Grid>
      </Grid>
    </div>
  );
};

// const ContactForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <StyledTextField fullWidth required id="fullName" label="Full Name" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <StyledTextField fullWidth required id="email" label="Email" type="email" />
//         </Grid>
//         <Grid item xs={12}>
//           <StyledTextField fullWidth required id="message" label="Message" multiline rows={8} />
//         </Grid>
//         <Grid item xs={12}>
//           <StyledButton type="submit">Submit</StyledButton>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };
