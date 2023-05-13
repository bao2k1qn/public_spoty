import { useState, useContext } from 'react';
import { Avatar, Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const ChangeAvatar = ({ data }: { data: string }) => {
    const [avatar, setAvatar] = useState<string>(data);
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = () => {
        setAvatar('');
    };
    const handleSubmit = async () => {};
    return (
        <>
            <Avatar sx={{ height: '100px', width: '100px', margin: '20px auto' }} src={avatar} onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-change-avatar-title"
                aria-describedby="modal-change-avatar-description"
            >
                <Box sx={style}>
                    <Typography id="modal-change-avatar-title" variant="h6" component="h2">
                        Cập nhật ảnh đại diện
                    </Typography>
                    <Box sx={{ p: 2, border: '2px dashed grey' }}>
                        <img src={avatar} height="100" />
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
