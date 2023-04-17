import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ dataRows }: any) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Từ</TableCell>
                        <TableCell align="right">Đến</TableCell>
                        <TableCell align="right">Thứ 2</TableCell>
                        <TableCell align="right">Thứ 3</TableCell>
                        <TableCell align="right">Thứ 4</TableCell>
                        <TableCell align="right">Thứ 5</TableCell>
                        <TableCell align="right">Thứ 6</TableCell>
                        <TableCell align="right">Thứ 7</TableCell>
                        <TableCell align="right">Chủ nhật</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRows.map((row: any, index: any) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.from}
                            </TableCell>
                            <TableCell align="right">{row.to}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
