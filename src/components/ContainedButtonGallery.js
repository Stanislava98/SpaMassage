import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)({
  marginTop: '45px',
  backgroundColor: '#E2702F',
  cursor: 'pointer',
  fontFamily: 'Raleway, serif',
  textTransform: 'uppercase',
  borderRadius: '0',
  width: '180px',
  height: '45px',
  fontWeight: 'bold',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#dc5b13',
  },
});

const ContainedButtonGallery = (props) => {
  return <StyledButton variant="contained">{props.children}</StyledButton>;
};

export default ContainedButtonGallery;
