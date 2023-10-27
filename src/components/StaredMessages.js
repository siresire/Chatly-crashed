import React from 'react';
import { Box, Stack, Typography, IconButton, Tab, Tabs, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft, CaretRight, X } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from '../data';
import { DocMsg, LinkMsg } from './Conversation/MsgTypes';
import Messages from './Conversation/Message';

const StaredMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    // const [value, setValue] = React.useState(0);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };


    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/* Header part */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                }}>
                    <Stack sx={{
                        height: "100%", p: 2
                    }}
                        direction="row"
                        alignItems={"center"}
                        // justifyContent="space-between" 
                        spacing={3}
                    >
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"))

                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">SHARED MESSAGES </Typography>

                    </Stack>
                </Box>

                {/* <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Link" />
                    <Tab label="Docs" />
                </Tabs> */}

                {/* rest of the body */}
                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflow: "scroll"
                    }}
                    p={3}
                    spacing={3}
                >
                    {/* {(() => {
                        switch (value) {
                            case 0:
                                // Images 
                                return (
                                <Grid container spacing={2}>
                                    {
                                        [0,1,2,3,4,5,6].map((el) => {
                                            return  <Grid item xs = {4}>
                                                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                                            </Grid>
                                        })
                                    }
                                </Grid>
                                );

                            case 1:
                                // Links 
                                return SHARED_LINKS.map((el) => <LinkMsg el={el}/>);
                            case 2:
                                // Shared Docs 
                                return SHARED_DOCS.map((el) => <DocMsg el={el}/>);
                                break;

                            default:
                                break;
                        }

                    })()} */}

                    < Messages />


                </Stack>
            </Stack>

        </Box>

    )

}

export default StaredMessages;