import { styled } from '@mui/material';
import BrandRectangle from './BrandRectangle';

const TransparentRectangle = styled('div')({
  height: '238px',
  width: '238px',
  '@media (min-width: 1920px)': {
    width: '364px',
    height: '364px',
  },
});

const BrandGrid = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '34px' }}>
        <BrandRectangle image="brand1" variant="rightUp" />
        <BrandRectangle image="brand2" variant="rightDown" />
        <BrandRectangle image="brand3" variant="leftUp" />
        <BrandRectangle image="brand4" variant="circle" />
        <TransparentRectangle />
        <BrandRectangle image="brand5" variant="rightUp" />
        <BrandRectangle image="brand6" variant="rightDown" />
        <BrandRectangle image="brand7" variant="circle" />
        <BrandRectangle image="brand8" variant="rightDown" />
        <BrandRectangle image="brand9" variant="circle" />
        <TransparentRectangle />
        <TransparentRectangle />
        <TransparentRectangle />
        <BrandRectangle image="brand10" variant="rightUp" />
        <BrandRectangle image="brand11" variant="rightDown" />
        <BrandRectangle image="brand12" variant="circle" />
      </div>
    </div>
  );
};

export default BrandGrid;
