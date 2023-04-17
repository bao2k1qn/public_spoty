import { ReactElement } from 'react';
import { Container } from '@mui/system';
import { styled, Paper, Typography, Box, Grid } from '@mui/material';

import type { NextPageWithLayout } from './_app';
import { HomeLayout } from '../feature/layouts';
import { ButtonStyle } from '../components/button';
import { AdvertisingCart } from '../feature/advertisingCart';
import serviceTips from '/public/serviceTips.png';
import { AdvertisingAboutUs } from '../feature/advertisingCart/advertisingCart';
import girlSpoty from '../public/girlSpoty.png';
import boySpoty from '../public/boySpoty.png';

const PaperContainStyles = styled(Paper)({
    backgroundColor: '#bcd6cf',
    marginTop: '20px',
});

const TypographyStyles = styled(Typography)(({ theme }) => ({
    fontFamily: 'Nunito',
    fontWeight: '900',
    fontSize: '40px',
    lineHeight: '55px',
    letterSpacing: '5px',
    color: '#FFFFFF',
    width: '70%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        fontSize: '20px',
        lineHeight: '30px',
    },
}));

const BoxPaperStyles = styled(Box)({
    padding: '3% 5%',
});

const BoxContainStyles = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const PStyles = styled('p')(({ theme }) => ({
    color: 'black',
    width: '30%',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
}));

const SpanStyles = styled('span')(({ theme }) => ({
    color: theme.color.lightMain,
}));

const TypographyQuestionStyles = styled(Typography)(({ theme }) => ({
    fontFamily: 'Nunito',
    fontWeight: '900',
    fontSize: '40px',
    lineHeight: '55px',
    color: 'black',
    width: '100%',
    [theme.breakpoints.down('md')]: {},
}));

const BoxQAStyles = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: '30px',
}));

const PAnswerStyles = styled('p')(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    fontSize: '18px',
    fontFamily: 'Nunito',
    color: 'rgba(0,0,0,0.5)',
}));

const About: NextPageWithLayout = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <PaperContainStyles elevation={10}>
                        <BoxPaperStyles>
                            <TypographyStyles>
                                ABOUT <SpanStyles>SPOTY</SpanStyles> YOUR MONEY FOR TRAVEL THROUGH TRAVEL FUND
                            </TypographyStyles>
                            <BoxContainStyles>
                                <PStyles>
                                    Save your money for travel securely and explore the whole world with trasave, we
                                    provide you the best travel services.
                                </PStyles>
                                <Box>
                                    <ButtonStyle variant="contained">Contact us</ButtonStyle>
                                </Box>
                            </BoxContainStyles>
                        </BoxPaperStyles>
                    </PaperContainStyles>
                </Grid>
                <Grid item sm={12} md={12}>
                    <BoxQAStyles>
                        <TypographyQuestionStyles>
                            What <SpanStyles>Spoty</SpanStyles> have with you?
                        </TypographyQuestionStyles>
                        <PAnswerStyles>
                            Ambitious about your next adventure but sick of saving money? End up sneaking into those
                            savings because well.. You’re bored? Lost motivation? You don’t feel the funds are growing
                            fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for
                            your savings for travel
                        </PAnswerStyles>
                    </BoxQAStyles>
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdvertisingCart
                        content="Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng."
                        image={serviceTips}
                        title="Tìm kiếm và đặt sân"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdvertisingCart
                        content="Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng."
                        image={serviceTips}
                        title="Tìm kiếm và đặt sân"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdvertisingCart
                        content="Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng."
                        image={serviceTips}
                        title="Tìm kiếm và đặt sân"
                    />
                </Grid>
                <Grid item sm={12} md={12}>
                    <BoxQAStyles>
                        <TypographyQuestionStyles>
                            What <SpanStyles>Spoty</SpanStyles> have with you?
                        </TypographyQuestionStyles>
                        <PAnswerStyles>
                            Ambitious about your next adventure but sick of saving money? End up sneaking into those
                            savings because well.. You’re bored? Lost motivation? You don’t feel the funds are growing
                            fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for
                            your savings for travel
                        </PAnswerStyles>
                    </BoxQAStyles>
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdvertisingCart
                        content="Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng."
                        image={serviceTips}
                        title="Tìm kiếm và đặt sân"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdvertisingCart
                        content="Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng."
                        image={serviceTips}
                        title="Tìm kiếm và đặt sân"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <AdvertisingCart
                        content="Thông tin sân gần vị trí của bạn nhất, đặt sân online, tiện lợi, dễ dàng."
                        image={serviceTips}
                        title="Tìm kiếm và đặt sân"
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <AdvertisingAboutUs
                        image={girlSpoty}
                        title="What our client say"
                        content="Bạn là chủ sân? Bạn muốn quản lý sân của mình một cách thông minh. Bạn muốn quản lý các dịch vụ tiện ích tại sân. Spoty sẽ giúp bạn cải thiện hiệu suất quản lý, tăng doanh thu của sân bóng."
                        buttonName="Đăng kí chủ sân"
                        reverse={false}
                    />
                    <AdvertisingAboutUs
                        image={boySpoty}
                        title="Hợp tác với Spoty"
                        content="Bạn là chủ sân? Bạn muốn quản lý sân của mình một cách thông minh. Bạn muốn quản lý các dịch vụ tiện ích tại sân. Spoty sẽ giúp bạn cải thiện hiệu suất quản lý, tăng doanh thu của sân bóng"
                        buttonName="Đăng kí chủ sân"
                        reverse={true}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

About.getLayout = function getLayout(page: ReactElement) {
    return <HomeLayout>{page}</HomeLayout>;
};
export default About;
