import { Box } from "@mui/material";
import Header from "./components/Header";

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
        <Header />
      </Box>
    </>
  );
}

export default App;
