import { styled } from '@mui/material';

const TitleOfNames = styled('div')({
  textTransform: 'uppercase',
  color: 'white',
  fontWeight: 'bold',
});

const Description = styled('div')({
  color: 'white',
  marginTop: '12px',
});

const TherapistsListItem = ({ img, title, text }) => {
  return (
    <div id="specialists">
      <img src={img} />
      <div style={{ marginTop: '20px' }}>
        <TitleOfNames>{title}</TitleOfNames>
        <Description>{text}</Description>
      </div>
    </div>
  );
};

export default TherapistsListItem;
