import React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const plusSquare = <img src="assets/images/faq/plus-square.svg" alt={"open"} />;
const minusSquare = (
  <img src="assets/images/faq/minus-square.svg" alt={"close"} />
);

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: `${theme.palette.text.main}`,
  color: `${theme.palette.text.white}`,
  border: `1px solid ${theme.palette.primary.main}60`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(2),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(8)}`,
  background: `${theme.palette.text.white}`,
  color: `${theme.palette.text.grey}`,
}));

export default function CustomizedAccordions({ content,handleChange,expanded }) {
  const { title, summary } = content;
  return (
    <Accordion expanded={expanded === title} onChange={handleChange(title)}>
      <AccordionSummary
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        expandIcon={expanded ? minusSquare : plusSquare}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{summary}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

