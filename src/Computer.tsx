import { Box } from "@mui/material";
import { Mac } from "./mac/Mac";

function Computer() {
  return (
    <Box>
      <Mac color="blue" width={1200}>
        <iframe
          src={"https://necatimertmetin.github.io/radiosso/"}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </Mac>
    </Box>
  );
}

export default Computer;
