import { AppBar, Toolbar, Typography, Avatar, Box, Stack, Button } from "@mui/material";
import Link from "next/link";

// Define Menu Items in an Array
const menuItems = [
  { label: "BNi", path: "/" },
  { label: "Intelligence Catalogue", path: "/intelligence-catalogue" },
  { label: "Digital Content Intelligence", path: "/digital-content-intelligence" },
  { label: "Annual Readiness Compliance", path: "/annual-readiness-compliance" },
];

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2", paddingX: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side (Logo + Navigation) */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            Simplify Healthcare
          </Typography>

          {/* Render Menu Items Dynamically */}
          <Stack direction="row" spacing={2}>
            {menuItems.map((item, index) => (
              <Button key={index} color="inherit" component={Link} href={item.path}>
                {item.label}
              </Button>
            ))}
          </Stack>
        </Stack>

        {/* Right Side (User Avatar) */}
        <Avatar alt="User Avatar" src="/avatar.jpg" sx={{ width: 36, height: 36, cursor: "pointer" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
