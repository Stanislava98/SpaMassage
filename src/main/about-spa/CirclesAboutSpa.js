import { styled } from '@mui/material';

const Circle = styled('div')({
  '@media (min-width: 1920px)': {
    width: '397px',
    height: '397px',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  width: '274px',
  height: '274px',
  border: '1px solid white',
  boxSizing: 'border-box',
  '& .CircleWithIcon': {
    '@media (min-width: 1920px)': {
      fontSize: '18px',
      width: '200px'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    width: '150px',
    fontWeight: 'bold',
    gap: '12px',
    lineHeight: '140%',
  },
});

const CirclesAboutSpa = ({ text, icon, margin = 0 }) => {
  return (
    <div style={{ marginLeft: `-${margin}px` }}>
      <Circle>
        <div className="CircleWithIcon">
          {icon}
          <div>{text}</div>
        </div>
      </Circle>
    </div>
  );
};

export default CirclesAboutSpa;
