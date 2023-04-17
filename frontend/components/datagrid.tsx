import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'timeframe',
        headerName: 'Thời gian',
        width: 100,
        sortable: false,
    },
    {
        field: 'monday',
        headerName: 'Thứ 2',
        width: 100,
        type: 'number',
    },
    {
        field: 'tuesday',
        headerName: 'Thứ 3',
        type: 'number',
        width: 100,
    },
    {
        field: 'wednesday',
        headerName: 'Thứ 4',
        type: 'number',
        width: 100,
    },
    {
        field: 'thursday',
        headerName: 'Thứ 5',
        type: 'number',
        width: 100,
    },
    {
        field: 'friday',
        headerName: 'Thứ 6',
        type: 'number',
        width: 100,
    },
    {
        field: 'saturday',
        headerName: 'Thứ 7',
        type: 'number',
        width: 100,
    },
    {
        field: 'sunday',
        headerName: 'Chủ nhật',
        type: 'number',
        width: 100,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo({ data }: any) {
    console.log(data);
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}
