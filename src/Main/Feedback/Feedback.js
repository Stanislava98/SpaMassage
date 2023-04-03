import DashWithSubheadings from "../../components/DashWithSubheadings";
import MarginWrapper from "../../components/MarginWrapper";
import CenterHeaderDescription from "../../components/CenterHeaderDescription";
import Title from "../../components/Title";
import ContainedButtonGallery from "../../components/ContainedButtonGallery";
import ListOfComments from "./ListOfComments";

const Feedback = () => {
  return (
    <MarginWrapper>
      <CenterHeaderDescription>
        <DashWithSubheadings>
          Отзывы о SPA RELAX
        </DashWithSubheadings>
        <Title>
          Отзывы клиентов
          <br />— всегда приятно!
        </Title>
      </CenterHeaderDescription>
      <ListOfComments/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ContainedButtonGallery>Добавить отзыв</ContainedButtonGallery>
      </div>
    </MarginWrapper>
  )
}

export default Feedback;