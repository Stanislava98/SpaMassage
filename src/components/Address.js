import GPS from "../icons/footericon/GPS";
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

const Address = () => {
  return (
    <IconWithText>
      <GPS/>
      <Text>г.Одесса, ул. Марсельская 58</Text>
    </IconWithText>
  )
}

export default Address;