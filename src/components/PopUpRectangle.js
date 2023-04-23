import {styled} from "@mui/material";

const Rectangle = styled('div')({
  backgroundColor: '#1C1A1A',
  width: '1090px',
  zIndex: '104',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  padding: '24px',
});


const PopUpRectangle = (props) => {
  return (
    <Rectangle>{props.children}</Rectangle>
  )
}

export default PopUpRectangle;