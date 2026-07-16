import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is TaskFlow?",
    answer:
      "TaskFlow is a modern task management application that helps you organize, track and complete your daily tasks efficiently.",
  },
  {
    question: "Is TaskFlow free to use?",
    answer:
      "Yes. You can use all the core features for free, including creating, updating and managing tasks.",
  },
  {
    question: "Can I edit my tasks later?",
    answer:
      "Absolutely! You can edit the task name, description, notes, priority, due date and status anytime.",
  },
  {
    question: "Can I delete completed tasks?",
    answer:
      "Yes. Tasks can be deleted at any time after confirmation.",
  },
];

export default function FAQ() {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        py: 10,
        px: 4,
      }}
    >
      <Typography
        align="center"
        color="#6366f1"
        fontWeight={700}
      >
        FAQ
      </Typography>

      <Typography
        align="center"
        fontWeight={800}
        fontSize={{ xs: 34, md: 46 }}
        mt={2}
        mb={6}
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((item) => (
        <Accordion
          key={item.question}
          sx={{
            mb: 2,
            borderRadius: "16px !important",
            overflow: "hidden",
            boxShadow: "0 8px 25px rgba(0,0,0,.05)",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography fontWeight={700}>
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}