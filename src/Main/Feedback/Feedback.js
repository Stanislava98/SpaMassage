import DashWithSubheadings from '../../components/DashWithSubheadings';
import MarginWrapper from '../../components/MarginWrapper';
import CenterHeaderDescription from '../../components/CenterHeaderDescription';
import Title from '../../components/Title';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
import ListOfComments from './ListOfComments';

const Feedback = () => {
  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>Отзывы о SPA RELAX</DashWithSubheadings>
        <Title>
          Отзывы клиентов
          <br />— всегда приятно!
        </Title>
      </CenterHeaderDescription>
      <ListOfComments />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <ContainedAndOutlinedButton variant="contained">Добавить отзыв</ContainedAndOutlinedButton>
      </div>
    </MarginWrapper>
  );
};

export default Feedback;
