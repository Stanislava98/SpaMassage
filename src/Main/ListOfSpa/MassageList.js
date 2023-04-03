import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ServiceCard from './ServiceCard';

const MassageList = () => {
  const itemData = [
    {
      img: 'img/ListOfMassage/image1.png',
      title: 'Антицеллюлитный массаж',
      text: 'Антицеллюлитный массаж стимулирует процессы внутри организма, благодаря активации липолиза и тонуса мышц',
      price: '300₴',
    },
    {
      img: 'img/ListOfMassage/image2.png',
      title: 'Массаж горячими камнями',
      text: 'Массаж с использованием горячих камней, выкладываемых на определенные зоны тела',
      price: '400₴',
    },
    {
      img: 'img/ListOfMassage/image3.png',
      title: 'Массаж стоп',
      text: 'Массаж стоп улучшает кровообращение, стимулирует мышцы, снижает напряжение',
      price: '350₴',
    },
    {
      img: 'img/ListOfMassage/image4.png',
      title: 'Массаж головы антистресс',
      text: 'Массаж шейно-воротниковой зоны восстанавливает силы, ускоряет отток',
      price: '250₴',
    },
    {
      img: 'img/ListOfMassage/image5.png',
      title: 'Масляный аромамассаж',
      text: 'Эффективный способ релаксации для тех, кто испытывает постоянные стрессы снижает уровень стресса',
      price: '400₴',
    },
    {
      img: 'img/ListOfMassage/image6.png',
      title: 'Травяной массаж',
      text: 'Массаж травяными мешочками— это процедура мягкая и несёт потрясающий',
      price: '300₴',
    },
    {
      img: 'img/ListOfMassage/image7.png',
      title: 'Массаж для двоих',
      text: 'Массаж будет проходить в комнате, освещенной свечами, проработают',
      price: '1000₴',
    },
    {
      img: 'img/ListOfMassage/image8.png',
      title: 'Шоколадное скрабирование',
      text: 'Скрабирование – это процедура механической очистки кожи от ороговевших ее частичек',
      price: '300₴',
    },
    {
      img: 'img/ListOfMassage/image9.png',
      title: 'Расслабляющий массаж',
      text: 'Расслабляющий массаж спины — очень приятная успокаивающая процедура снижает стресс и напряжение в мышцах',
      price: '600₴',
    },
  ];

  return (
    <ImageList cols={3} gap={34} style={{marginTop: '30px'}}>
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <ServiceCard title={item.title} text={item.text} price={item.price} img={item.img} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MassageList;
