import { styled } from '@mui/material';
import OutlinedButton from '../../components/OutlinedButton';

const Cart = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const TitleOfCard = styled('div')({
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

const PriceCard = styled('div')({
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

const ServiceCard = ({ img, title, text, price }) => {
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
            <TitleOfCard>{title}</TitleOfCard>
            <PriceCard>{price}</PriceCard>
          </TitleAndPrice>
          <Description>{text}</Description>
          <OutlinedButton>записаться</OutlinedButton>
        </div>
      </div>
    </Cart>
  );
};

export default ServiceCard;
