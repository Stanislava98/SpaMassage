import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';
import SpaRelaxIcon from '../../logo/SpaRelaxIcon';
import ChangeLanguages from './ChangeLanguages';
import MenuBar from "../../../components/MenuBar";
import RightSideNumberAddress from "./RightSideNumberAddress";

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'row',
});

const StyledContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 0',
});

const Side = styled('div')({
  minWidth: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
});

const Header = () => {
  return (
    <StyledAppBar position="relative">
      <Side />
      <StyledContainer>
        <div>
            <SpaRelaxIcon />
        </div>
        <MenuBar>
          <div>о нас</div>
          <div>услуги</div>
          <div>подарочные сертификаты</div>
          <div>специалисты</div>
          <div>отзывы</div>
        </MenuBar>
      </StyledContainer>
      <Side>
        <ChangeLanguages />
        <RightSideNumberAddress />
      </Side>
    </StyledAppBar>

  );
};

export default Header;
