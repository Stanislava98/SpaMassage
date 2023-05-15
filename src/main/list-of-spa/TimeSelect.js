import { useState } from 'react';
import { styled } from '@mui/material';
import TimeOptionButton from './TimeOptionButton';

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '14px',
  marginTop: '14px',
  '.active': {
    backgroundColor: '#E2702F',
  },
  '.non-active': {
    border: '1px solid #787171',
    color: '#787171',
  },
});

const TimeSelect = ({ details }) => {
  const [value, setValue] = useState('');

  const handleClick = (time) => {
    details.selectedMassageTime = time;
    setValue(time);
  };

  return (
    <Root>
      <TimeOptionButton
        className={value === '60 мин' ? 'active' : 'non-active'}
        onClick={() => handleClick('60 мин')}
      >
        60 мин
      </TimeOptionButton>
      <TimeOptionButton
        className={value === '90 мин' ? 'active' : 'non-active'}
        onClick={() => handleClick('90 мин')}
      >
        90 мин
      </TimeOptionButton>
      <TimeOptionButton
        className={value === '120 мин' ? 'active' : 'non-active'}
        onClick={() => handleClick('120 мин')}
      >
        120 мин
      </TimeOptionButton>
    </Root>
  );
};

export default TimeSelect;
