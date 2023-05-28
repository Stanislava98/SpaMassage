import { styled } from '@mui/material';
import HorizontalBarIcon from 'icons/HorizontalBarIcon';

const SubHeading = styled('div')({
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '15px',
});

const DashWithSubHeadings = (props) => {
  return (
    <div id='spa' style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
      <HorizontalBarIcon />
      <SubHeading>{props.children}</SubHeading>
    </div>
  );
};

export default DashWithSubHeadings;
