import { Provider } from 'react-redux';
import Header from './Main/layout/header/Header';
import WrapperContainer from './WrapperContainer';
import TextGallery from './Main/HeaderGallery/TextGallery';
import AboutSpa from './Main/AboutSpa/AboutSpa';
import MainMassageBlock from './Main/ListOfSpa/MainMassageBlock';
import GiftCertificates from './Main/Certificates/GiftСertificates';
import TitleCosmeticsBrands from './Main/Brands/TitleCosmeticsBrands';
import BlockOfSpecialists from './Main/Therapists/BlockOfSpecialists';
import Feedback from './Main/Feedback/Feedback';
import Instagram from './Main/Instagram';
import Footer from './Main/layout/footer/Footer';
import StickyButton from './Main/StickyButtonPopUp/StickyButton';
import store from './store/store';
import ModalWrapper from './components/ModalWrapper';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <WrapperContainer>
        <TextGallery />
        <AboutSpa />
        <MainMassageBlock />
      </WrapperContainer>
      <GiftCertificates />
      <WrapperContainer>
        <TitleCosmeticsBrands />
      </WrapperContainer>
      <BlockOfSpecialists />
      <WrapperContainer>
        <Feedback />
        <Instagram />
      </WrapperContainer>
      <Footer />
      <StickyButton />
      <ModalWrapper />
    </Provider>
  );
}

export default App;
