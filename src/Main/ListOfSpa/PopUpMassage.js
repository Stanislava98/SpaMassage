import { styled } from '@mui/material';
import CrossButton from '../../components/CrossButton';
import IconCross from '../../icons/IconCross';
import SelectCheckOils from './SelectCheckOils';
import ChooseTime from './ChooseTime';
import CustomizedAccordions from './CustomizedAccordions';

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  height: '680px',
  width: '1090px',
  zIndex: '104',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
});

const BgWrapper = styled('div')({
  height: '632px',
  width: '1042px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
      <BgWrapper>
        <div style={{ display: 'flex' }}>
          <div>
            <img src={details.img} />
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
              <div style={{ marginTop: '8px' }}>
                <CustomizedAccordions
                  firstQuestion={details.firstQuestion}
                  firstAnswer={details.firstAnswer}
                  secondQuestion={details.secondQuestion}
                  secondAnswer={details.secondAnswer}
                />
              </div>
            </div>
          </div>
        </div>
      </BgWrapper>
    </Rectangle>
  );
};

export default PopUpMassage;
