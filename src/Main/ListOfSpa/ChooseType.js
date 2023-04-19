import { useState } from 'react';
import { styled } from '@mui/material';
import RectangleCheck from './RectangleCheck';

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

const ChooseType = () => {
  const [value, setValue] = useState('');

  const handleClick = (number) => {
    setValue(number);
  };

  return (
    <Root>
      <RectangleCheck
        className={value === 1 ? 'active' : 'non-active'}
        onClick={() => handleClick(1)}
      >
        2 руки
      </RectangleCheck>
      <RectangleCheck
        className={value === 2 ? 'active' : 'non-active'}
        onClick={() => handleClick(2)}
      >
        4 руки
      </RectangleCheck>
    </Root>
  );
};

export default ChooseType;
