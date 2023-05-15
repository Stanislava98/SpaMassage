import Title from '../../components/Title';
import DashWithSubheadings from '../../components/DashWithSubheadings';
import BrandGrid from './BrandGrid';
import MarginWrapper from '../../components/MarginWrapper';

const Brandes = () => {
  return (
    <MarginWrapper>
      <DashWithSubheadings>Лучшие бренды косметики</DashWithSubheadings>
      <Title>
        Косметика <br />
        известных брендов
      </Title>
      <BrandGrid />
    </MarginWrapper>
  );
};

export default Brandes;
