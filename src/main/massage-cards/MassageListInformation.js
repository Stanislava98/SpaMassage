import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import massages from 'fake-db/massages';
import MassageCart from './MassageCart';

const MassageListInformation = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1920px)');
  const cols = isLargeScreen ? 4 : 3;

  return (
    <ImageList cols={cols} gap={34} style={{ marginTop: '30px' }}>
      {massages.map((item, index) => (
        <ImageListItem key={index} className="massage-cart">
          <MassageCart massage={item} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MassageListInformation;
