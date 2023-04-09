const Validation = (values) => {
  const errors = {};
  const phone = /^\+38\(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  if (values.name.length < 2) {
    errors.name = 'Не менее 2 символов';
  }
  if (values.name.length < 2 && values.name.length === 0) {
    errors.name = 'Пожалуйста, введите ваше имя';
  }
  if (values.name.length > 35) {
    errors.name = 'Не более 35 символов';
  }

  if (!phone.test(values.phoneNumber)) {
    errors.phone = 'Некорректный формат номера телефона';
  }

  return errors;
};

export default Validation;
