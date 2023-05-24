import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import massages from 'fake-db/massages';
import MassageCart from './MassageCart';

const MassageListInformation = () => {
  return (
    <ImageList style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '34px' }}>
      {massages.map((item, index) => (
        <ImageListItem key={index} className="massage-cart">
          <MassageCart massage={item} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MassageListInformation;
