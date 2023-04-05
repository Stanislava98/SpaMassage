import Header from './Main/layout/header/Header';
import WrapperContainer from './WrapperContainer';
import Gallery from './Main/HeaderGallery/Gallary';
import TextGallery from './Main/HeaderGallery/TextGallery';
import AboutSpa from './Main/AboutSpa/AboutSpa';
import ServicesSpa from './Main/ListOfSpa/ServicesSpa';
import GiftCertificates from './Main/Certificates/GiftСertificates';
import TitleCosmeticsBrands from "./Main/Brands/TitleCosmeticsBrands";
import BlockOfSpecialists from "./Main/Therapists/BlockOfSpecialists";
import Feedback from "./Main/Feedback/Feedback";
import Instagram from "./Main/Instagram";
import Footer from "./Main/layout/footer/Footer";
import StickyButton from "./Main/StickyButton";


function App() {
  return (
    <>
      <StickyButton/>
      <Header/>
      <WrapperContainer>
        <TextGallery />
        <AboutSpa/>
        <ServicesSpa/>
      </WrapperContainer>

      <GiftCertificates/>

      <WrapperContainer>
        <TitleCosmeticsBrands/>
      </WrapperContainer>
      <BlockOfSpecialists/>
      <WrapperContainer>
        <Feedback/>
        <Instagram/>
      </WrapperContainer>
      <Footer/>
    </>
  );
}

export default App;
