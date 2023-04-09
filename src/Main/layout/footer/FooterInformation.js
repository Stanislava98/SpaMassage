import DashWithSubheadings from "../../../components/DashWithSubheadings";
import Title from "../../../components/Title";
import {styled} from "@mui/material";
import IconTelegram from "../../../icons/footericon/IconTelegram";
import IconFacebook from "../../../icons/footericon/IconFacebook";
import IconInstagram from "../../../icons/footericon/IconInstagram";
import Divider from '@mui/material/Divider';
import MenuBar from "../../../components/MenuBar";
import IconVisa from "../../../icons/footericon/IconVisa";
import IconMasterCard from "../../../icons/footericon/IconMasterCard";
import Address from "../../../components/Address";
import PhoneNumber from "../../../components/PhoneNumber";


const Text = styled('div')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: 'white'
});

const BlockTextIcons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  alignItems: 'center',
})

const FooterInformation = () => {
  return (
    <div>
      <div>
        <DashWithSubheadings>Наш адрес</DashWithSubheadings>
        <Title>Как нас найти?</Title>
      </div>

      <BlockTextIcons>
        <div style={{display: 'flex', gap: '30px'}}>
          <Address />
          <PhoneNumber />

          <Text style={{display: 'flex', alignItems: 'center',}}>ежедневно с 09:00 до 21:00</Text>
        </div>
        <div style={{gap: '20px', display: 'flex'}}>
          <IconTelegram/>
          <IconFacebook/>
          <IconInstagram></IconInstagram>
        </div>
      </BlockTextIcons>
      <Divider style={{minWidth: '100%', border: '1px solid #795348', marginTop: '20px'}}/>

      <BlockTextIcons>
        <MenuBar>
          <div>о нас</div>
          <div>услуги</div>
          <div>подарочные сертификаты</div>
          <div>специалисты</div>
          <div>отзывы</div>
        </MenuBar>
        <div style={{gap: '20px', display: 'flex', alignItems: 'center'}}>
          <IconVisa/>
          <IconMasterCard/>
        </div>
      </BlockTextIcons>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        color: '#795348',
        marginTop: '20px',
        paddingBottom: '30px'}
      }>2023(С) разработано Stanislava Atamanuik</div>

    </div>
  )
}

export default FooterInformation;