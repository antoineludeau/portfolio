import Box from "@mui/material/Box";

import { Loader } from "../atoms";

export const InitLoader = () => {
  return (
    <Box height="100vh" width="100%" alignItems="center" display="flex">
      <Loader />
    </Box>
  );
};
