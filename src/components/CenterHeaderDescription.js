import { styled } from '@mui/material';

const HeaderDescription = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const CenterHeaderDescription = (props) => {
  return <HeaderDescription>{props.children}</HeaderDescription>;
};

export default CenterHeaderDescription;
