import MassageListInformation from './MassageListInformation';
import Title from '../../components/Title';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import MarginWrapper from '../../components/MarginWrapper';
import CenterHeaderDescription from '../../components/CenterHeaderDescription';
import PopUpBookMassage from "./PopUpBookMassage";

const MainMassageBlock = () => {
  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>Райское наслаждение</DashWithSubheadings>
        <Title>Услуги spa relax</Title>
      </CenterHeaderDescription>
      <MassageListInformation/>
      <PopUpBookMassage />
    </MarginWrapper>
  );
};



export default MainMassageBlock;
