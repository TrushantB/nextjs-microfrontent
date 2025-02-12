import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Intelligence Catalogue",
    description: "Intelligence Catalogue",
    href: "/intelligence-catalogue",
  },
  {
    id: 2,
    title: "Digital Content Intelligence",
    description: "Digital Content Intelligence",
    href: "/digital-content-intelligence",
  },
  {
    id: 3,
    title: "Annual Readiness Compliance ",
    description: "Annual Readiness Compliance",
    href: "/annual-readiness-compliance",
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={index}>
            <Link href={card.href}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
            </Link>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
