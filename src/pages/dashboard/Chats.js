import { Box, IconButton, Stack, Typography, InputBase, Divider, Avatar, Badge } from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
  } from "../../components/Search";
import ChatElement from "../../components/ChatElement";


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

// const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
//     const theme = useTheme();

//     return (
//         <Box sx={{
//             width: "100%",
//             borderRadius: 1,
//             backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.appearance,
//         }}
//         p={2}
//         >
//             <Stack
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="space-between"
//             >
//                 <Stack direction="row" spacing={2}>
//                     {online ? (
//                         <StyledBadge
//                             overlap="circular"
//                             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//                             variant="dot"
//                         >
//                             <Avatar src={img} />
//                         </StyledBadge>
//                     ) : (
//                         <Avatar src={img} />
//                     )}

//                     <Stack spacing={0.3}>
//                         <Typography variant="subtitle2">{name}</Typography>
//                         <Typography variant="caption">{msg}</Typography>
//                     </Stack>
//                 </Stack>
//                 <Stack spacing={2} alignItems="center">
//                     <Typography sx={{ fontWeight: 600 }} variant="caption">
//                         {time}
//                     </Typography>
//                     <Badge color="primary" badgeContent={unread}>
//                     </Badge>
//                 </Stack>
//             </Stack>
//         </Box>
//     );
// };

// const search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: 20,
//     backgroundColor: alpha(theme.background.default, 1),
//     marginLeft: 0,
//     width: "100%",
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//     },
// }));

const Chats = () => {

    const theme = useTheme();
    return (
        <Box
        sx={{
            position: "relative",
            // height: "100%",
            width: 320,
            backgroundColor: theme.palette.mode === "light" ? "#f8FAFF" : theme.palette.background.appearance, 
            boxShadow: "0px 0px 2px rgba(0,0,0,.25)",
        }}
        
        >
            <Stack p={4} spacing={2} sx = {{height: "100vh"}}>
                <Stack 
                direction='row' 
                alignItems="center" 
                justifyContent="space-between">
                    <Typography variant="h4">
                        Chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>

                {/* search bar */}
                <Search>
                <Stack sx={{ width: "100%" }} direction="row" alignItems="center">
                <MagnifyingGlass color="#709CE6" />
                    <SearchIconWrapper>
                        
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="search ...." inputProps={{ "aria-label": "search" }} />
                </Stack>
                </Search>

                {/* Archived box */}
                <Stack spacing={1.5}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                        <ArchiveBox size={24} />
                        <button> Archived </button>
                    </Stack>
                    <Divider/>
                </Stack>
                <Stack spacing={2.4} direction="column" sx={{ flexGrow: 1, overflow: 'auto', height: "100%" }}>

                    <SimpleBarStyle timeout={500} clickOnTrack={false}>
                    <Stack spacing={2.4}>
                        <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                            Pinned chats
                        </Typography>
                        {ChatList.filter((el) => el.pinned).map((el) => {
                            return <ChatElement key={el.id} {...el} />
                        })}
                    </Stack>

                    <Stack spacing={2.4}>
                        <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                            All chats
                        </Typography>
                        {ChatList.filter((el) => !el.pinned).map((el) => {
                            return <ChatElement key={el.id} {...el} />
                        })}
                    </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Chats;
