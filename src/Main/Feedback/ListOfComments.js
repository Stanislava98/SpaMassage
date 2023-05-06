import { useDispatch } from 'react-redux';
import reviews from '../../fake-db/reviews';
import FeedbackCard from './FeedbackCard';
import CenterHeaderDescription from '../../components/CenterHeaderDescription';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import Title from '../../components/Title';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
import { openDialog } from '../../store/modalSlice';
import PopUpFeedback from './PopUpFeedback';
import MarginWrapper from '../../components/MarginWrapper';
import Box from "@mui/material/Box";

const ListOfComments = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openDialog(<PopUpFeedback />));
  };

  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>Отзывы о SPA RELAX</DashWithSubheadings>
        <Title>
          Отзывы клиентов
          <br />— всегда приятно!
        </Title>
      </CenterHeaderDescription>
      <div id="feedback" />
      <Box
        style={{ display: 'flex', gap: '34px' }}
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
        <ContainedAndOutlinedButton onClick={handleClick} variant="contained">
          Добавить отзыв
        </ContainedAndOutlinedButton>
      </div>
    </MarginWrapper>
  );
};

export default ListOfComments;
