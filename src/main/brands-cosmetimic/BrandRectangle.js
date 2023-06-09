import { styled } from '@mui/material';
import PropTypes from 'prop-types';

const variants = {
  circle: '50%',
  rightUp: '0 50% 0 0',
  leftUp: '50% 0 0 0',
  leftDown: '0 0 0 50%',
  rightDown: '0 0 50% 0',
};

const Rectangle = styled('div')(({ radius }) => ({
  borderRadius: radius,
  height: '238px',
  width: '238px',
  border: '1px solid #E2702F',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  '@media (min-width: 1920px)': {
    width: '364px',
    height: '364px',
  },
}));

const BrandRectangle = ({ image, variant }) => {
  const imageName = image;
  const radius = variants[variant ?? 'circle'];

  return (
    <Rectangle radius={radius}>
      <img src={`img/brands/${imageName}.png`} alt="logo" />
    </Rectangle>
  );
};

BrandRectangle.propTypes = {
  image: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default BrandRectangle;
