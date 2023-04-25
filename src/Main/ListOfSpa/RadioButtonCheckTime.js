import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material';

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
    },
    '&.MuiButtonBase-root': {
      color: 'white',
    },
  },
});

const RadioButtonCheckTime = () => {
  return (
    <>
      <StyledFormControl>
        <FormLabel id="demo-radio-buttons-group-label">Выберите удобное время для Вас</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="11:00 - 12:00" control={<Radio />} label="11:00 - 12:00" />
          <FormControlLabel value="13:00 - 14:00" control={<Radio />} label="13:00 - 14:00" />
          <FormControlLabel value="15:00 - 16:00" control={<Radio />} label="15:00 - 16:00" />
          <FormControlLabel value="17:00 - 18:00" control={<Radio />} label="17:00 - 18:00" />
          <FormControlLabel value="19:00 - 20:00" control={<Radio />} label="19:00 - 20:00" />
          <FormControlLabel value="20:00 - 21:00" control={<Radio />} label="20:00 - 21:00" />
        </RadioGroup>
      </StyledFormControl>
    </>
  );
};

export default RadioButtonCheckTime;
