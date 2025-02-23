import { Box } from "@mui/system";
import { Mac } from "./mac/Mac";
import ComputerCard from "./Card";

function Computer() {
  const handleAction1 = () => {
    alert("Action 1 clicked");
  };

  const handleAction2 = () => {
    alert("Action 2 clicked");
  };

  const colors = {
    blue: "#A9C7E1",
    dark: "#333333",
    green: "#4CAF50",
    orange: "#FFBDA2",
    pink: "#ffcfc1",
    purple: "#AAA5D3",
    silver: "#C3C6C7",
    yellow: "#f9ce84",
  };

  return (
    <Box>
      <ComputerCard
        color="green"
        width={600}
        title="Custom Computer"
        description="This is a custom description for the computer."
        iframeSrc="https://necatimertmetin.github.io/temple-master/"
        buttonText1="Click Me"
        buttonText2="Learn More"
        buttonAction1={handleAction1}
        buttonAction2={handleAction2}
        isDarkMode={false} // Toggle this for dark mode
      />
    </Box>
  );
}

export default Computer;
