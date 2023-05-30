import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { SectionContainer } from "../style";
import { StarFour, TextAlignCenter } from "@phosphor-icons/react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "What is the pricing for your services?",
      answer: "Please contact our sales team for pricing details.",
    },
    {
      question: "Do you offer refunds for canceled orders?",
      answer:
        "Yes, we provide refunds for canceled orders within 30 days of purchase.",
    },
    // Add more FAQs...
  ];

  return (
    <SectionContainer>
      <h1>популярные вопросы</h1>
      {faqs.map((faq, index) => (
        <Accordion
          style={{ backgroundColor: "#e9eaec", boxShadow: "none" }}
          key={index}
        >
          <AccordionSummary
            expandIcon={<StarFour size={24} weight="fill" color="black" />}
          >
            <Typography variant="h5">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </SectionContainer>
  );
};

export default FAQs;
