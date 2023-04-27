import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material';
import { useState } from 'react';

const StyledFormControl = styled(FormControl)({
  '.MuiFormGroup-root': {
    marginTop: '14px',
  },

  '.MuiRadio-root.Mui-checked + .MuiFormControlLabel-label': {
    color: '#dc5b13',
  },

  '.MuiFormLabel-root.Mui-focused': {
    color: 'white',
  },
  '.MuiFormLabel-root': {
    color: 'white',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  },
  span: {
    fontFamily: 'Raleway',
    '&.MuiFormControlLabel-label': {
      color: 'white',
      '&.MuiFormControlLabel-checked': {
        color: 'red',
      },
    },
    '&.MuiButtonBase-root.Mui-checked': {
      color: '#FF5B00',
      zIndex: 100000,
    },
    '&.MuiButtonBase-root': {
      color: 'white',
    },
  },
});

const RadioButtonCheckTime = () => {
  const [time, setTime] = useState('');

  const handleClick = (event) => {
    console.log('event =>', event.target.value);
    setTime(event.target.value);
  };

  return (
    <>
      <StyledFormControl>
        <FormLabel id="demo-radio-buttons-group-label">Выберите удобное время для Вас</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            control={
              <Radio
                checked={time === '11:00 - 12:00'}
                value="11:00 - 12:00"
                onClick={handleClick}
              />
            }
            label="11:00 - 12:00"
          />
          <FormControlLabel
            control={
              <Radio
                checked={time === '13:00 - 14:00'}
                onClick={handleClick}
                value="13:00 - 14:00"
              />
            }
            label="13:00 - 14:00"
          />
          <FormControlLabel
            control={
              <Radio
                checked={time === '15:00 - 16:00'}
                value="15:00 - 16:00"
                onClick={handleClick}
              />
            }
            label="15:00 - 16:00"
          />
          <FormControlLabel
            control={
              <Radio
                checked={time === '17:00 - 18:00'}
                onClick={handleClick}
                value="17:00 - 18:00"
              />
            }
            label="17:00 - 18:00"
          />
          <FormControlLabel
            control={
              <Radio
                checked={time === '19:00 - 20:00'}
                onClick={handleClick}
                value="19:00 - 20:00"
              />
            }
            label="19:00 - 20:00"
          />
          <FormControlLabel
            control={
              <Radio
                checked={time === '20:00 - 21:00'}
                onClick={handleClick}
                value="20:00 - 21:00"
              />
            }
            label="20:00 - 21:00"
          />
        </RadioGroup>
      </StyledFormControl>
    </>
  );
};

export default RadioButtonCheckTime;
