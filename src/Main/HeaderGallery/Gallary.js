import {styled} from "@mui/material";

const Root = styled('div')({
  '.fill': {
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    }
  },
});

const Gallery = () => {
  return (
    <Root>
      <div className="fill">
        <img src="img/1.png" alt="" />
      </div>
    </Root>
  );
};

export default Gallery;
