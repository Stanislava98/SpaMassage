import MassageList from './MassageList';
import Title from '../../components/Title';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import MarginWrapper from '../../components/MarginWrapper';
import CenterHeaderDescription from '../../components/CenterHeaderDescription';

const ServicesSpa = () => {
  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>Райское наслаждение</DashWithSubheadings>
        <Title>Услуги spa relax</Title>
      </CenterHeaderDescription>
      <MassageList />
    </MarginWrapper>
  );
};

export default ServicesSpa;
