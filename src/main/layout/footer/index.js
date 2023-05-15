import WrapperContainer from 'WrapperContainer';
import Gradient from './Gradient';
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
