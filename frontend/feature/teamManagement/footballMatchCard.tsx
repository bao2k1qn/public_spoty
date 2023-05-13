import { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { TypographyHeading2Style } from '../../components/typographyHeading';
import { IMatch, ITeam } from './interfaces';
import { PaperStyles, Img } from './styles';
import moment from 'moment';
import LogoTeam from '../../public/logoTeam.jpg';
import matchService from '../../services/matchService';

export const Match = ({ data }: { data: IMatch }) => {
    const [show, setShow] = useState(false);
    const handleSubmit = async () => {
        const res = await matchService.acceptAssignMatch(data._id, data);
        if (res.data) {
        } else {
        }
    };
    return (
        <>
            <PaperStyles elevation={3}>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Img alt="my_team" src={(data.myTeam as ITeam).avatar} />
                        <TypographyHeading2Style sx={{ fontSize: 20 }}>
                            {(data.myTeam as ITeam).name}
                        </TypographyHeading2Style>
                    </Grid>
                    <Grid item md={6} m={'0 auto'}>
                        <TypographyHeading2Style>VS</TypographyHeading2Style>
                        <Typography variant="body2" gutterBottom>
                            <b> Địa chỉ:</b> {data.address}
                        </Typography>
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
                                    <b> Thời gian:</b> {moment(data.from).format('DD-MM-YYYY hh:mm')}
                                </Typography>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Typography variant="body2" gutterBottom>
                                    <b> Thời lượng: </b>
                                    {moment
                                        .duration(
                                            moment(data.to, 'YYYY/MM/DD HH:mm').diff(
                                                moment(data.from, 'YYYY/MM/DD HH:mm'),
                                            ),
                                        )
                                        .asHours()}{' '}
                                    giờ
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    {data.yourTeam ? (
                        <Grid item md={3}>
                            <Img alt="your_team" src={(data.yourTeam as ITeam).avatar} />
                            <TypographyHeading2Style sx={{ fontSize: 20 }}>
                                {(data.yourTeam as ITeam).name}
                            </TypographyHeading2Style>
                        </Grid>
                    ) : (
                        <>
                            <Grid item md={3}>
                                <Img alt="your_team" src={LogoTeam.src} />
                                <Button variant={'text'} onClick={() => setShow(!show)}>
                                    Hiển thị danh sách đội cap kèo
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </PaperStyles>
            {show && (
                <Grid container spacing={2}>
                    {data.teamQueue.length > 0 ? (
                        data.teamQueue.map((team: any) => (
                            <Grid item xs={4} md={2} key={team._id} sx={{ textAlign: 'center' }}>
                                <Img alt="your_team" src={team.avatar} />
                                {/* <TypographyHeading2Style sx={{ fontSize: 10 }}>{team.name}</TypographyHeading2Style> */}
                                <Button variant="text" onClick={handleSubmit}>
                                    Đồng ý
                                </Button>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body2" gutterBottom m={2}>
                            Chưa có đội nào cap kèo.
                        </Typography>
                    )}
                </Grid>
            )}
        </>
    );
};
