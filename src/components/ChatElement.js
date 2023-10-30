import React from "react";
import { Box, Badge, Stack, Avatar, Typography } from "@mui/material";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SelectConversation } from "../redux/slices/app";
import StyledBadge from "./StyledBadge";

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
        <Box
        onClick={() => {
            dispatch(SelectConversation({ chat_type: "individual", room_id: id }));
        }}
         sx={{
            width: "100%",
            borderRadius: 1,
            backgroundColor: theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.appearance,
        }}
            p={2}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack direction="row" spacing={2}>

                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={img} />
                        </StyledBadge>
                    ) : (
                        <Avatar src={img} />
                    )}


                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems="center">
                    <Typography sx={{ fontWeight: 600 }} variant="caption">
                        {time}
                    </Typography>
                    <Badge color="primary" badgeContent={unread}>
                    </Badge>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ChatElement;