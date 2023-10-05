import React from "react";
import {
  Box,
  Badge,
  Stack,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  ArrowDownLeft,
  ArrowUpRight,
  VideoCamera,
  Phone,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import {faker} from "@faker-js/faker";
import StyledBadge from "./StyledBadge";


const StyledChatBox = styled(Box)(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
    },
  }));
  





const CallLogElement = ({ img, name, incoming, missed, online, id }) => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? "#fff" : theme.palette.background.appearance,
            }}
                p={2}
            >

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Stack spacing={2} direction={'row'} alignItems={"center"}>

                        {online ? (
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                            </StyledBadge>
                        ) : (

                            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        )}

                        <Stack spacing={0.3}>
                            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                            {/* <Typography variant="caption">{msg}</Typography> */}
                            <Stack spacing={1} alignItems="center" direction={"row"}>
                                {incoming ? (
                                    <ArrowDownLeft color={missed ? "red" : "green"} />
                                ) : (
                                    <ArrowUpRight color={missed ? "red" : "green"} />
                                )}
                                <Typography variant="caption">Yesterday 21:24</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <Phone />

                        <VideoCamera />
                    </Stack>



                </Stack>

            </Box>
        </>

    );
};

const CallElement = ({ img, name, id, handleClose }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
  

    return (<StyledChatBox
        sx={{
          width: "100%",
  
          borderRadius: 1,
  
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {" "}
            <Avatar alt={name} src={img} />
            <Stack spacing={0.3} alignItems="center" direction={"row"}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton
              onClick={() => {
                // dispatch(StartAudioCall(id));
                handleClose();
              }}
            >
              <Phone style={{ color: theme.palette.primary.main }} />
            </IconButton>
  
            <IconButton
              onClick={() => {
                // dispatch(StartVideoCall(id));
                handleClose();
              }}
            >
              <VideoCamera style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>
        </Stack>
      </StyledChatBox>
    );
  };
  
  export { CallLogElement, CallElement };