import { styled } from '@mui/material';
import { useState } from 'react';
import PopUpRectangle from 'components/PopUpRectangle';
import CrossButton from 'components/CrossButton';
import CrossIcon from 'icons/CrossIcon';
import ApplicationForm from 'components/ApplicationForm';
import Calendar from './Calendar';
import RadioButtonCheckTime from './RadioButtonCheckTime';

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

const PopUpBookMassage = ({ details }) => {
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
          <div style={{ display: 'flex', width: '70%' }}>
            <div style={{ width: '120px', height: '120px' }}>
              <img
                style={{ width: '100%', objectFit: 'cover', height: '100%' }}
                src={details.img}
              />
            </div>
            <div style={{ marginLeft: '20px' }}>
              <TitleOfCart>{details.title}</TitleOfCart>
              <div
                style={{ display: 'flex', gap: '15px', flexDirection: 'column', marginTop: '15px' }}
              >
                <DetailsInformation>{`Длительность массажа: ${details.selectedMassageTime}`}</DetailsInformation>
                <DetailsInformation>{`Масло: ${details.selectedOils}`}</DetailsInformation>
              </div>
            </div>
          </div>

          <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PriceCart>{details.price}</PriceCart>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CrossButton>
                <CrossIcon />
              </CrossButton>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '34px',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <TitleOfCart>Записывайтесь в Spa центр и получите максимальное расслабление</TitleOfCart>
        <div style={{ display: 'flex', textAlign: 'center', lineHeight: '140%' }}>
          <DetailsInformation>
            Вы можете записаться на конкретную дату и время или оставить свой телефон <br />и мы
            свяжемся с Вами в течение 20 минут{' '}
          </DetailsInformation>
        </div>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '24px',
            justifyContent: 'center',
          }}
        >
          <Calendar />

          <div
            style={{
              backgroundColor: '#161515',
              width: '315px',
              paddingLeft: '24px',
              paddingTop: '18px',
            }}
          >
            <RadioButtonCheckTime />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '24px',
            gap: '16px',
          }}
        >
          <ApplicationForm
            className="row-form"
            buttonLabel="подтвердить"
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '0', color: 'white' }}>
          <span>
            Нажимая на кнопку, Вы соглашаетесь с{' '}
            <a
              href="https://www.example.com/privacy-policy"
              target="_blank"
              style={{ color: 'white' }}
              rel="noreferrer"
            >
              политикой конфиденциальности
            </a>
          </span>
        </div>
      </div>
    </PopUpRectangle>
  );
};

export default PopUpBookMassage;
