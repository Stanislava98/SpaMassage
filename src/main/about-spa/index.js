import { styled } from '@mui/material';
import IconBonusPlus from 'icons/IconBonus_Point';
import IconMassage from 'icons/IconMassage';
import IconCream from 'icons/IconCream';
import IconCoffeeCup from 'icons/IconCoffeeCup';
import PageTitle from 'components/PageTitle';
import MarginWrapper from 'components/MarginWrapper';
import CirclesAboutSpa from './CirclesAboutSpa';

const Description = styled('div')({
  color: 'white',
  margin: '0',
  marginLeft: '30px',
  lineHeight: '140%',
});

const AboutSpa = () => {
  const spaBenefits = [
    {
      icon: <IconBonusPlus />,
      text: 'Бонусная система для клиентов',
      margin: 0,
    },
    {
      icon: <IconMassage />,
      text: 'Профессиональные массажисты',
      margin: 10,
    },
    {
      icon: <IconCoffeeCup />,
      text: 'Всем посетителям ароматный чай',
      margin: 10,
    },
    {
      icon: <IconCream />,
      text: 'Качественные масла и средства',
      margin: 10,
    },
  ];

  return (
    <MarginWrapper>
      <PageTitle>вкратце о салоне</PageTitle>
      <div id='about' style={{ display: 'flex' }}>
        <PageTitle color="orange">spa relax</PageTitle>
        <Description>
          Погрузитесь в мир СПА от нашего салона — и ваш разум, тело и дух испытают фантастические
          новые ощущения. В изысканной комбинации от природы островов.
        </Description>
      </div>

      <div style={{ display: 'flex', marginTop: '30px', justifyContent: 'center' }}>
        {spaBenefits.map((benefit, index) => (
          <CirclesAboutSpa
            key={index}
            margin={benefit.margin}
            text={benefit.text}
            icon={benefit.icon}
          />
        ))}
      </div>
    </MarginWrapper>
  );
};

export default AboutSpa;
