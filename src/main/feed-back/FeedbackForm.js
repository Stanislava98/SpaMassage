import { TextField, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Validation from '../../components/Validation';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
import PopUpGradient from '../../components/PopUpGradient';
import { closeDialog, openDialog } from '../../store/modalSlice';

const InputField = styled(TextField)({
  background: '#232020',
  width: '260px',
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
    fontFamily: 'Raleway',
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

const FeedbackForm = ({ buttonLabel }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [validateEmail, setValidateEmail] = useState('');
  const [validateTitle, setValidateTitle] = useState('');
  const [validateDescription, setValidateDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputEmail = (event) => {
    setValidateEmail(event.target.value);
  };

  const handleInputTitle = (event) => {
    setValidateTitle(event.target.value);
  };

  const handleCheckDescription = (event) => {
    setValidateDescription(event.target.value);
  };

  const onSubmit = () => {
    const _errors = Validation({ name, validateEmail, validateTitle, validateDescription });
    if (isEmpty(_errors) === false) {
      setErrors(_errors);
      return;
    }
    dispatch(closeDialog());
    dispatch(openDialog(<PopUpGradient test="Ваш отзыв очень важен для нас, спасибо!" />));
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
    <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
        <div>
          <InputField onKeyPress={handleNameKeyPress} label="Имя" onChange={handleInputName} />
          {errors.name && (
            <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.name}</div>
          )}
        </div>

        <div>
          <InputField
            required
            onChange={handleInputEmail}
            label="Электронная почта"
            sx={{ width: '330px' }}
          />
          }
          {errors.email && (
            <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.email}</div>
          )}
        </div>
      </div>

      <div>
        <InputField
          required
          onChange={handleInputTitle}
          label="Заголовок к отзыву"
          sx={{ width: '100%' }}
        />
        {errors.title && (
          <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>{errors.title}</div>
        )}
      </div>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '100%', background: '#232020' },
          '& .MuiInputLabel-root': {
            color: '#676464',
            fontFamily: 'Raleway',
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderRadius: 0,
            borderColor: '#E2702F',
          },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            color: 'white',
            fontFamily: 'Raleway',
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dc5b13',
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF5B00',
          },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          id="outlined-multiline-static"
          label="Напишите Ваш отзыв..."
          multiline
          rows={4}
          onChange={handleCheckDescription}
        />
        {errors.description && (
          <div style={{ display: 'flex', marginTop: '8px', color: 'red' }}>
            {errors.description}
          </div>
        )}
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ContainedAndOutlinedButton onClick={onSubmit} variant="contained">
          {buttonLabel}
        </ContainedAndOutlinedButton>
      </div>
    </div>
  );
};

export default FeedbackForm;
