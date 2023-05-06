import { styled } from '@mui/material';

const TitleAndDescription = styled('div')({
  color: 'white',
  fontFamily: 'Lovelace Text',
  fontSize: '24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  width: '98%',
  '& .description': {
    fontWeight: 'normal',
    fontSize: '16px',
    textTransform: 'none',
    marginTop: '5px',
    fontFamily: 'Raleway, serif',
  },
});

const SmallTitleDescription = (props) => {
  return <TitleAndDescription>{props.children}</TitleAndDescription>;
};

export default SmallTitleDescription;
