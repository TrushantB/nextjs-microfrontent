import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Typography,
} from "@mui/material";

const data = [
  {
    id: 1,
    product: "HMOPOS",
    date: "01/01/2024",
    user: "Amy J",
    status: "Completed",
  },
  {
    id: 2,
    product: "HMOMMP",
    date: "01/02/2024",
    user: "John Doe",
    status: "Pending",
  },
  {
    id: 3,
    product: "ANOC",
    date: "01/03/2024",
    user: "Rachel",
    status: "In Progress",
  },
];

const TableComponent = () => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2 }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#1976d2" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Product
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Date
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              User
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color:
                      row.status === "Completed"
                        ? "green"
                        : row.status === "Pending"
                        ? "orange"
                        : "blue",
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
