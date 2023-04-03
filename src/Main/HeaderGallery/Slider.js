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
})

const Slider = () => {
  return (
    <Root>
      <WrapperCountColumnLeft>
          <LeftCountSlider>
            03
          </LeftCountSlider>
          <IconArrowLeft/>
        </WrapperCountColumnLeft>
        <WrapperCountColumnRight>
          <RightCountSlider>
            05
          </RightCountSlider>
          <ArrowRightIcon/>
        </WrapperCountColumnRight>
    </Root>
  )
}

export default Slider;
