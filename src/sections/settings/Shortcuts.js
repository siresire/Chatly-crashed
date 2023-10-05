import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Stack, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children?: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
    {
        key: 0,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 1,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 2,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 3,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 4,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 5,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 6,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 7,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 8,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 9,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 10,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 11,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 12,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 13,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 14,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 15,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 16,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },
    {
        key: 17,
        title: "Mark as unread", // Add a comma here
        combination: ["Cmd", "Shift", "U"], // Add a comma here
    },



];

const Shortcuts = ({ open, handleClose }) => {
    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={open}
            onClose={handleClose}
            keepMounted
            TransitionComponent={Transition}
            sx={{ p: 4 }}
        >
            {/* Properly render the content inside the Dialog component */}
            <DialogTitle>Keyboard Shortcuts</DialogTitle>
            <DialogContent sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    {list.map(({ key, title, combination }) => (
                        // <Box key={key}>
                            <Grid key={key} container item xs={6}>
                                <Stack sx={{ width: '100%' }} justifyContent="space-between" spacing={3} direction="row" alignItems="center">
                                    <Typography variant="body1" sx={{ fontSize: 14 }}>
                                        {title}
                                    </Typography>
                                    <Stack spacing={2} direction={'row'}>

                                        {combination.map((el) => {
                                            return <Button disabled variant='contained' sx={{color: "#212121"}}>
                                                {el}
                                            </Button>
                                        })}

                                    </Stack>
                                </Stack>
                            </Grid>
                        // </Box>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>Okey</Button>
            </DialogActions>

        </Dialog>
    );
};

export default Shortcuts;
