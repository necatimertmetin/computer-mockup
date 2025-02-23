import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Stack,
} from "@mui/material";
import { Mac } from "./mac/Mac";

// Define your custom colors
const colors = {
  blue: "#A9C7E1",
  dark: "#333333",
  green: "#B3D1C4",
  orange: "#FFBDA2",
  pink: "#ffcfc1",
  purple: "#AAA5D3",
  silver: "#C3C6C7",
  yellow: "#f9ce84",
};

// Helper function to generate secondary color based on primary
const getSecondaryColor = (primaryColor: keyof typeof colors) => {
  const colorShades: Record<keyof typeof colors, string> = {
    blue: "#6C9FB8", // Lighter shade of blue
    dark: "#444444", // Darker shade of dark
    green: "#A1D6A1", // Lighter green
    orange: "#FF7C4A", // Lighter orange
    pink: "#FFB3B3", // Lighter pink
    purple: "#B78EC6", // Lighter purple
    silver: "#A6B0B0", // Lighter silver
    yellow: "#F4D185", // Lighter yellow
  };

  return colorShades[primaryColor] || "#888888"; // Default fallback
};

// Define the light and dark themes with the new color palette
const lightTheme = (primaryColor: keyof typeof colors) =>
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: colors[primaryColor],
      },
      secondary: {
        main: getSecondaryColor(primaryColor),
      },
      background: {
        default: "#fff",
        paper: "#f4f4f4", // Lighter background for cards/papers
      },
      text: {
        primary: "#000",
        secondary: "#555", // Dark text for readability
      },
    },
  });

const darkTheme = (primaryColor: keyof typeof colors) =>
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: colors[primaryColor],
      },
      secondary: {
        main: getSecondaryColor(primaryColor),
      },
      background: {
        default: colors.dark,
        paper: "#444444", // Darker paper background for cards/papers
      },
      text: {
        primary: "#fff",
        secondary: "#ccc", // Lighter text for dark mode
      },
    },
  });

interface ComputerCardProps {
  color: keyof typeof colors;
  width: number;
  title: string;
  description: string;
  iframeSrc: string;
  buttonText1: string;
  buttonText2: string;
  buttonAction1: () => void;
  buttonAction2: () => void;
  isDarkMode: boolean;
}

function ComputerCard({
  color,
  width,
  title,
  description,
  iframeSrc,
  buttonText1,
  buttonText2,
  buttonAction1,
  buttonAction2,
  isDarkMode,
}: ComputerCardProps) {
  const theme = isDarkMode ? darkTheme(color) : lightTheme(color);

  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"row"} alignItems={"flex-start"} width={width * 2.2}>
        <Stack sx={{ position: "relative" }} alignItems={"stretch"}>
          <Box sx={{ backgroundColor: colors.green }}>
            <Typography variant="h4">&#8203;</Typography>
          </Box>
          <Box>
            <Typography variant="h4">{description}</Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1.1)",
            }}
          >
            <Mac color={color} width={width}>
              <iframe
                src={iframeSrc}
                style={{
                  width: "1920px",
                  height: "1080px",
                  transform: `scale(${width / 1920})`,
                  transformOrigin: "0 0",
                }}
              />
            </Mac>
          </Box>
          <CardActions sx={{ visibility: "hidden" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              onClick={buttonAction1}
            >
              {buttonText1}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={buttonAction2}
            >
              {buttonText2}
            </Button>
          </CardActions>
        </Stack>
        <Stack>
          <Box sx={{ backgroundColor: colors.green }}>
            <Typography variant="h4">{title}</Typography>
          </Box>
          <Box flex={1}>
            <Typography variant="h4">{description}</Typography>
          </Box>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              onClick={buttonAction1}
            >
              {buttonText1}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={buttonAction2}
            >
              {buttonText2}
            </Button>
          </CardActions>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default ComputerCard;
