import { styled } from '@mui/material';
import PopUpRectangle from '../../components/PopUpRectangle';
import CrossButton from "../../components/CrossButton";
import IconCross from "../../icons/IconCross";
import DateCalendarValue from "./DateCalendarValue";

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
  fontSize: '20px',
});

const PopUpBookMassage = () => {
  return (
    <PopUpRectangle>
      <div
        style={{
          borderBottom: '1px solid #676464',
          borderTop: '1px solid #676464',
          paddingTop: '14px',
          paddingBottom: '14px',
          display: 'flex',
        }}
      >
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{display: 'flex', width: '70%'}}>
            <div style={{ width: '120px', height: '120px' }}>
              <img
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
                src="../../img/ListOfMassage/image5.png"
              />
            </div>
            <div style={{ marginLeft: '20px' }}>
              <TitleOfCart>Масляный аромамассаж</TitleOfCart>
              <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', marginTop: '15px' }}>
                <DetailsInformation>Длинетельность: 60 мин</DetailsInformation>
                <DetailsInformation>Масло: апельсиновое, кокосовое</DetailsInformation>
              </div>
            </div>
          </div>

          <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <PriceCart>400₴</PriceCart>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <CrossButton>
                <IconCross />
              </CrossButton>
            </div>
          </div>
        </div>
      </div>

      <div style={{display: 'flex', alignItems: 'center', marginTop: '34px', flexDirection: 'column', gap: '14px'}} >
        <TitleOfCart>Записывайтесь в Spa центр и получите максимальное расслабление</TitleOfCart>
        <div style={{display: 'flex', textAlign: 'center', lineHeight: '140%',}}>
          <DetailsInformation>Вы можете записаться на конкретную дату и время или
            оставить свой телефон <br/>и мы свяжемся с Вами в течение 20 минут </DetailsInformation>
        </div>
      </div>
      <div style={{display: 'flex', marginTop: '14px'}}>
        <DateCalendarValue />
      </div>
    </PopUpRectangle>
  );
};

export default PopUpBookMassage;
