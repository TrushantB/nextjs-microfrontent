"use client";
import React from 'react';

import { Box, Typography, CircularProgress } from "@mui/material";

const ComingSoon = ({ message = "Coming Soon..." }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Loading Animation */}
      <CircularProgress size={60} sx={{ color: "#1976d2", marginBottom: 2 }} />

      {/* Coming Soon Text */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
        {message}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#666", marginTop: 1 }}>
        We're working on something amazing. Stay tuned!
      </Typography>
    </Box>
  );
};

export default ComingSoon;
