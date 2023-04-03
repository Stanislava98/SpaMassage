import { Button, styled } from '@mui/material';

const BasicButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid #E2702F',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontFamily: 'Raleway, serif',
  borderRadius: '0',
  fontFeatureSettings: '"lnum"',
  width: '180px',
  height: '45px',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#E2702F',
  '&:hover': {
    backgroundColor: '#dc5b13',
    color: 'white',
    border: 'none',
  },
});

const OutlinedButton = (props) => {
  return <BasicButton variant="outlined">{props.children}</BasicButton>;
};

export default OutlinedButton;
