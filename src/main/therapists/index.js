import Title from '../../components/Title';
import MarginWrapper from '../../components/MarginWrapper';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import CenterHeaderDescription from '../../components/CenterHeaderDescription';
import TherapistList from './TherapistList';

const BlockWithMassageTherapists = () => {
  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>Их умения творят настоящие чудеса</DashWithSubheadings>
        <Title>сертифицированные массажисты</Title>
      </CenterHeaderDescription>
      <TherapistList />
    </MarginWrapper>
  );
};

export default BlockWithMassageTherapists;
