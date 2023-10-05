import {
    Box, Stack, Typography, IconButton, Avatar, Divider, Button, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions, Slide
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const BlockDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Block this sucker"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    are you sure you want to block this fuck
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}


const DeleteDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Block this sucker"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    are you sure you want to block this fuck
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}

const Contact = () => {
    const theme = useTheme();

    const dispatch = useDispatch();

    const [openBlock, setOpenBlock] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleCloseBlock = () => {
        setOpenBlock(false);
    }

    const handleCloseDelete = () => {
        setOpenDelete(false);
    }


    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/* Header  */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                }}>
                    <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems={"center"} justifyContent="space-between" spacing={3}>
                        <Typography variant="subtitle2">Contact info </Typography>
                        <IconButton onClick={() => {
                            dispatch(ToggleSidebar())

                        }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>
                {/* rest of the body */}
                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflow: "scroll" }} p={3} spacing={3}>
                    <Stack alignItems={"center"} direction="row" spacing={2}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
                        <Stack spacing={0.5}>
                            <Typography variant="article" fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant="body3" fontWeight={500}>
                                {"+254759986335"}
                            </Typography>
                        </Stack>

                    </Stack>
                    <Stack direction={"row"}
                        alignItems={"center"}
                        justifyContent="space-evenly">
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant="overline" fontWeight={500}> Voice </Typography>
                        </Stack>
                        <Stack spacing={1} alignItems={"center"}>
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant="overline" fontWeight={500}> Video </Typography>
                        </Stack>

                    </Stack>
                    <Divider orientation="horizontal" flexItem />
                    <Stack spacing={0.5}>
                        <Typography variant="article">  Notes </Typography>
                        <Typography variant="body2"> Work like a moth </Typography>
                    </Stack>
                    <Divider orientation="horizontal" flexItem />
                    <Stack direction={'row'} alignItems={'center'} justifyContent={"space-between"}>
                        <Typography variant="subtitle2">  Media,Link & Docs </Typography>
                        <Button onClick={() => {
                            dispatch(updateSidebarType("SHARED"));
                        }}
                            endIcon={<CaretRight />}>
                            402
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        {[1, 2, 3].map((el) => (
                            <Box key={el}>
                                <img src={faker.image.food()} alt={faker.name.fullName()} />
                            </Box>
                        ))}
                    </Stack>
                    <Divider orientation="horizontal" flexItem />
                    <Stack direction={"row"} alignItems={"center"} justifyContent="space-between">
                        <Stack direction={"row"} alignItems={"center"} spacing={2}>
                            <Star />
                            <Typography variant="subtitle2">
                                Stared messages
                            </Typography>
                        </Stack>
                        <IconButton onClick={() => {
                            dispatch(updateSidebarType("STARRED"));
                        }}>
                            <CaretRight />
                        </IconButton>
                    </Stack>
                    <Divider orientation="horizontal" flexItem />
                    <Stack direction={"row"} alignItems={"center"} justifyContent="space-between">
                        <Stack direction={"row"} alignItems={"center"} spacing={2}>
                            <Bell />
                            <Typography variant="subtitle2">
                                Mute notifications
                            </Typography>
                        </Stack>
                        <AntSwitch />
                    </Stack>
                    <Divider orientation="horizontal" flexItem />
                    <Typography> 1 group in comon</Typography>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
                        <Stack spacing={0.5}>
                            <Typography variant="subtitle2"> Coding Monk</Typography>
                            <Typography variant="caption"> Sire,Nesh,Rabit,Nitish,You</Typography>

                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button onClick={() => {
                            setOpenBlock(true);
                        }} startIcon={<Prohibit />} fullWidth variant="outlined">
                            Block
                        </Button>
                        <Button onClick={() => {
                            setOpenDelete(true);
                        }} startIcon={<Trash />} fullWidth variant="outlined">
                            Delete
                        </Button>
                    </Stack>


                </Stack>

            </Stack>
            {openBlock &&  <BlockDialog open={openBlock} handleClose={handleCloseBlock} /> }
            {openDelete &&  <DeleteDialog open={openDelete} handleClose={handleCloseDelete} /> }
        </Box>

    )
}

export default Contact;
