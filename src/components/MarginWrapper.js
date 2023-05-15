import { styled } from '@mui/material';

const Root = styled('div')({
  marginTop: '170px',
});

const MarginWrapper = (props) => {
  return <Root>{props.children}</Root>;
};

export default MarginWrapper;
