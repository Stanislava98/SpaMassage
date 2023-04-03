import { styled } from '@mui/material';
import OutlinedButton from '../../components/OutlinedButton';
import Title from '../../components/Title';


const Description = styled('div')({
  color: 'white',
  width: '45%',
  marginTop: '20px',
});

const InformationAboutCertificates = () => {
  return (
    <>
      <img
        style={{ position: 'absolute', marginLeft: '570px', paddingTop: '60px' }}
        src="img/certificates1.png"
        alt=""
      />
      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <Title>подарочные сертификаты</Title>
        <Description>
          Необычный и эксклюзивный подарок, который даёт прекрасную возможность подарить своим
          любимым в честь праздника, а также друзьям или родственникам, даже бизнес партнёрам нечто
          оригинальное.
          <p style={{ marginBottom: '0' }}>
            Вы подарите наслаждение, в виде ритуала, подарите ощущение духовной и физической и
            гармонии. Такой подарок оставляет незабываемые чувства!
          </p>
        </Description>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '34px', marginTop: '40px' }}>
          <OutlinedButton>1000₴</OutlinedButton>
          <OutlinedButton>1500₴</OutlinedButton>
          <OutlinedButton>2000₴</OutlinedButton>
        </div>
      </div>
    </>
  );
};

export default InformationAboutCertificates;
