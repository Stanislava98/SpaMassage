import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import reviews from '../../fake-db/reviews';
import FeedbackCard from './FeedbackCard';
import CenteredHeader from '../../components/CenteredHeader';
import DashWithSubheadings from '../../components/DashWithSubHeadings';
import PageTitle from '../../components/PageTitle';
import StyledButtonVariation from '../../components/StyledButtonVariation';
import { openDialog } from '../../store/modalSlice';
import PopUpFeedback from './PopUpFeedback';
import MarginWrapper from '../../components/MarginWrapper';

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
        style={{ display: 'flex', gap: '34px', justifyContent: 'center' }}
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
