import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import reviews from 'fake-db/reviews';
import CenteredHeader from 'components/CenteredHeader';
import DashWithSubheadings from 'components/DashWithSubHeadings';
import PageTitle from 'components/PageTitle';
import StyledButtonVariation from 'components/StyledButtonVariation';
import { openDialog } from 'store/modalSlice';
import MarginWrapper from 'components/MarginWrapper';
import PopUpFeedback from './PopUpFeedback';
import FeedbackCard from './FeedbackCard';

const FeedBack = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openDialog(<PopUpFeedback />));
  };

  return (
    <MarginWrapper>
      <CenteredHeader>
        <DashWithSubheadings>Отзывы о SPA RELAX</DashWithSubheadings>
        <PageTitle>
          Отзывы клиентов
          <br />— всегда приятно!
        </PageTitle>
      </CenteredHeader>
      <div id="feedback" />
      <Box
        style={{ display: 'flex', columnGap: '34px', justifyContent: 'center', flexWrap: 'wrap' }}
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        {reviews.map((item, index) => (
          <div key={index}>
            <FeedbackCard review={item} />
          </div>
        ))}
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <StyledButtonVariation onClick={handleClick} variant="contained">
          Добавить отзыв
        </StyledButtonVariation>
      </div>
    </MarginWrapper>
  );
};

export default FeedBack;
