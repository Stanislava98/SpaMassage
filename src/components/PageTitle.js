import { styled } from '@mui/material';

const colors = {
  default: '#FFF',
  orange: '#E2702F',
  orangeOnHover: '#dc5b13',
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
  a: {
    color: `${colors.orange}`,
    textDecoration: 'none',
  },
  'a:hover': {
    color: colors.orangeOnHover,
  },
}));

const PageTitle = (props) => {
  const color = colors[props.color ?? 'default'];

  return <TitleDetails color={color}>{props.children}</TitleDetails>;
};

export default PageTitle;
