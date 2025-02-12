import { Typography } from "@mui/material";
import SelectActionCard from "../Card";

const BNi = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        BNi
      </Typography>
      <SelectActionCard />
    </>
  );
};

export default BNi;
