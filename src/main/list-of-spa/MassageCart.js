import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import StyledButtonVariation from '../../components/StyledButtonVariation';
import { openDialog } from '../../store/modalSlice';
import PopUpMassage from './PopUpMassage';

const Cart = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const TitleOfCart = styled('div')({
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
});

const Description = styled('div')({
  color: 'white',
  lineHeight: '140%',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
});

const PriceCart = styled('div')({
  color: '#E2702F',
  fontWeight: 'bold',
  marginLeft: '0',
});

const TitleAndPrice = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
  justifyContent: 'space-between',
});

const MassageCart = ({ massage }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openDialog(<PopUpMassage details={massage} />));
  };

  return (
    <Cart>
      <div>
        <img src={massage.img} style={{ maxWidth: '100%' }} />
        <div
          style={{
            height: '168px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <TitleAndPrice>
            <TitleOfCart>{massage.title}</TitleOfCart>
            <PriceCart>{massage.price}</PriceCart>
          </TitleAndPrice>
          <Description>{massage.text}</Description>
          <StyledButtonVariation onClick={handleClick} variant="outlined">записаться</StyledButtonVariation>
        </div>
      </div>
    </Cart>
  );
};

export default MassageCart;
