import { styled } from '@mui/material';
import Title from '../../components/Title';
import ContainedAndOutlinedButton from '../../components/ContainedAndOutlinedButton';
import {useDispatch} from "react-redux";
import {openDialog} from "../../store/modalSlice";
import PopUpBuyCertificate from "./PopUpBuyCertificate";

const Description = styled('div')({
  color: 'white',
  width: '45%',
  marginTop: '20px',
});

const InformationAboutCertificates = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openDialog(<PopUpBuyCertificate />))
  }

  return (
    <div id='certificates'>
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
          <ContainedAndOutlinedButton onClick={handleClick} variant="outlined">1000₴</ContainedAndOutlinedButton>
          <ContainedAndOutlinedButton onClick={handleClick} variant="outlined">1500₴</ContainedAndOutlinedButton>
          <ContainedAndOutlinedButton onClick={handleClick} variant="outlined">2000₴</ContainedAndOutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default InformationAboutCertificates;
