import {styled} from '@mui/material';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import SmallTitleDescription from '../../components/SmallTitleDescription';
import CrossButton from '../../components/CrossButton';
import IconCross from '../../icons/IconCross';
import FeedbackForm from './FeedbackForm';

const StyledRating = styled(Rating)({
  '&.MuiRating-root': {
    color: '#E2702F',
  },
  '& .MuiRating-iconHover': {
    color: '#dc5b13',
  },
  '& .MuiRating-iconActive': {
    color: '#dc5b13',
  },
  '.MuiRating-iconEmpty': {
    color: 'unset',
  },
  span: {
    svg: {
      width: '34px',
      height: '34px',
    },
  },
});

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  width: '724px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
});

const Definition = styled('span')({
  color: 'white',
  fontWeight: 'bold',
});

const BgWrapper = styled('div')({
  padding: '14px',
  display: 'flex',
  flexDirection: 'row-reverse',
  boxSizing: 'border-box',
  height: '100%',
});

const PopUpFeedback = () => {
  const [value, setValue] = useState(1);

  return (
    <Rectangle>
      <BgWrapper>
        <CrossButton>
          <IconCross />
        </CrossButton>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0 auto',
            paddingLeft: '24px',
            zIndex: 105,
            marginTop: '50px',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          <SmallTitleDescription>Будем благодарны отзыву</SmallTitleDescription>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              justifyContent: 'center',
              marginTop: '15px',
            }}
          >
            <Definition>Оценка</Definition>
            <StyledRating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <FeedbackForm buttonLabel="подтвердить" />
        </div>
      </BgWrapper>
    </Rectangle>
  );
};

export default PopUpFeedback;
