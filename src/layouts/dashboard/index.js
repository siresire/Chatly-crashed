
import { Box, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const isAuthenticated = true;

const DashboardLayout = () => {

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

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