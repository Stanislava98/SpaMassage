import PageTitle from '../../components/PageTitle';
import MarginWrapper from '../../components/MarginWrapper';
import DashWithSubheadings from '../../components/DashWithSubHeadings';
import CenteredHeader from '../../components/CenteredHeader';
import TherapistList from './TherapistList';

const BlockWithMassageTherapists = () => {
  return (
    <MarginWrapper>
      <CenteredHeader>
        <DashWithSubheadings>Их умения творят настоящие чудеса</DashWithSubheadings>
        <PageTitle>сертифицированные <br/>массажисты</PageTitle>
      </CenteredHeader>
      <TherapistList />
    </MarginWrapper>
  );
};

export default BlockWithMassageTherapists;
