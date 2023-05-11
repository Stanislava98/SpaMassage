import Title from '../../components/Title';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import Brandes from "./Brandes";
import MarginWrapper from "../../components/MarginWrapper";

const TitleCosmeticsBrands = () => {
  return (
    <MarginWrapper>
      <DashWithSubheadings>Лучшие бренды косметики</DashWithSubheadings>
      <Title>Косметика <br/>известных брендов</Title>
      <Brandes />
    </MarginWrapper>
  );
};

export default TitleCosmeticsBrands;
