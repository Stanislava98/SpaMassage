import { Button, styled } from '@mui/material';
import PropTypes from 'prop-types';

const variants = {
  variant1: 'contained',
  variant2: 'outlined',
};

const StyledButton = styled(Button)(({ variant }) => ({
  backgroundColor: variant === 'contained' ? '#E2702F' : 'transparent',
  cursor: 'pointer',
  fontFamily: 'Raleway, serif',
  textTransform: 'uppercase',
  borderRadius: '0',
  width: '180px',
  height: '55px',
  fontWeight: 'bold',
  fontSize: '14px',
  boxShadow: 'none',
  ...(variant === 'contained' && {
    display: 'flex',
    justifyContent: 'center',
  }),
  ...(variant === 'outlined' && {
    border: '1px solid #E2702F',
    fontFeatureSettings: '"lnum"',
    color: '#E2702F',
  }),
  '&:hover': {
    backgroundColor: '#dc5b13',
    ...(variant === 'outlined' && {
      color: '#fff',
      border: '1px solid #dc5b13',
    }),
    ...(variant === 'contained' && {
      border: 'none',
    }),
  },
}));

const ContainedAndOutlinedButton = (props) => {
  const variation = variants[props.variant ?? 'contained'];
  return <StyledButton variation={variation} {...props} />;
};

ContainedAndOutlinedButton.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default ContainedAndOutlinedButton;
