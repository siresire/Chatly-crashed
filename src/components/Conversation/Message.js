import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data"
import { Timeline, MediaMsg, TextMsg, ReplyMsg, LinkMsg, DocMsg } from "./MsgTypes";

// redo part 7 time : 20 mins and beyond 
const Messages = (menu) => {
    return (
        <Box>
            <Stack spacing={3}>
                {Chat_History.map((el) => {
                    switch (el.type) {
                        case "divider":
                            // Timeline
                            return <Timeline el={el} />;

                        case "msg":
                            switch (el.subtype) {
                                case "img":
                                    // Image message
                                    return <MediaMsg el={el} menu = {menu} />;
                                case "doc":
                                    // Doc message
                                    return <DocMsg el={el} menu = {menu} />;

                                case "link":
                                    // Link message
                                    return <LinkMsg el={el} menu = {menu} />;

                                case "reply":
                                    // Reply message
                                    return <ReplyMsg el={el} menu = {menu} />;

                                default:
                                    // text msg
                                    return <TextMsg el={el} menu = {menu} />;
                            }

                        default:
                            return <></>;
                    }
                })}
            </Stack>
        </Box>
    );
};

export default Messages;

