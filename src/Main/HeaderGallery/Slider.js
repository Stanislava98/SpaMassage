import { styled } from '@mui/material';
import Slider from 'react-slick';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import IconArrowLeft from '../../icons/ArrowLeft';
import slider from '../../fake-db/slider';


const Root = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'end',
  height: '160px',
});

const LeftCountSlider = styled('div')({
  color: 'white',
  fontSize: '65px',
  fontFamily: 'Lovelace Text',
});

const RightCountSlider = styled('div')({
  color: 'white',
  fontSize: '40px',
  fontFamily: 'Lovelace Text',
  marginLeft: '60px',
  paddingBottom: '11px',
});

const WrapperCountColumnLeft = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const WrapperCountColumnRight = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
});


const Carousel = ({ slideShow }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    nextArrow: false,
    prevArrow: false,
    swipe: true,
  };

  return (
    <Slider {...settings}>




      {slider.map((step) => (
        <div key={step.label}>
          <div>{step.default}</div>
          <img
            src={step.img}
            alt={step.title}
            style={{
              height: "300px",
              display: "block",
              overflow: "hidden",
              width: "100%"
            }}
          />
        </div>
      ))}
      <WrapperCountColumnLeft>
        <LeftCountSlider>01</LeftCountSlider>
        <IconArrowLeft />
      </WrapperCountColumnLeft>
      <WrapperCountColumnRight>
        <RightCountSlider>03</RightCountSlider>
        <ArrowRightIcon {...settings} />
      </WrapperCountColumnRight>

    </Slider>
  );
};

export default Carousel;
