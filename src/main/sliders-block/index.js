import { styled } from '@mui/material';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import StyledButtonVariation from 'components/StyledButtonVariation';
import sliders from 'fake-db/sliders';
import { openDialog } from 'store/modalSlice';
import PopUpMassage from 'main/massage-cards/PopUpMassage';
import massages from 'fake-db/massages';
import Pagination from './Pagination';
import Gallery from './GalleryImages';

const HeaderTextGallery = styled('h1')({
  zIndex: '2',
  position: 'absolute',
  fontFamily: 'Lovelace Text',
  color: 'white',
  fontSize: '65px',
  width: '75%',
  margin: 0,
  lineHeight: '125%',
  textTransform: 'uppercase',
  whiteSpace: 'pre-line',
});

const DescriptionTextGallery = styled('div')({
  marginTop: '160px',
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'pre-line',
  '& p': {
    color: 'white',
    marginBottom: 0,
    lineHeight: '140%',
    marginRight: '7%',
  },
});

const GallerySliderBlock = () => {
  const dispatch = useDispatch();
  const back = useRef(true);
  const forward = useRef(false);
  const index = useRef(0);
  const [slider, setSlider] = useState(sliders[index.current]);

  const handleClick = () => {
    const firstCard = massages[1];
    const secondCard = massages[3];
    const thirdCard = massages[8];

    const sliderCards = [firstCard, secondCard, thirdCard];

    dispatch(openDialog(<PopUpMassage details={sliderCards[index.current]} />));
  };

  const handleClickArrow = (press) => {
    if (press === 'left') {
      index.current -= 1;
    }
    if (press === 'right') {
      index.current += 1;
    }

    back.current = false;
    forward.current = false;

    if (index.current === 0) {
      back.current = true;
    }
    if (index.current === sliders.length - 1) {
      forward.current = true;
    }

    const _slider = sliders[index.current];
    setSlider(_slider);
  };

  return (
    <div style={{ display: 'flex' }} className="firstBlock">
      <div style={{ paddingTop: '90px' }}>
        <HeaderTextGallery>{slider.title}</HeaderTextGallery>
        <DescriptionTextGallery>
          <p>{slider.description}</p>
          <div style={{ marginTop: '40px' }}>
            <StyledButtonVariation variant="contained" onClick={handleClick}>
              записаться
            </StyledButtonVariation>
          </div>
          <Pagination
            page={slider.numberOfPage}
            callback={handleClickArrow}
            preventPage={back.current}
            nextPage={forward.current}
          />
        </DescriptionTextGallery>
      </div>
      <Gallery image={slider.img} />
    </div>
  );
};

export default GallerySliderBlock;
