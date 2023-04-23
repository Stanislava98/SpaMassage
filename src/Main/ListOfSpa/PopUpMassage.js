import { styled } from '@mui/material';
import CrossButton from '../../components/CrossButton';
import IconCross from '../../icons/IconCross';
import SelectCheckOils from './SelectCheckOils';
import ChooseTime from './ChooseTime';
import CustomizedAccordions from './CustomizedAccordions';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  width: '1090px',
  zIndex: '104',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  padding: '24px',
});

const TitleOfCart = styled('div')({
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontFamily: 'Lovelace text',
});

const DetailsInformation = styled('div')({
  fontFamily: 'Raleway',
  color: 'white',
});

const PriceCart = styled('div')({
  color: '#E2702F',
  fontWeight: 'bold',
  marginLeft: '0',
});

const PopUpMassage = ({ details }) => {
  console.log('detalis => ', details);

  return (
    <Rectangle>
      <div style={{ display: 'flex', position: 'relative', overflow: 'hidden', height: '700px' }}>
        <div style={{ position: 'relative', width: '50%' }}>
          <img src={details.img} style={{ position: 'absolute', width: '100%' }} />
        </div>

        <div style={{ padding: '0 0 0 24px', width: '50%' }}>
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
            <TitleOfCart>{details.title}</TitleOfCart>
          </div>

          <div style={{ marginTop: '20px' }}>
            <PriceCart>{details.price}</PriceCart>
            <div style={{ marginTop: '20px' }}>
              <DetailsInformation>{details.time}</DetailsInformation>
              <ChooseTime />
            </div>

            <div style={{ marginTop: '20px' }}>
              <DetailsInformation>{details.oils}</DetailsInformation>
              <div style={{ marginTop: '14px' }}>
                <SelectCheckOils />
              </div>
            </div>
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CustomizedAccordions
                firstQuestion={details.firstQuestion}
                firstAnswer={details.firstAnswer}
                secondQuestion={details.secondQuestion}
                secondAnswer={details.secondAnswer}
              />
              <div style={{bottom: '0', position: 'absolute'}}>
                <ContainedAndOutlinedButton variant="contained">
                  заказать услугу
                </ContainedAndOutlinedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rectangle>
  );
};

export default PopUpMassage;
