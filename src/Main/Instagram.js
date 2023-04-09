import MarginWrapper from "../components/MarginWrapper";
import CenterHeaderDescription from "../components/CenterHeaderDescription";
import DashWithSubheadings from "../components/DashWithSubheadings";
import Title from "../components/Title";
import {styled} from "@mui/material";

const PicturesBlock = styled('div')({
  display: 'flex',
  gap: '34px',
  marginTop: '30px',
  flexWrap: 'wrap'
})

const Instagram = () => {
  return (
  <MarginWrapper>
    <CenterHeaderDescription>
      <DashWithSubheadings>Подписывайтесь, чтоб не пропустить!</DashWithSubheadings>
      <Title>еженедельные призы в инстаграме</Title>
      <Title><a href="https://www.instagram.com/atamanuikstanislava/"
                               target="_blank"
                               rel="noopener noreferrer">@sparelax</a></Title>
    </CenterHeaderDescription>
    <PicturesBlock>
      <img src={'img/Insta/1.png'}/>
      <img src={'img/Insta/2.png'}/>
      <img src={'img/Insta/3.png'}/>
      <img src={'img/Insta/4.png'}/>
      <img src={'img/Insta/5.png'}/>
      <img src={'img/Insta/6.png'}/>
    </PicturesBlock>
  </MarginWrapper>
)
}

export default Instagram;