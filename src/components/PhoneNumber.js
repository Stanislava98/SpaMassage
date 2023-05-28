import { styled } from '@mui/material';
import PhoneCallIcon from 'icons/footer/PhoneCallIcon';

const IconWithText = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
});

const Text = styled('div')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: 'white',
});

const PhoneNumber = () => {
  return (
    <IconWithText>
      <a
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '14px',
        }}
        href="tel:+380934657812"
      >
        <PhoneCallIcon />
        <div style={{ textDecoration: 'none' }} href="tel:+380934657812">
          <Text>+380934657812</Text>
        </div>
      </a>
    </IconWithText>
  );
};

export default PhoneNumber;
