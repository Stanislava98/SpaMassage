import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';
import { Link } from 'react-scroll';
import MenuBar from 'components/MenuBar';
import SpaRelaxIcon from './logo/SpaRelaxIcon';
import ChangeLanguages from './ChangeLanguages';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#1F1D1D',
  boxShadow: 'none',
  opacity: '95%',
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
    <StyledAppBar position="sticky">
      <Side />
      <StyledContainer>
        <Link to="main" spy smooth offset={-250} duration={500}>
          <SpaRelaxIcon />
        </Link>
        <MenuBar>
          <Link to="about" spy smooth offset={-250} duration={500}>
            о нас
          </Link>
          <Link to="spa" spy smooth offset={-130} duration={500}>
            услуги
          </Link>
          <Link to="certificates" spy smooth offset={-120} duration={500}>
            подарочные сертификаты
          </Link>
          <Link to="specialists" spy smooth offset={-360} duration={500}>
            специалисты
          </Link>
          <Link to="feedback" spy smooth offset={-350} duration={500}>
            отзывы
          </Link>
        </MenuBar>
      </StyledContainer>
      <Side>
        <ChangeLanguages />
      </Side>

    </StyledAppBar>
  );
};

export default Header;
