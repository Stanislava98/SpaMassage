import { useState } from 'react';
import { styled } from '@mui/material';
import SmallTitleDescription from '../../components/SmallTitleDescription';
import ApplicationForm from '../../components/ApplicationForm';
import CrossButton from '../../components/CrossButton';
import CrossIcon from '../../icons/CrossIcon';

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
  width: '100%'
});

const BlockTextInputs = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  paddingLeft: '24px',
});

const PopUpSucceed = () => {
  return (
    <>
      <Rectangle>
        <BgWrapper>
          <CrossButton>
            <CrossIcon />
          </CrossButton>
          <BlockTextInputs>
            <BlockWithText>
              <SmallTitleDescription>
                Оставьте заявку
                <div className="description">Мы свяжемся с вами в ближайшее время</div>
              </SmallTitleDescription>
            </BlockWithText>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '24px',
                gap: '16px',
              }}
            >
              <ApplicationForm buttonLabel="жду звонка" />
            </div>
          </BlockTextInputs>
        </BgWrapper>
      </Rectangle>
    </>
  );
};

export default PopUpSucceed;
