import { styled } from '@mui/material';

const colors = {
  default: '#FFF',
  orange: '#E2702F',
};

const TitleDetails = styled('div')(({ color }) => ({
  color,
  fontFamily: 'Lovelace Text',
  fontSize: '65px',
  lineHeight: '125%',
  textTransform: 'uppercase',
  margin: 0,
  fontWeight: 'bold',
  flexShrink: 0,
}));

const Title = (props) => {
  const color = colors[props.color ?? 'default'];

  return <TitleDetails color={color}>{props.children}</TitleDetails>;
};

export default Title;
