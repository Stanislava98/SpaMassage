import { styled } from '@mui/material';

const Start = styled('div')({
  padding: '0 180px',
});

const WrapperContainer = (props) => {
  return <Start>{props.children}</Start>;
};

export default WrapperContainer;
