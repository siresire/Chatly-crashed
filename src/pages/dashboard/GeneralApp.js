import React from "react";
import Chats from "./Chats";
import { Stack, Box, Typography } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux"
import SharedMessages from "../../components/SharedMessages";
import StaredMessages from "../../components/StaredMessages";
import NoChat from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar, chat_type, room_id } = useSelector((store) => store.app)

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chat section */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === 'light' ? "#f0f4fa" : theme.palette.background.default,
        }}
      >

        {room_id !== null && chat_type === "individual" ? <Conversation /> : 
         <Stack
         spacing={2}
         sx={{ height: "100%", width: "100%" }}
         alignItems="center"
         justifyContent={"center"}
       >
         <NoChat />
         <Typography variant="subtitle2">
           Select a conversation or start a{" "}
           <Link
             style={{
               color: theme.palette.primary.main,
               textDecoration: "none",
             }}
             to="/"
           >
             new one
           </Link>
         </Typography>
       </Stack>
        }
        {/* Conversation */}
        
      </Box>
      {/* Contact */}
      {sidebar.open && (() => {
        switch (sidebar.type) {

          case "CONTACT":
            return <Contact />;

          case "STARRED":
            return <StaredMessages />;

          case "SHARED":
            return <SharedMessages />;

          default:
            break;
        }

      })()}
      {/* <Contact /> */}
    </Stack>
  );
};

export default GeneralApp;