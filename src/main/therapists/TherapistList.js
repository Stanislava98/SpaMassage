import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TherapistsListItem from './TherapistsListItem';

const TherapistList = () => {
  const itemData = [
    {
      img: 'img/Specialists/Марина.png',
      title: 'Марина',
      text: 'Spa специалист',
    },
    {
      img: 'img/Specialists/Ольга.png',
      title: 'Ольга',
      text: 'Spa специалист, диетолог, массажист',
    },
    {
      img: 'img/Specialists/Виктор.png',
      title: 'Виктор',
      text: 'Spa специалист, реабилотолог',
    },
    {
      img: 'img/Specialists/Ксения.png',
      title: 'Ксения',
      text: 'Spa специалист',
    },
  ];

  return (
    <ImageList style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <TherapistsListItem key={index} title={item.title} text={item.text} img={item.img} />
          </ImageListItem>
        ))}
      </div>
    </ImageList>
  );
};

export default TherapistList;
