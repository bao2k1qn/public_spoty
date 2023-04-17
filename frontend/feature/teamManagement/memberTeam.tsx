import React from 'react';
import {
    Modal,
    Menu,
    MenuItem,
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    IconButton,
    Avatar,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledTableRow, StyledTableCell } from './styles';
import { IUser } from './interfaces';
import MemberDelete from './memberDelete';

export function CustomizedTables({ id, rows }: { id: string; rows: IUser[] }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [rowCurr, setRowCurr] = React.useState<IUser>();
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const openMenu = Boolean(anchorEl);

    const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>, row: IUser) => {
        setAnchorEl(event.currentTarget);
        setRowCurr(row);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleDelete = (row: IUser) => {
        setOpenModal(true);
    };
    const handleDetail = (row: IUser) => {
        // setShowElement(true);
        // setDataDetail(row);
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Avatar</StyledTableCell>
                        <StyledTableCell>Tên</StyledTableCell>
                        <StyledTableCell>SĐT</StyledTableCell>
                        <StyledTableCell>Địa chỉ</StyledTableCell>
                        <StyledTableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row: IUser, index: number) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Avatar alt="Remy Sharp" src={row.photo} />
                                </StyledTableCell>
                                <StyledTableCell>{row.name}</StyledTableCell>
                                <StyledTableCell>{row.phone}</StyledTableCell>
                                <StyledTableCell>{row.address}</StyledTableCell>
                                <StyledTableCell>
                                    <IconButton
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClickMenu(e, row)}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    ) : (
                        <StyledTableRow>
                            <StyledTableCell>Chưa có thành viên nào trong đội.</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
                <MenuItem onClick={() => handleDetail(rowCurr as IUser)}>
                    <InfoIcon color="info" />
                    Xem chi tiết
                </MenuItem>
                <MenuItem onClick={() => null}>
                    <EditIcon color="success" />
                    Chỉnh sửa
                </MenuItem>
                <MenuItem onClick={() => handleDelete(rowCurr as IUser)}>
                    <DeleteIcon color="error" />
                    Xóa
                </MenuItem>
            </Menu>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>
                    <MemberDelete teamId={id} handleCloseModal={handleCloseModal} data={rowCurr as IUser} />
                </>
            </Modal>
        </TableContainer>
    );
}
