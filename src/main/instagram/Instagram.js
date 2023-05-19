import MarginWrapper from 'components/MarginWrapper';
import CenteredHeader from 'components/CenteredHeader';
import DashWithSubheadings from 'components/DashWithSubHeadings';
import PageTitle from 'components/PageTitle';
import { styled } from '@mui/material';

const PicturesBlock = styled('div')({
  display: 'flex',
  gap: '34px',
  marginTop: '30px',
  flexWrap: 'wrap',
});

const Instagram = () => {
  return (
    <MarginWrapper>
      <CenteredHeader>
        <DashWithSubheadings>Подписывайтесь, чтоб не пропустить!</DashWithSubheadings>
        <PageTitle>еженедельные призы в инстаграме</PageTitle>
        <PageTitle>
          <a
            href="my-project/src/main/instagram/Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sparelax
          </a>
        </PageTitle>
      </CenteredHeader>
      <PicturesBlock>
        <img src="img/Insta/1.png" alt="Woman-Back" />
        <img src="img/Insta/2.png" alt="Women-Laughing" />
        <img src="img/Insta/3.png" alt="Coconut" />
        <img src="img/Insta/4.png" alt="Talking women" />
        <img src="img/Insta/5.png" alt="Back-Massage" />
        <img src="img/Insta/6.png" alt="Back" />
      </PicturesBlock>
    </MarginWrapper>
  );
};

export default Instagram;
