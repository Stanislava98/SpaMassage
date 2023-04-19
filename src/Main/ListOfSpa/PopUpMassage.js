import { styled } from '@mui/material';
import CrossButton from '../../components/CrossButton';
import IconCross from '../../icons/IconCross';
import InputCheckUp from './InputCheckUp';
import ChooseTime from './ ChooseTime';
import ChooseType from './ChooseType';

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  height: '680px',
  width: '940px',
  zIndex: '104',
  position: 'fixed',
  top: '56%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
});

const BgWrapper = styled('div')({
  height: '632px',
  width: '892px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const TitleOfCard = styled('div')({
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontFamily: 'Lovelace text',
});

const PriceCart = styled('div')({
  color: '#E2702F',
  fontWeight: 'bold',
  marginLeft: '0',
});

const PopUpMassage = () => {
  return (
    <Rectangle>
      <BgWrapper>
        <div style={{ display: 'flex' }}>
          <div style={{ maxWidth: '100%' }}>
            <img src="/img/imgMassagePopUp/Аромамассаж.png" />
          </div>

          <div style={{ padding: '0 0 0 24px', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CrossButton>
                <IconCross />
              </CrossButton>
              <TitleOfCard>Масляный аромамассаж</TitleOfCard>
            </div>

            <div style={{ marginTop: '24px' }}>
              <PriceCart>400₴</PriceCart>
              <div style={{ marginTop: '24px' }}>
                <div style={{ color: 'white' }}>Длительность сеанса:</div>
                <ChooseTime />
              </div>

              <div style={{ marginTop: '24px' }}>
                <div style={{ color: 'white' }}>Тип массажа:</div>
                <div
                  style={{ display: 'flex', flexDirection: 'row', gap: '14px', marginTop: '14px' }}
                >
                  <ChooseType />
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <div style={{ color: 'white' }}>Масла для аромамассажа:</div>
                <div
                  style={{ display: 'flex', flexDirection: 'row', gap: '14px', marginTop: '14px' }}
                >
                  <InputCheckUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BgWrapper>
    </Rectangle>
  );
};

export default PopUpMassage;
