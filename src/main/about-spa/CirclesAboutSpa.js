import { styled } from '@mui/material';

const Circle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  width: '274px',
  height: '274px',
  border: '1px solid white',
  boxSizing: 'border-box',
  '& .CircleWithIcon': {
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
        <div className='CircleWithIcon'>
          {icon}
          <div>{text}</div>
        </div>
      </Circle>
    </div>
  );
};

export default CirclesAboutSpa;
