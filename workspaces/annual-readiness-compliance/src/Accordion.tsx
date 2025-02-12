import * as React from 'react';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  { question: "What is Next.js?", answer: "Next.js is a React framework for building web applications." },
  { question: "What is Material-UI?", answer: "Material-UI (MUI) is a popular React UI framework with pre-designed components." },
  { question: "How to use this Accordion?", answer: "Click on any section to expand and view the content." },
];

const AccordionComponent = () => {
  return (
    <div>
      {faqData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
