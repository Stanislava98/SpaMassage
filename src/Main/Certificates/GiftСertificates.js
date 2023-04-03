import { styled } from '@mui/material';
import InformationAboutCertificates from './InformationAboutCertificates';
import WrapperContainer from "../../WrapperContainer";
import MarginWrapper from "../../components/MarginWrapper";

const Root = styled('div')({
  backgroundColor: '#1C1A1A',
  position: 'relative',
});


const GiftCertificates = () => {
  return (
    <Root>
      <MarginWrapper>
        <WrapperContainer>
          <InformationAboutCertificates />
        </WrapperContainer>
      </MarginWrapper>
    </Root>
  );
};

export default GiftCertificates;
