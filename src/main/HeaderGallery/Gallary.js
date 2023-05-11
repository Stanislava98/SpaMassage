import { styled } from '@mui/material';

const Root = styled('div')({
  '.fill': {
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  },
});

const Gallery = ({ image }) => {
  return (
    <Root>
      <div id="main" className="fill">
        <img src={image} alt="" />
      </div>
    </Root>
  );
};

export default Gallery;
