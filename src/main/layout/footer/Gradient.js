import { styled } from '@mui/material';

const DataGradient = styled('div')({
  background: 'linear-gradient(to top, rgba(175, 90, 62, 0.46), rgba(31, 29, 29, 0.01))',
});

const Gradient = (props) => {
  return <DataGradient>{props.children}</DataGradient>;
};

export default Gradient;
