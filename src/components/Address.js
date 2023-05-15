import { styled } from '@mui/material';
import GPS from 'icons/footer-icon/GPS';

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

const Address = () => {
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
        href="https://goo.gl/maps/4G1sxUjWnnKd5kj2A"
        target="_blank"
        rel="noreferrer"
      >
        <GPS />
        <div
          style={{ textDecoration: 'none' }}
          href="https://goo.gl/maps/4G1sxUjWnnKd5kj2A"
          target="_blank"
        >
          <Text>г.Одесса, ул. Марсельская 58</Text>
        </div>
      </a>
    </IconWithText>
  );
};

export default Address;
