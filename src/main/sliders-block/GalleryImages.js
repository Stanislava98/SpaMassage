import { styled } from '@mui/material';

const Root = styled('div')({
  '.fill': {
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
  '@media (min-width: 1920px)': {
    '.image-slider': {
      width: '800px',
      height: '800px',
    },
  },
});

const GalleryImages = ({ image }) => {
  return (
    <Root>
      <div id='main' className='fill'>
        <img className='image-slider' src={image} alt='' />
      </div>
    </Root>
  );
};

export default GalleryImages;
