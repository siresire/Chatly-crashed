import { Box, Stack } from "@mui/material"
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {

  return (
    <Stack direction="row"> 
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <Sidebar />
      <Outlet />
    </Box>
    </Stack>

  );

};

export default DashboardLayout;