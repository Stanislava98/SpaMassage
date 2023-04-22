import {useState} from 'react';
import {styled} from '@mui/material';
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
    color: '#787171'
  },
});

const ChooseTime = () => {
  const [value, setValue] = useState(60);

  const handleClick = (time) => {
    setValue(time);
  };

  return (
    <Root>
      <RectangleCheck
        className={value === 60 ? 'active' : 'non-active'}
        onClick={() => handleClick(60)}
      >
        60 мин
      </RectangleCheck>
      <RectangleCheck
        className={value === 90 ? 'active' : 'non-active'}
        onClick={() => handleClick(90)}
      >
        90 мин
      </RectangleCheck>
      <RectangleCheck
        className={value === 120 ? 'active' : 'non-active'}
        onClick={() => handleClick(120)}
      >
        120 мин
      </RectangleCheck>
    </Root>
  );
};

export default ChooseTime;
