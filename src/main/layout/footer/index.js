import Gradient from './Gradient';
import WrapperContainer from '../../../WrapperContainer';
import FooterInformation from './FooterInformation';

const Footer = () => {
  return (
    <Gradient>
      <footer className="footer" style={{ paddingTop: '170px' }}>
        <WrapperContainer>
          <FooterInformation />
        </WrapperContainer>
      </footer>
    </Gradient>
  );
};

export default Footer;
