import { styled } from '@mui/material';

const HeaderDescription = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const CenteredHeader = (props) => {
  return <HeaderDescription>{props.children}</HeaderDescription>;
};

export default CenteredHeader;
