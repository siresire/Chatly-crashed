import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Badge, IconButton, Stack, Typography,Divider, Box } from "@mui/material";
import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from "phosphor-react";
import { faker } from '@faker-js/faker';
import { ToggleSidebar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";
// import StyledBadge from "../StyledBadge";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const Header = () =>{

    const theme = useTheme();
    const dispatch = useDispatch();
    return(
       
        <Box p={3}
        sx={{
            // height: 100,
            with: "100vh",
            backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background.default,
            boxShadow: "0px 0px 2px rgba(0,0,0,.25)",
        }}
        >
            <Stack 
            alignItems={"center"} 
            direction="row" 
            justifyContent={"space-between"} 
            sx={{ width: "100%", height: "100%" }}
            >
             <Stack onClick= {() => {
                dispatch(ToggleSidebar());

             }} direction={"row"} spacing={2}>

                <Box>
                    <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ 
                        vertical: 'bottom', 
                        horizontal: 'right' 
                    }}
                    variant="dot"
                >
                        <Avatar  
                        alt = {faker.name.fullName()} 
                        src = {faker.image.avatar()}/>
                    </StyledBadge> 
                </Box>
                <Stack spacing={0.2}>
                        <Typography variant="subtile2"> {faker.name.fullName()}</Typography>
                        <Typography variant="catpion"> online </Typography>
                    </Stack>
             </Stack>
             <Stack direction={"row"} alignItems={'center'} spacing={3}>
                <IconButton>
                    <VideoCamera/>
                </IconButton>
                <IconButton>
                    <Phone/>
                </IconButton>
                <IconButton>
                    <MagnifyingGlass/>
                </IconButton>
                <Divider orientation="vertical" flexItem/>
                <IconButton>
                    <CaretDown/>
                </IconButton>

             </Stack>
            </Stack>
        </Box>


    )
}

export default Header