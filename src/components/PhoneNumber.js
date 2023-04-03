import PhoneCall from "../icons/footericon/PhoneCall";
import {styled} from "@mui/material";


const IconWithText = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
})

const Text = styled('div')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: 'white'
});

const PhoneNumber = () => {
  return (
    <IconWithText>
      <PhoneCall/>
      <Text>+380934657812</Text>
    </IconWithText>
  )
}

export default PhoneNumber;