import { styled } from '@mui/material';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
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

const MassageCart = ({ img, title, text, price }) => {
  return (
    <Cart>
      <div>
        <img src={img} style={{ maxWidth: '100%' }} />
        <div
          style={{
            height: '168px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <TitleAndPrice>
            <TitleOfCart>{title}</TitleOfCart>
            <PriceCart>{price}</PriceCart>
          </TitleAndPrice>
          <Description>{text}</Description>
          <ContainedAndOutlinedButton variant="outlined">записаться</ContainedAndOutlinedButton>
          <PopUpMassage />
        </div>
      </div>
    </Cart>
  );
};

export default MassageCart;
