import * as React from "react";
import TableComponent from "./Table";
import { Typography } from "@mui/material";

const IntelligenceCatalogue = () => (
  <>
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", marginTop:2, marginBottom:2 }}>
      Intelligence Catalogue
    </Typography>
    <TableComponent />
  </>
);

export default IntelligenceCatalogue;
