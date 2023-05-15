import { TextField, styled } from '@mui/material';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import StyledButtonVariation from './StyledButtonVariation';
import { closeDialog, openDialog } from '../store/modalSlice';
import PopUpGradient from './PopUpGradient';
import ValidationNamePhone from './ValidationNamePhone';

const InputField = styled(TextField)({
  background: '#232020',
  width: '330px',
  height: '55px',
  boxSizing: 'border-box',
  label: {
    fontFamily: '"Raleway"',
    color: '#676464',
  },
  '& .MuiInputBase-root': {
    color: 'white',
    borderRadius: '0',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E2702F',
      color: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#dc5b13',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF5B00',
    },
  },
});

const ApplicationForm = ({ buttonLabel, callback }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onSubmit = () => {
    const _errors = ValidationNamePhone({ name, phoneNumber });

    if (isEmpty(_errors) === false) {
      setErrors(_errors);
      console.log('errors', _errors);
      return;
    }

    dispatch(closeDialog());
    dispatch(openDialog(<PopUpGradient test="Спасибо, мы свяжемся с Вами в ближайшее время" />));

    callback();
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const handleNameKeyPress = (event) => {
    const { charCode } = event;
    if (/\d/.test(String.fromCharCode(charCode))) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div>
        <InputField
          onKeyPress={handleNameKeyPress}
          label="Введите ваше имя"
          onChange={handleInputName}
        />
        {errors.name && (
          <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.name}</div>
        )}
      </div>

      <div>
        <InputMask mask="+38(099) 999-99-99" required onChange={handleInputPhoneNumber}>
          {() => <InputField label="Введите ваш телефон" />}
        </InputMask>
        {errors.phone && (
          <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.phone}</div>
        )}
      </div>

      <StyledButtonVariation onClick={onSubmit} variant="contained">
        {buttonLabel}
      </StyledButtonVariation>
    </>
  );
};

export default ApplicationForm;
