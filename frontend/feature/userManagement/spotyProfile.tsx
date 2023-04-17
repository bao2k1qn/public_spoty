import { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, OutlinedInput, Grid } from '@mui/material';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { ButtonStyle } from '../../components/button';
import { TypographyHeading2Style } from '../../components/typographyHeading';

import { GridStyles } from './styles';
import type { ISportProfile } from './interfaces';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SportProfile = () => {
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ISportProfile>({
        power: 0,
        physical: 0,
        speed: 0,
        skillfull: 0,
        reflex: 0,
        calm: 0,
    });
    const [role, setRole] = useState<string>('');
    const [dominantFoot, setDominantFoot] = useState<string>('');
    const [dataSportProfile, setDataSportProfile] = useState({
        labels: ['Sức mạnh', 'Thể lực', 'Tốc độ', 'Khéo léo', 'Phản xạ', 'Bình tĩnh'],
        datasets: [
            {
                label: 'Chỉ số cầu thủ',
                data: Object.values(data),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        setDataSportProfile({
            labels: ['Sức mạnh', 'Thể lực', 'Tốc độ', 'Khéo léo', 'Phản xạ', 'Bình tĩnh'],
            datasets: [
                {
                    label: 'Chỉ số cầu thủ',
                    data: Object.values(data),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        });
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: Number(e.target.value) });
    };

    const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setError('');
        setSuccess(false);
        setLoading(true);

        try {
            // Call API to update password
            // await updatePassword(currentPassword, newPassword);
            setSuccess(true);
        } catch (error) {
            setError('Password update failed. Please try again.');
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <>
            <TypographyHeading2Style>Hồ sơ thể thao</TypographyHeading2Style>
            <Grid container spacing={2}>
                <GridStyles item md={5}>
                    <Radar data={dataSportProfile} />
                </GridStyles>
                <Grid item md={7}>
                    <FormControl fullWidth margin="normal" variant="outlined">
                        <InputLabel htmlFor="current-role">Vị trí trên sân</InputLabel>
                        <OutlinedInput
                            id="current-role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            label="Vị trí trên sân"
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal" variant="outlined">
                        <InputLabel htmlFor="dominantFoot">Chân thuận</InputLabel>
                        <OutlinedInput
                            id="dominantFoot"
                            value={dominantFoot}
                            onChange={(e) => setDominantFoot(e.target.value)}
                            label="Chân thuận"
                        />
                    </FormControl>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" variant="outlined">
                                <InputLabel htmlFor="power">Sức mạnh</InputLabel>
                                <OutlinedInput
                                    id="power"
                                    name="power"
                                    value={data.power}
                                    onChange={handleChange}
                                    label="Sức mạnh"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" variant="outlined">
                                <InputLabel htmlFor="physical">Thể lực</InputLabel>
                                <OutlinedInput
                                    id="physical"
                                    name="physical"
                                    value={data.physical}
                                    onChange={handleChange}
                                    label="Thể lực"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" variant="outlined">
                                <InputLabel htmlFor="speed">Tốc độ</InputLabel>
                                <OutlinedInput
                                    id="speed"
                                    name="speed"
                                    value={data.speed}
                                    onChange={handleChange}
                                    label="Tốc độ"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" variant="outlined">
                                <InputLabel htmlFor="skillfull">Khéo léo</InputLabel>
                                <OutlinedInput
                                    id="skillfull"
                                    name="skillfull"
                                    value={data.skillfull}
                                    onChange={handleChange}
                                    label="Khéo léo"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" variant="outlined">
                                <InputLabel htmlFor="reflex">Phản xạ</InputLabel>
                                <OutlinedInput
                                    id="reflex"
                                    name="reflex"
                                    value={data.reflex}
                                    onChange={handleChange}
                                    label="Phản xạ"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth margin="normal" variant="outlined">
                                <InputLabel htmlFor="calm">Bình tĩnh</InputLabel>
                                <OutlinedInput
                                    id="calm"
                                    name="calm"
                                    value={data.calm}
                                    onChange={handleChange}
                                    label="Bình tĩnh"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <ButtonStyle variant="contained" fullWidth>
                        Thay đổi
                    </ButtonStyle>
                </Grid>
            </Grid>
        </>
    );
};

export { SportProfile };
