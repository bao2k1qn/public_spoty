import React from 'react';
import moment from 'moment';
import { Autocomplete, FormControl, Grid, Modal, TextField } from '@mui/material';

import DateTimeInput from '../../components/dateTimeField';
import { ButtonStyle } from '../../components/button';
import { TypographyHeading2Style } from '../../components/typographyHeading';
import { PaperContainStyles } from './styles';

export function CreateForm() {
    // const { resData, error, loading, setParams } = useAxios(teamService.createMatch);
    const [data, setData] = React.useState({
        team: '',
        stadium: '',
        startDate: moment().format('YYYY-MM-DD HH:00'),
        endDate: moment().add(1, 'hours').format('YYYY-MM-DD HH:00'),
        contact: '',
        type: '',
        description: '',
    });
    const teamExist = [
        { _id: 1, name: 'Mancherter United' },
        { _id: 2, name: 'Mancherter City' },
        { _id: 3, name: 'Chealse' },
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleDateChange = (value: any, name: any) => {
        setData({ ...data, [name]: value.format('YYYY-MM-DD HH:00') });
    };
    const handleSubmit = () => {
        console.log(data);
    };
    return (
        <PaperContainStyles elevation={3}>
            <TypographyHeading2Style>Tạo trận đấu</TypographyHeading2Style>
            <FormControl fullWidth>
                <Autocomplete
                    id="team-picker"
                    value={data.team}
                    onChange={(event: any, newValue: any) => {
                        setData({ ...data, team: newValue });
                    }}
                    freeSolo
                    options={teamExist.map((team) => team.name)}
                    renderInput={(params) => <TextField {...params} label="Chọn đội" />}
                    sx={{ mb: 2 }}
                />

                <TextField
                    required
                    id="stadium-picker"
                    label="Chọn sân"
                    name="stadium"
                    value={data.stadium}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoComplete="Your stadium"
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12} mb={2}>
                        <DateTimeInput
                            date={data.startDate}
                            onChange={handleDateChange}
                            name={'startDate'}
                            label={'Bắt đầu'}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} mb={2}>
                        <DateTimeInput
                            date={data.endDate}
                            onChange={handleDateChange}
                            name={'endDate'}
                            label={'Kết thúc'}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <TextField
                            required
                            id="contact"
                            name="contact"
                            label="Liên hệ"
                            value={data.contact}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            autoComplete="Your contact"
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            required
                            id="type"
                            label="Đội hình"
                            name="type"
                            value={data.type}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            autoComplete="Your type"
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>
                <TextField
                    required
                    id="description"
                    label="Mô tả"
                    name="description"
                    value={data.description}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    autoComplete="Your description"
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                    sx={{ mb: 2 }}
                />
                <ButtonStyle variant="contained" onClick={handleSubmit}>
                    Tạo trận
                </ButtonStyle>
            </FormControl>
        </PaperContainStyles>
    );
}
const CreateMatch = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <ButtonStyle variant="contained" onClick={handleOpen}>
                Tạo trận
            </ButtonStyle>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-create-match"
                aria-describedby="modal-create-match-description"
            >
                <>
                    <CreateForm />
                </>
            </Modal>
        </>
    );
};
export default CreateMatch;
