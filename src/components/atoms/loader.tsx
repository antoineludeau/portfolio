import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loader = () => {
  return (
    <Box display= "flex" justifyContent="center" width="100%">
      <CircularProgress />
    </Box>
  );
};
