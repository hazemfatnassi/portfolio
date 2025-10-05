import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledChip = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: theme.palette.action.selected,
  color: theme.palette.text.primary,
  padding: '4px 12px',
  borderRadius: '16px',
  fontSize: '0.7rem',
  fontWeight: 500,
  height: '24px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Chip = ({ children, ...props }) => {
  return <StyledChip {...props}>{children}</StyledChip>;
};

export default Chip;
