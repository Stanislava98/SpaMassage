import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import CrossButton from 'components/CrossButton';
import IconCross from 'icons/IconCross';
import StyledButtonVariation from 'components/StyledButtonVariation';
import PopUpRectangle from 'components/PopUpRectangle';
import { closeDialog, openDialog } from 'store/modalSlice';
import SelectOils from './SelectOils';
import TimeSelect from './TimeSelect';
import Accordions from './Accordions';
import PopUpBookMassage from './PopUpBookMassage';

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
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeDialog());
    dispatch(openDialog(<PopUpBookMassage details={details} />));
  };

  return (
    <PopUpRectangle>
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
              <TimeSelect details={details} />
            </div>

            <div style={{ marginTop: '20px' }}>
              <DetailsInformation>{details.oils}</DetailsInformation>
              <div style={{ marginTop: '14px' }}>
                <SelectOils details={details} />
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
              <Accordions
                firstQuestion={details.firstQuestion}
                firstAnswer={details.firstAnswer}
                secondQuestion={details.secondQuestion}
                secondAnswer={details.secondAnswer}
              />
              <div style={{ bottom: '0', position: 'absolute' }}>
                <StyledButtonVariation variant="contained" onClick={handleClick}>
                  заказать услугу
                </StyledButtonVariation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PopUpRectangle>
  );
};

export default PopUpMassage;
