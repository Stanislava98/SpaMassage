import { styled } from '@mui/material';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import IconArrowLeft from '../../icons/ArrowLeft';

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

const Pagination = ({ callback, preventPage, nextPage, page }) => {
  const preventValue = () => {
    if (!preventPage) {
      callback('left');
    }
  };
  const nextValue = () => {
    if (!nextPage) {
      callback('right');
    }
  };
  const pageFormat = (pageNum) => {
    return `0${pageNum}`;
  };

  return (
    <Root>
      <WrapperCountColumnLeft
        style={{
          visibility: preventPage ? 'hidden' : 'visible',
        }}
      >
        <LeftCountSlider>{pageFormat(page)}</LeftCountSlider>
        <button
          onClick={preventValue}
          disabled={preventPage}
          style={{ backgroundColor: 'rgba(28,28,28,0)', border: 'none' }}
        >
          <IconArrowLeft />
        </button>
      </WrapperCountColumnLeft>
      {nextPage === false && (
        <WrapperCountColumnRight>
          <RightCountSlider>{pageFormat(page + 1)}</RightCountSlider>
          <button
            onClick={nextValue}
            disabled={nextPage}
            style={{ backgroundColor: 'rgba(28,28,28,0)', border: 'none' }}
          >
            <ArrowRightIcon />
          </button>
        </WrapperCountColumnRight>
      )}
    </Root>
  );
};

export default Pagination;
