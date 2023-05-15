import MassageListInformation from './MassageListInformation';
import Title from '../../components/Title';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import MarginWrapper from '../../components/MarginWrapper';
import CenterHeaderDescription from '../../components/CenterHeaderDescription';

const SpaServicesPage = () => {
  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>Райское наслаждение</DashWithSubheadings>
        <Title>Услуги spa relax</Title>
      </CenterHeaderDescription>
      <MassageListInformation />
    </MarginWrapper>
  );
};

export default SpaServicesPage;
