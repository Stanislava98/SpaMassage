import PhoneNumber from "../../../components/PhoneNumber";
import Address from "../../../components/Address";
import {styled} from "@mui/material";

const Root = styled('div')({
  transform: 'rotate(90deg)',
  display: 'flex',
  zIndex: '98',
  position: 'absolute',
  top: '400%',
})

const RightSideNumberAddress = () => {
  return (
    <Root>
      <div style={{width: '200px'}}>
        <PhoneNumber/>
      </div>
      <div style={{width: '340px'}}>
        <Address/>
      </div>
    </Root>
  )
}

export default RightSideNumberAddress;