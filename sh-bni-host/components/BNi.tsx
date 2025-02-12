"use client";
import { AppBar, Toolbar, Typography, Avatar, Box, Stack, Button, InputBase, Paper, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { styled } from "@mui/system";

const StyledSearch = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  borderRadius: "10px",
  backgroundColor: "#f1f3f5",
}));

const BNi = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Main Layout */}
      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        {/* Left Main Section */}
        <Box sx={{ flex: 2, padding: 3, backgroundColor: "#f9fbfc" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Hello, Amy
          </Typography>
          <Typography variant="h6" color="primary">
            How can I help you today?
          </Typography>

          {/* Placeholder for Carousel */}
          <Box sx={{ marginTop: 3, padding: 2, backgroundColor: "#fff", borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="body1">[Product Selection Carousel Placeholder]</Typography>
          </Box>

          {/* Chat Input */}
          <StyledSearch sx={{ marginTop: 3 }}>
            <ChatBubbleOutlineIcon sx={{ marginRight: 1 }} />
            <InputBase placeholder="Message BNi" fullWidth />
          </StyledSearch>
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ flex: 1, padding: 3, backgroundColor: "#fff", borderLeft: "1px solid #ddd" }}>
          {/* Search Input */}
          <StyledSearch>
            <SearchIcon sx={{ marginRight: 1 }} />
            <InputBase placeholder="Search" fullWidth />
          </StyledSearch>

          {/* New Chat Button */}
          <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
            NEW CHAT
          </Button>

          <Divider sx={{ marginY: 2 }} />

          {/* Chat List */}
          <Typography variant="subtitle1" fontWeight="bold">
            Today
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Current Chat
          </Typography>

          {/* Placeholder for chat items */}
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2">Plan Type (Title)</Typography>
            <Typography variant="caption" color="textSecondary">
              Chat initial written as subtitle...
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BNi;
