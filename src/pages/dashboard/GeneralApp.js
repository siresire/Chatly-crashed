import React from "react";
import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux"
import SharedMessages from "../../components/SharedMessages";
import StaredMessages from "../../components/StaredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app)

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
        {/* Conversation */}
        <Conversation />
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
