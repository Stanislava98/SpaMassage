import PageTitle from 'components/PageTitle';
import DashWithSubheadings from 'components/DashWithSubHeadings';
import MarginWrapper from 'components/MarginWrapper';
import BrandGrid from './BrandGrid';

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
