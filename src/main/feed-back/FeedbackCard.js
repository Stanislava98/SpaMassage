import { styled } from '@mui/material';
import Rating from '@mui/material/Rating';

const Root = styled('div')({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'row',
});

const Rectangle = styled('div')({
  width: '337px',
  height: '372px',
  border: '1px solid #E2702F',
  display: 'flex',
  color: 'white',
  boxSizing: 'border-box',
  '@media (min-width: 1920px)': {
    width: '364px',
    height: '364px',
  },
});

const TitleInRectangle = styled('div')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
});

const Information = styled('div')({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
});

const DataName = styled('div')({
  color: '#787171',
  display: 'flex',
  marginTop: '10px',
  minWidth: '100%',
  justifyContent: 'space-between',
});

const FeedbackCard = ({ review }) => {
  return (
    <Root>
      <Rectangle>
        <Information>
          <TitleInRectangle>{review.title}</TitleInRectangle>
          <div style={{ height: '24px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Rating name="read-only" value={4} size="small" readOnly />
          </div>
          <div style={{ height: '230px', marginTop: '10px' }}>{review.description}</div>
          <DataName>
            <div>{review.name}</div>
            <div>{review.date}</div>
          </DataName>
        </Information>
      </Rectangle>
    </Root>
  );
};

export default FeedbackCard;
