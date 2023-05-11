import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputFieldSelectDelivery from './InputFieldSelectDelivery';
import ValidationNamePhone from '../../components/ValidationNamePhone';
import { closeDialog, openDialog } from '../../store/modalSlice';
import PopUpGradient from '../../components/PopUpGradient';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';

const InputFieldNamePhone = ({ callback }) => {
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

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            marginTop: '24px',
            width: '100%',
          },
          '& .MuiInputLabel-root': {
            color: 'white',
            fontFamily: 'Raleway',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-root': {
            color: 'white',
            fontFamily: 'Raleway',

            '&::before': {
              borderBottom: '1px solid #E2702F',
              content: '""',
            },
            '&:hover:not(.Mui-disabled):not(.Mui-error)::before': {
              borderBottomColor: '#FF5B00',
            },
            '&::after': {
              borderBottom: '1px solid #FF5B00',
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Ваше имя"
            variant="standard"
            onChange={handleInputName}
          />
          {errors.name && (
            <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.name}</div>
          )}
        </div>

        <div>
          <InputMask mask="+38(099) 999-99-99" required onChange={handleInputPhoneNumber}>
            {() => (
              <TextField required label="Ваш телефон" id="standard-required" variant="standard" />
            )}
          </InputMask>
          {errors.phone && (
            <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.phone}</div>
          )}
        </div>

        <div>
          <TextField
            required
            id="standard-required"
            label="Имя получателя"
            onChange={handleInputName}
            variant="standard"
          />
          {errors.name && (
            <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.name}</div>
          )}
        </div>

        <div>
          <InputMask mask="+38(099) 999-99-99" required onChange={handleInputPhoneNumber}>
            {() => (
              <TextField
                required
                label="Телефон получателя"
                id="standard-required"
                variant="standard"
              />
            )}
          </InputMask>
          {errors.phone && (
            <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.phone}</div>
          )}
        </div>

        <InputFieldSelectDelivery />

        <div style={{ display: 'flex', marginTop: '34px', justifyContent: 'center' }}>
          <ContainedAndOutlinedButton onClick={onSubmit} variant="contained">
            отправить
          </ContainedAndOutlinedButton>
        </div>
      </Box>
    </>
  );
};

export default InputFieldNamePhone;
