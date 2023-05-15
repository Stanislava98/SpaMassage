import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: 'transparent',
}));

const DetailsInformation = styled(Typography)({
  fontFamily: 'Raleway',
  color: 'white',
});

const Question = styled(Typography)({
  fontFamily: 'Raleway',
  color: 'white',
  fontWeight: 'bold',
});

const AccordionDetails = styled(MuiAccordionDetails)({
  borderTop: '1px solid #dc5b13',
  backgroundColor: 'transparent',
});

export default function Accordions({
  firstQuestion,
  firstAnswer,
  secondQuestion,
  secondAnswer,
}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '0',

    flexDirection: 'row-reverse',

    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    '& .MuiCollapse-root MuiCollapse-vertical': {
      backgroundColor: 'red',
      height: '4px',
    },
  }));

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Question>{firstQuestion}</Question>
        </AccordionSummary>
        <AccordionDetails>
          <DetailsInformation>{firstAnswer}</DetailsInformation>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Question>{secondQuestion}</Question>
        </AccordionSummary>
        <AccordionDetails>
          <DetailsInformation>{secondAnswer}</DetailsInformation>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
