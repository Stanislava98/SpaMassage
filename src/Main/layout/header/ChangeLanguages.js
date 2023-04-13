import { styled } from '@mui/material';
import { useState } from 'react';

const Root = styled('div')({
  display: 'flex',
  fontSize: '14px',
  gap: 10,
  textTransform: 'uppercase',
  '& :checked': {
    color: '#E2702F',
  },
  '& :hover': {
    color: '#dc5b13',
    cursor: 'pointer',
  },
  '.active': {
    color: '#E2702F',
  },
});

const ChangeLanguages = () => {
  const [language, setLanguage] = useState('ru');

  const handleClick = (lang) => {
    setLanguage(lang);
  };

  return (
    <Root>
      <div onClick={() => handleClick('ru')} className={language === 'ru' ? 'active' : ''}>
        ru
      </div>
      <div onClick={() => handleClick('en')} className={language === 'en' ? 'active' : ''}>
        en
      </div>
    </Root>
  );
};

export default ChangeLanguages;
