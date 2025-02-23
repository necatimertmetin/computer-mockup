import { Box } from "@mui/system";
import Blue from "../assets/imacs/Blue.png";
import Dark from "../assets/imacs/Dark.png";
import Green from "../assets/imacs/Green.png";
import Orange from "../assets/imacs/Orange.png";
import Pink from "../assets/imacs/Pink.png";
import Purple from "../assets/imacs/Purple.png";
import Silver from "../assets/imacs/Silver.png";
import Yellow from "../assets/imacs/Yellow.png";
import React from "react";

type MacProps = {
  color?: string;
  width?: number;
  children?: React.ReactNode;
};

const colorMap: Record<string, string> = {
  blue: Blue,
  dark: Dark,
  green: Green,
  orange: Orange,
  pink: Pink,
  purple: Purple,
  silver: Silver,
  yellow: Yellow,
};

export const Mac = ({ color = "Dark", width = 600, children }: MacProps) => {
  const imageSrc = colorMap[color.toLowerCase()];

  //screen sizes:
  //width: 3735px
  //height 2545px
  //border radius 64px
  //margin X 97px
  //margin top 90px
  //margin bottom 461px
  //black border 5px
  //black border radius 5px

  const aspectRatio = 3735 / 2545;
  const borderRadiusMac = (64 * width) / 3735 + "px";
  const borderRadiusScreen = (5 * width) / 3735 + "px";
  const marginX = (97 * width) / 3735 + "px";
  const marginTop = (90 * width) / 3735 + "px";
  const marginBottom = (461 * width) / 3735 + "px";
  const borderThickness = (5 * width) / 3735 + "px";

  return (
    <Box
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: `${width}px`,
        borderRadius: borderRadiusMac,
        aspectRatio: aspectRatio,
        display: "flex",
        position: "relative",

        filter: "drop-shadow(-10px 0px 15px #000000)",
        boxShadow: "-10px 0px 15px #000000",
      }}
    >
      {children && (
        <Box
          sx={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: borderRadiusScreen,
            border: `${borderThickness} solid black`,
            margin: `${marginTop} ${marginX} ${marginBottom} ${marginX}`,
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};
