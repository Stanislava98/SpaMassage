import {styled} from '@mui/material';
import Button from '@mui/material/Button';

const InfoCheck = styled(Button)({
  width: '90px',
  height: '40px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  fontSize: '16px',
  borderRadius: 0,
  fontFamily: 'Raleway',
  fontFeatureSettings: '"lnum"',
  ':hover': {
    backgroundColor: '#dc5b13',
    border: '1px solid #dc5b13',
    color: 'white'
  }
});

const RectangleCheck = (props) => {
  return <InfoCheck {...props} />;
};

export default RectangleCheck;
