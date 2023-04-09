import { styled } from '@mui/material';

const DimmedBackGround = styled('div')({
  backgroundColor: 'rgba(14, 13, 13, 0.96)',
  pointerEvents: `all`,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  minHeight: '100%',
  minWidth: '100%',
});

const DimmedScreen = () => {
  return <DimmedBackGround />;
};

export default DimmedScreen;
