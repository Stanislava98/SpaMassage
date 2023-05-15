import { IconButton, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeDialog } from 'store/modalSlice';

const CrossIconButton = styled(IconButton)({
  backgroundColor: 'none',
  padding: '0',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const CrossButton = (props) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        cursor: 'pointer',
        width: '24px',
        height: '24px',
      }}
    >
      <CrossIconButton onClick={handleClose}>{props.children}</CrossIconButton>
    </div>
  );
};

export default CrossButton;
