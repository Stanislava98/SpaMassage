import { styled } from '@mui/material';
import IconBonusPlus from 'icons/BonusPointIcon';
import MassageIcon from 'icons/MassageIcon';
import CreamIcon from 'icons/CreamIcon';
import CoffeeCupIcon from 'icons/CoffeeCupIcon';
import PageTitle from 'components/PageTitle';
import MarginWrapper from 'components/MarginWrapper';
import CirclesAboutSpa from './CirclesAboutSpa';

const Description = styled('div')({
  color: 'white',
  margin: '0',
  marginLeft: '30px',
  lineHeight: '140%',
  '@media (min-width: 1920px)': {
    width: '45%',
    marginTop: '7px',
  },
});

const AboutSpa = () => {
  const spaBenefits = [
    {
      icon: <IconBonusPlus />,
      text: 'Бонусная система для клиентов',
      margin: 0,
    },
    {
      icon: <MassageIcon />,
      text: 'Профессиональные массажисты',
      margin: 10,
    },
    {
      icon: <CoffeeCupIcon />,
      text: 'Всем посетителям ароматный чай',
      margin: 10,
    },
    {
      icon: <CreamIcon />,
      text: 'Качественные масла и средства',
      margin: 10,
    },
  ];

  return (
    <MarginWrapper>
      <PageTitle>вкратце о салоне</PageTitle>
      <div id="about" style={{ display: 'flex' }}>
        <PageTitle color="orange">spa relax</PageTitle>
        <Description className="description-about-spa">
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
