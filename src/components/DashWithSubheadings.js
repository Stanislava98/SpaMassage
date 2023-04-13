import { styled } from '@mui/material';
import HorizontalBar from '../icons/HorizontalBar';

const Subheading = styled('div')({
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '15px',
});

const DashWithSubheadings = (props) => {
  return (
    <div id='spa' style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
      <HorizontalBar />
      <Subheading>{props.children}</Subheading>
    </div>
  );
};

export default DashWithSubheadings;
