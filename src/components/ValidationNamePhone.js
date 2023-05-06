const ValidationNamePhone = (values) => {
  const errors = {};
  const phone = /^\+38\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  const nameField = /^[a-zA-Zа-яА-ЯёЁ]+$/u;

  if (!nameField.test(values.name)) {
    errors.name = 'Некорректное имя';
  }
  if (values.name.length < 2) {
    errors.name = 'Не менее 2 символов';
  }
  if (values.name < 2 && values.name.length === 0) {
    errors.name = 'Пожалуйста, введите ваше имя';
  }
  if (!phone.test(values.phoneNumber)) {
    errors.phone = 'Некорректный формат номера телефона';
  }
  return errors;
}

export default ValidationNamePhone;