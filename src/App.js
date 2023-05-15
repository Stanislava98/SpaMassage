import { Provider } from 'react-redux';
import Header from './main/layout/header';
import WrapperContainer from './WrapperContainer';
import GallerySliderBlock from './main/sliders-block';
import SpaServicesPage from './main/massage-cards';
import GiftCertificates from './main/gift-certificate';
import Index from './main/therapists';
import Instagram from './main/instagram/Instagram';
import Footer from './main/layout/footer';
import StickyButton from './main/sticky-button';
import store from './store/store';
import ModalWrapper from './components/ModalWrapper';
import FeedBack from './main/feed-back';
import AboutSpa from './main/about-spa';
import Brandes from './main/brands-cosmetimic';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <WrapperContainer>
        <GallerySliderBlock />
        <AboutSpa />
        <SpaServicesPage />
      </WrapperContainer>
      <GiftCertificates />
      <WrapperContainer>
        <Brandes />
      </WrapperContainer>
      <Index />
      <WrapperContainer>
        <FeedBack />
        <Instagram />
      </WrapperContainer>
      <Footer />
      <StickyButton />
      <ModalWrapper />
    </Provider>
  );
}

export default App;
