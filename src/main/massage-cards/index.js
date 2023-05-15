import PageTitle from 'components/PageTitle';
import DashWithSubheadings from 'components/DashWithSubHeadings';
import MarginWrapper from 'components/MarginWrapper';
import CenteredHeader from 'components/CenteredHeader';
import MassageListInformation from './MassageListInformation';

const SpaServicesPage = () => {
  return (
    <MarginWrapper>
      <CenteredHeader>
        <DashWithSubheadings>Райское наслаждение</DashWithSubheadings>
        <PageTitle>Услуги spa relax</PageTitle>
      </CenteredHeader>
      <MassageListInformation />
    </MarginWrapper>
  );
};

export default SpaServicesPage;
