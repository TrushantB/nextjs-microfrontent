import * as React from "react";

import AccordionComponent from "./Accordion";
import { Typography } from "@mui/material";

const AnnualReadinessCompliance = () => (
  <>
    <Typography
      variant="h4"
      sx={{ fontWeight: "bold", color: "#333", marginTop: 2, marginBottom: 2 }}
    >
      AnnualReadiness Compliance
    </Typography>
    <AccordionComponent />
  </>
);

export default AnnualReadinessCompliance;
