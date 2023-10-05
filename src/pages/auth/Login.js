import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Typography } from '@mui/material';
import React from 'react';
import AuthSocial from '../../sections/auth/AuthSocial';
import LoginForm from '../../sections/auth/LoginForm';

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant='h4'>Log into Chat.Ly</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant='body2'>Fresher on board ?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Join the digital parade!
          </Link>
        </Stack> 
        {/* login form */}
        <LoginForm />

        <Stack direction={"column"} spacing={2}>
          {/* Auth social */}
          <AuthSocial />
        </Stack>
        
      </Stack>
    </>
  );
}
export default Login;
