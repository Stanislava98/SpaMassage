import Divider from '@mui/material/Divider';
import { styled } from '@mui/material';
import { Link } from 'react-scroll';
import DashWithSubheadings from 'components/DashWithSubHeadings';
import PageTitle from 'components/PageTitle';
import IconTelegram from 'icons/footer-icon/IconTelegram';
import IconFacebook from 'icons/footer-icon/IconFacebook';
import IconInstagram from 'icons/footer-icon/IconInstagram';
import MenuBar from 'components/MenuBar';
import IconVisa from 'icons/footer-icon/IconVisa';
import IconMasterCard from 'icons/footer-icon/IconMasterCard';
import Address from 'components/Address';
import PhoneNumber from 'components/PhoneNumber';

const Text = styled('div')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: 'white',
});

const BlockTextIcons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  alignItems: 'center',
});

const FooterInformation = () => {
  return (
    <div>
      <div>
        <DashWithSubheadings>Наш адрес</DashWithSubheadings>
        <PageTitle>Как нас найти?</PageTitle>
      </div>

      <BlockTextIcons>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Address />
          <PhoneNumber />

          <Text style={{ display: 'flex', alignItems: 'center' }}>ежедневно с 09:00 до 21:00</Text>
        </div>

        <div style={{ gap: '20px', display: 'flex' }}>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.instagram.com/atamanuikstanislava/"
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.facebook.com/stanislava.sheptitskaya.3/"
            target="_blank"
            rel="noreferrer"
          >
            <IconFacebook />
          </a>
          <a href="https://t.me/Slava98890" target="_blank" rel="noreferrer">
            <IconTelegram />
          </a>
        </div>
      </BlockTextIcons>
      <Divider style={{ minWidth: '100%', border: '1px solid #795348', marginTop: '20px' }} />

      <BlockTextIcons>
        <MenuBar>
          <Link to="about" spy smooth offset={-250} duration={500}>
            о нас
          </Link>
          <Link to="spa" spy smooth offset={-100} duration={500}>
            услуги
          </Link>
          <Link to="certificates" spy smooth offset={-120} duration={500}>
            подарочные сертификаты
          </Link>
          <Link to="specialists" spy smooth offset={-360} duration={500}>
            специалисты
          </Link>
          <Link to="certificates" spy smooth offset={3120} duration={500}>
            отзывы
          </Link>
        </MenuBar>
        <div style={{ gap: '20px', display: 'flex', alignItems: 'center' }}>
          <IconVisa />
          <IconMasterCard />
        </div>
      </BlockTextIcons>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: '#795348',
          marginTop: '20px',
          paddingBottom: '30px',
        }}
      >
        2023(С) разработано Stanislava Atamaniuk
      </div>
    </div>
  );
};

export default FooterInformation;
