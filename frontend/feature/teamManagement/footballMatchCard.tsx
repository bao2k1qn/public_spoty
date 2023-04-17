import { Grid, Typography } from '@mui/material';
import { TypographyHeading2Style } from '../../components/typographyHeading';
import { IMatch } from './interfaces';
import { PaperStyles, Img } from './styles';
export const Match = ({ data }: { data: IMatch }) => {
    return (
        <>
            <PaperStyles elevation={3}>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Img alt="my_team" src={data.my_team.avatar} />
                        <TypographyHeading2Style sx={{ fontSize: 20 }}>{data.my_team.name}</TypographyHeading2Style>
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
                        <Img alt="your_team" src={data.your_team.avatar} />
                        <TypographyHeading2Style sx={{ fontSize: 20 }}>{data.your_team.name}</TypographyHeading2Style>
                    </Grid>
                </Grid>
            </PaperStyles>
        </>
    );
};
