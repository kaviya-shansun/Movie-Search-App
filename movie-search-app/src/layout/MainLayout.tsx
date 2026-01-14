import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import DrawerLeft from "./DrawerLeft";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerLeft />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
