
import { Box, Stack } from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// const isAuthenticated = false;

const DashboardLayout = () => {

  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
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