import { styled } from '@mui/material';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
import Slider from './Slider';
import Gallery from './Gallary';

const HeaderTextGallery = styled('h1')({
  zIndex: '2',
  position: 'absolute',
  fontFamily: 'Lovelace Text',
  color: 'white',
  fontSize: '65px',
  margin: 0,
  lineHeight: '125%',
  textTransform: 'uppercase',
});

const onSubmit = (event) => {
  console.log('event > ', event);
};

const DescriptionTextGallery = styled('div')({
  marginTop: '170px',
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  '& p': {
    color: 'white',
    marginBottom: 0,
    lineHeight: '140%',
    marginRight: '7%',
  },
});

const TextGallery = () => {
  return (
    <div style={{ display: 'flex' }} className="firstBlock">
      <div style={{ paddingTop: '90px' }}>
        <HeaderTextGallery>Массаж головы антистресс</HeaderTextGallery>
        <DescriptionTextGallery>
          <p>
            Главная задача такого массажа заключается <br />в расслаблении, избавлении от негативных
            мыслей, чему способствуют ритмические движения массажиста, свечи и приятная фоновая
            музыка
          </p>
          <div style={{ marginTop: '40px' }}>
            <ContainedAndOutlinedButton variant="contained" onClick={onSubmit}>
              записаться
            </ContainedAndOutlinedButton>
          </div>
          <Slider />
        </DescriptionTextGallery>
      </div>
      <Gallery />
    </div>
  );
};

export default TextGallery;
