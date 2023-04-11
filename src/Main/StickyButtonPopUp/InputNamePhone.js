import { TextField, styled } from '@mui/material';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
import Validation from './Validation';
import {openDialog} from "../../store/modalSlice";

const InputField = styled(TextField)({
  background: '#232020',
  width: '330px',
  label: {
    fontFamily: '"Raleway"',
    color: '#676464',
  },
  '& .MuiInputBase-root': {
    color: 'white',
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

const InputNamePhone = ({ callback }) => {
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
    const _errors = Validation({ name, phoneNumber });
    if (isEmpty(_errors) === false) {
      console.log(_errors);
      setErrors(_errors);
    } else {
      callback();
    }
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '24px',
        gap: '16px',
      }}
    >
      <div>
        <InputField label="Введите ваше имя" onChange={handleInputName} />
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

      <div style={{ marginTop: '8px' }}>
        <ContainedAndOutlinedButton onClick={onSubmit} variant="contained">
          жду звонка
        </ContainedAndOutlinedButton>
      </div>
    </form>
  );
};

export default InputNamePhone;
