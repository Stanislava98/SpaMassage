import { styled } from '@mui/material';
import PhoneNumber from '../../../components/PhoneNumber';
import Address from '../../../components/Address';

const Root = styled('div')({
  transform: 'rotate(90deg)',
  display: 'flex',
  position: 'absolute',
  top: '400%',
});

const RightSideNumberAddress = () => {
  return (
    <Root>
      <div style={{ width: '200px' }}>
        <PhoneNumber />
      </div>
      <div style={{ width: '340px' }}>
        <Address />
      </div>
    </Root>
  );
};

export default RightSideNumberAddress;
