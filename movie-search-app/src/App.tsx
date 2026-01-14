import { Box } from "@mui/material";
import PersistentDrawerLeft from "./layout/DrawerLeft";
import AppRoutes from "./routes/AppRoutes";

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
        <AppRoutes/>
      </Box>
    </>
  );
}

export default App;
