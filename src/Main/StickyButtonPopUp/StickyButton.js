import { useEffect, useState } from 'react';
import { Slide, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import CirclePhone from '../../icons/CirclePhone';
import { openDialog } from '../../store/modalSlice';
import PopUp from './PopUp';

const ButtonStyled = styled('button')({
  border: 0,
  borderRadius: '50%',
  height: '65px',
  width: '65px',
  backgroundColor: '#E2702F',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100,
  cursor: 'pointer',
  position: 'fixed',
  right: '55px',
  bottom: '60px',
  '&:hover': {
    backgroundColor: '#dc5b13',
  },

  '&::after': {
    content: "''",
    position: 'absolute',
    borderRadius: '50%',
    borderTop: '2px solid #E2702F',
    borderBottom: '1px solid #E2702F',
    height: '85px',
    width: '85px',
    animation: 'spin 3s linear infinite',
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: ' rotate(360deg)',
      },
    },
  },
});

const StickyButton = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const mainBlock = document.querySelector('.firstBlock');
      const mainPosition = mainBlock.getBoundingClientRect().top;
      // If top is minus then show button
      setIsVisible(mainPosition < 0);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    dispatch(openDialog(<PopUp />));
  };

  return (
    <Slide direction="up" in={isVisible}>
      <ButtonStyled onClick={handleClick}>
        <CirclePhone />
      </ButtonStyled>
    </Slide>
  );
};

export default StickyButton;
