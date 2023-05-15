import PageTitle from '../../components/PageTitle';
import DashWithSubheadings from '../../components/DashWithSubHeadings';
import BrandGrid from './BrandGrid';
import MarginWrapper from '../../components/MarginWrapper';

const Brandes = () => {
  return (
    <MarginWrapper>
      <DashWithSubheadings>Лучшие бренды косметики</DashWithSubheadings>
      <PageTitle>
        Косметика <br />
        известных брендов
      </PageTitle>
      <BrandGrid />
    </MarginWrapper>
  );
};

export default Brandes;
