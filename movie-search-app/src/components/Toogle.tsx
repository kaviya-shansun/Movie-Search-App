import React from "react";
import { Switch, Box } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const Toggle = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? "dark" : "light");
  };

  return (
    <>
      <Box
        className="toggleDesign"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <div>Light</div>

        <Switch checked={mode === "dark"} onChange={handleChange} />

        <div>Dark</div>
      </Box>
    </>
  );
};

export default Toggle;
