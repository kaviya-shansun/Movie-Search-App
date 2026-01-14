import { Box } from "@mui/material";
import PersistentDrawerLeft from "./layout/DrawerLeft";

function App() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {/* <Header /> */}
        <PersistentDrawerLeft />
      </Box>
    </>
  );
}

export default App;
