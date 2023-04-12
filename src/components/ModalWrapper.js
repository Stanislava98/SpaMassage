import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material';
import { closeDialog } from '../store/modalSlice';

const DimmedBackGround = styled('div')({
  backgroundColor: 'rgba(14, 13, 13, 0.96)',
  pointerEvents: `all`,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  minHeight: '100%',
  minWidth: '100%',
});

const ModalWrapper = () => {
  const dispatch = useDispatch();
  const open = useSelector(({ modal }) => modal.isOpened);
  const modal = useSelector(({ modal }) => modal.children);

  if (open === false) {
    return <></>;
  }

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    dispatch(closeDialog());
  };

  return (
    <DimmedBackGround onClick={handleCloseModal}>
      <div onClick={handleClick}>{modal}</div>
    </DimmedBackGround>
  );
};

export default ModalWrapper;
