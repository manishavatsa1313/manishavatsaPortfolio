import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const createDesign = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
    ? {
        // palette values for light mode
        primary: {
          main: '#eee7e1', // Specify the main color for the primary palette
        },
        secondary: {
          main: '#000'
        },
        text: {
          primary: '#000',
          secondary: '#eee7e1',
        },
        background: {
          default: '#eee7e1',
          paper: '#eee7e1',
        }
      }
    : {
        // palette values for dark mode
        primary: {
          main: '#0d0d0d', // Specify the main color for the primary palette
        },
        secondary: {
          main: '#eee7e1'
        },
        background: {
          default: '#0c0c0c',
          paper: '#eee7e1',
        },
        text: {
          primary: '#eee7e1',
          secondary: '#000',
        }
      }),
  },
});

export const StyledTypography = styled(Typography)({
  fontFamily: 'Libre Bodoni, serif',
})

export const StyledButton = styled(Button)(({theme}) => ({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '15px 40px',
  border: '1px solid',
  borderRadius: '50px',
  lineHeight: 1.5,
  backgroundColor: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
  fontFamily: 'Libre Bodoni, serif',
  fontSize: '18px',
  fontWeight: '400',
  color: theme.palette.text.secondary,
  letterSpacing: '1px',
  transition: 'padding .25s ease-in-out',
  marginBottom: '20px',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    padding: '7.5px 40px',
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    boxShadow: 'none',
    padding: '15px 60px',
    transition: 'padding 0.25 ease-out',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#1a1818',
    borderColor: '#1a1818',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));

export const StyledTextField = styled(TextField)(({theme}) => ({
  '& label': {
    color: theme.palette.text.primary,
  },
  '& label.Mui-focused': {
    color: theme.palette.text.primary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.text.primary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.text.primary,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.text.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
}));

