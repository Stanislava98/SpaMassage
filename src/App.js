import { Provider } from 'react-redux';
import Header from './main/layout/header/Header';
import WrapperContainer from './WrapperContainer';
import MainSection from './main/HeaderGallery/MainSection';
import AboutSpa from './main/AboutSpa/AboutSpa';
import MainMassageBlock from './main/ListOfSpa/MainMassageBlock';
import GiftCertificates from './main/Certificates/GiftСertificates';
import TitleCosmeticsBrands from './main/Brands/TitleCosmeticsBrands';
import BlockOfSpecialists from './main/Therapists/BlockOfSpecialists';
import Instagram from './main/Instagram';
import Footer from './main/layout/footer/Footer';
import StickyButton from './main/StickyButtonPopUp/StickyButton';
import store from './store/store';
import ModalWrapper from './components/ModalWrapper';
import ListOfComments from './main/Feedback/ListOfComments';

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
