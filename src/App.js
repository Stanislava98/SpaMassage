import { Provider } from 'react-redux';
import Header from './Main/layout/header/Header';
import WrapperContainer from './WrapperContainer';
import MainSection from './Main/HeaderGallery/MainSection';
import AboutSpa from './Main/AboutSpa/AboutSpa';
import MainMassageBlock from './Main/ListOfSpa/MainMassageBlock';
import GiftCertificates from './Main/Certificates/GiftСertificates';
import TitleCosmeticsBrands from './Main/Brands/TitleCosmeticsBrands';
import BlockOfSpecialists from './Main/Therapists/BlockOfSpecialists';
import Instagram from './Main/Instagram';
import Footer from './Main/layout/footer/Footer';
import StickyButton from './Main/StickyButtonPopUp/StickyButton';
import store from './store/store';
import ModalWrapper from './components/ModalWrapper';
import ListOfComments from './Main/Feedback/ListOfComments';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <WrapperContainer>
        <MainSection />
        <AboutSpa />
        <MainMassageBlock />
      </WrapperContainer>
      <GiftCertificates />
      <WrapperContainer>
        <TitleCosmeticsBrands />
      </WrapperContainer>
      <BlockOfSpecialists />
      <WrapperContainer>
        <ListOfComments />
        <Instagram />
      </WrapperContainer>
      <Footer />
      <StickyButton />
      <ModalWrapper />
    </Provider>
  );
}

export default App;
