import { styled } from '@mui/material';
import CrossButton from './CrossButton';
import IconCross from '../icons/IconCross';
import SmallTitleDescription from './SmallTitleDescription';

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  height: '430px',
  width: '624px',
  zIndex: '104',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',

  '&::before': {
    content: "''",
    position: 'absolute',
    background: 'linear-gradient(to top, rgba(175, 90, 62, 0.46), rgba(31, 29, 29, 0.01))',
    minHeight: '100%',
    minWidth: '100%',
    pointerEvents: 'none',
    opacity: '30%',
  },
});

const BgWrapper = styled('div')({
  padding: '14px',
  display: 'flex',
  flexDirection: 'row-reverse',
  boxSizing: 'border-box',
  height: '100%',
  background: 'url("/icons/small-stars.svg")',
});

const BlockWithText = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
});

const BlockTextInputs = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  paddingLeft: '24px',
});

const PopUpGradient = ({ test }) => {
  return (
    <Rectangle>
      <BgWrapper>
        <CrossButton>
          <IconCross />
        </CrossButton>
        <BlockTextInputs>
          <BlockWithText>
            <SmallTitleDescription>
              {test}
            </SmallTitleDescription>
          </BlockWithText>
        </BlockTextInputs>
      </BgWrapper>
    </Rectangle>
  );
};

export default PopUpGradient;
