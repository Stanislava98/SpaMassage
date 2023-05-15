import { styled } from '@mui/material';
import { useState } from 'react';
import SmallTitleDescription from 'components/SmallTitleDescription';
import CrossButton from 'components/CrossButton';
import IconCross from 'icons/IconCross';
import InputFieldNamePhone from './InputFieldNamePhone';

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  width: '724px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
});

const BgWrapper = styled('div')({
  padding: '14px',
  display: 'flex',
  flexDirection: 'row-reverse',
  boxSizing: 'border-box',
  height: '100%',
});

const PopUpBuyCertificate = () => {
  const [succeed, setSucceed] = useState(false);

  function handleSucceed() {
    setSucceed(true);
  }

  return (
    <Rectangle>
      <BgWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '50px 50px',
            zIndex: 105,
            marginTop: '50px',
            marginBottom: '40px',
          }}
        >
          <SmallTitleDescription>
            <div className="title">Введите данные для оформления</div>
          </SmallTitleDescription>

          <div
            style={{
              borderBottom: '1px solid #676464',
              borderTop: '1px solid #676464',
              paddingTop: '14px',
              paddingBottom: '14px',
              display: 'flex',
              marginTop: '24px',
            }}
          >
            <SmallTitleDescription>
              <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <div
                  className="description"
                  style={{ fontWeight: 'bold', width: '65%', marginTop: '0' }}
                >
                  Cертификат на сумму:
                </div>

                <div
                  style={{
                    width: '35%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className="description"
                    style={{ color: '#E2702F', fontWeight: 'bold', marginTop: '0' }}
                  >
                    1000
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CrossButton>
                      <IconCross />
                    </CrossButton>
                  </div>
                </div>
              </div>
            </SmallTitleDescription>
          </div>
          <InputFieldNamePhone callback={handleSucceed} />
        </div>
      </BgWrapper>
    </Rectangle>
  );
};

export default PopUpBuyCertificate;
