const validationFeedbackForm = (values) => {
  const errors = {};
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const name = /^[a-zA-Zа-яА-ЯёЁ]+$/u;
  const title = /^[a-zA-Zа-яА-ЯёЁ0-9\s]+$/u;
  const description = /^[a-zA-Zа-яА-ЯёЁ0-9\s]+$/u;

  if (!name.test(values.name)) {
    errors.name = 'Некорректное имя';
  }

  if (values.name.length < 2) {
    errors.name = 'Не менее 2 символов';
  }
  if (values.name < 2 && values.name.length === 0) {
    errors.name = 'Пожалуйста, введите ваше имя';
  }

  if (!email.test(values.validateEmail)) {
    errors.email = 'Пожалуйста, введите корректный email';
  }

  if (!title.test(values.validateTitle)) {
    errors.title = 'Не забудьте добавить заголовок';
  }

  if (!description.test(values.validateDescription)) {
    errors.description = 'Будем рады краткому отзыву';
  }
  return errors;
};

export default validationFeedbackForm;
