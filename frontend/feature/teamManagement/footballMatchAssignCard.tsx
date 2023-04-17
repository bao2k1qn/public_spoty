import { useState } from 'react';
import { Box, Grid, Typography, Button, Popover, Autocomplete, TextField } from '@mui/material';
import { TypographyHeading2Style } from '../../components/typographyHeading';
import { PaperStyles, Img } from './styles';

export const AssignMatch = ({ data }: { data: any }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const teamExist = [
        { _id: 1, name: 'Mancherter United' },
        { _id: 2, name: 'Mancherter City' },
        { _id: 3, name: 'Chealse' },
    ];
    return (
        <>
            <PaperStyles elevation={3}>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Img alt="match" src={data.match.avatar} />
                        <TypographyHeading2Style sx={{ fontSize: 20 }}>{data.match.name}</TypographyHeading2Style>
                    </Grid>
                    <Grid item md={6} m={'0 auto'}>
                        <TypographyHeading2Style>VS</TypographyHeading2Style>
                        <Typography variant="body2" gutterBottom>
                            <b> Địa chỉ:</b> {data.address}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <b> Liên hệ:</b> {data.phone}
                        </Typography>
                        <Grid container>
                            <Grid item md={7} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    {/* <BusinessIcon /> */}
                                    <b> Độ tuổi:</b> {data.match.age}
                                </Typography>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    {/* <BusinessIcon /> */}
                                    <b> Trình độ:</b> {data.match.level}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={7} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    <b> Sân:</b> {data.stadium}
                                </Typography>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    <b> Loại sân:</b> {data.type}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={7} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    <b> Thời gian:</b> {data.start_time}
                                </Typography>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    <b> Thời lượng:</b> {data.duration}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        {/* <Img alt="your_team" src={data.your_team.avatar} /> */}
                        <Box
                            sx={{
                                display: 'inline-flex',
                                borderRadius: '50%',
                                bgcolor: '#D9D9D9',
                                p: 1,
                                height: '70%',
                                width: '100%',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="inherit"
                                sx={{ margin: 2 }}
                                aria-describedby={id}
                                onClick={handleClick}
                            >
                                Assign team
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                            >
                                <Box m={4} width={'500px'}>
                                    <Autocomplete
                                        id="your-team"
                                        value={data.team}
                                        onChange={(event, newValue) => {
                                            // setData({ ...data, team: newValue });
                                        }}
                                        freeSolo
                                        options={teamExist.map((team) => team.name)}
                                        renderInput={(params) => <TextField {...params} label="Chọn đội" />}
                                        fullWidth
                                    />
                                    <Typography variant="body2" color="text.secondary" my={2}>
                                        By continuing, you agree that we accept your team, and accept our Terms and
                                        Conditions and Privacy Policy.
                                    </Typography>
                                    <Button variant="contained" onClick={(event) => handleClose()}>
                                        Accept
                                    </Button>
                                </Box>
                            </Popover>
                        </Box>
                        <TypographyHeading2Style sx={{ fontSize: 20 }}>Your team</TypographyHeading2Style>
                    </Grid>
                </Grid>
            </PaperStyles>
        </>
    );
};
