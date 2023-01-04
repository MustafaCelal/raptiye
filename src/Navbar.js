import React from 'react';
import {Button, Divider, Stack} from "@mui/material";
import {PushPinOutlined, StickyNote2Outlined} from "@mui/icons-material";

function Navbar() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
        >
            <Stack direction="row">
                <Button href="/" variant="outlined" startIcon={<PushPinOutlined/>}>
                    Pano
                </Button>
            </Stack>
            <Stack spacing={2} direction="row"
                   divider={<Divider color="white" orientation="vertical" flexItem/>}>
                <Button color="success" variant="outlined" startIcon={<StickyNote2Outlined/>}
                        size="large" href="/add">Kart Ekle</Button>
            </Stack>
        </Stack>);
}

export default Navbar;