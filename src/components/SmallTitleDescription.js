import { styled } from '@mui/material';

const TitleAndDescription = styled('div')({
  color: 'white',
  fontFamily: 'Lovelace Text',
  fontSize: '24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  width: '100%',
  '& .description': {
    fontWeight: 'normal',
    fontSize: '16px',
    textTransform: 'none',
    marginTop: '5px',
    fontFamily: 'Raleway, serif',
  },
  '& .title': {
    width: '100% !important',
  },
});

const SmallTitleDescription = (props) => {
  return <TitleAndDescription>{props.children}</TitleAndDescription>;
};

export default SmallTitleDescription;
