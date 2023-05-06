import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MassageCart from './MassageCart';
import massages from '../../fake-db/massages';

const MassageListInformation = () => {
  return (
    <ImageList cols={3} gap={34} style={{ marginTop: '30px' }}>
      {massages.map((item, index) => (
        <ImageListItem key={index}>
          <MassageCart massage={item} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MassageListInformation;
