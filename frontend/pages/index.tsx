import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { Box, Divider, Grid, Paper, styled, Typography } from '@mui/material';

import type { NextPageWithLayout } from './_app';
import { HomeLayout } from '../feature/layouts';
import { StyleTabs, TabPanel } from '../components/tabs';
import { Searchbar } from '../feature/search';
import { Card } from '../feature/cart';
import PartTitle from '../components/parttitle';
import searchBG from '../public/searchBG.png';
import orderService from '../services/orderService';
import { AdvertisingCart } from '../feature/advertisingCart';
import serviceTips from '/public/serviceTips.png';
import { AdvertisingAboutUs } from '../feature/advertisingCart/advertisingCart';
import boySpoty from '../public/boySpoty.png';

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

const dataTabs = [
    {
        name: 'Sân bóng',
        id: 0,
    },
    {
        name: 'Sự kiện',
        id: 1,
    },
    {
        name: 'Team',
        id: 2,
    },
];

export const getStaticProps = async () => {
    const res = await axios.get('https://provinces.open-api.vn/api/p/');
    return {
        props: {
            provinces: res.data,
        },
    };
};

const PaperContainStyles = styled(Paper)(({ theme }) => ({
    backgroundImage: `url(${searchBG.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1276px 300px',
    marginTop: '20px',
    height: '300px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        backgroundSize: '1276px 500px',
        height: '500px',
    },
}));

const BoxContainStyles = styled(Box)({
    width: '90%',
    boxSizing: 'border-box',
    margin: 'auto',
});

const BoxSearchStyles = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const TypographySearchStyles = styled(Typography)(({ theme }) => ({
    fontSize: '40px',
    fontWeight: '600',
    color: theme.color.textLight,
    marginRight: '40px',
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const BoxTabsStyles = styled(Box)({
    width: '100%',
});

const BoxTabPanelStyles = styled(Box)({});

const Home: NextPageWithLayout = ({ provinces }: any) => {
    const [value, setValue] = useState(dataTabs[0].id);
    const [stdData, setStdData] = useState([]);
    const [topStds, setTopStds] = useState([]);

    useEffect(() => {
        const getStatTopOrder = async () => {
            const res = await orderService.statTopOrder();
            setTopStds(res.data.stds);
        };
        getStatTopOrder();
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container>
            <PaperContainStyles elevation={10}>
                <BoxContainStyles className="searchBox">
                    <BoxSearchStyles>
                        <TypographySearchStyles>FIND</TypographySearchStyles>
                        <BoxTabsStyles>
                            <StyleTabs dataTabs={dataTabs} value={value} handleChange={handleChange} />
                        </BoxTabsStyles>
                    </BoxSearchStyles>
                    <BoxTabPanelStyles>
                        <TabPanel value={value} index={dataTabs[0].id}>
                            <Searchbar provinces={provinces} setStdData={setStdData} />
                        </TabPanel>
                        <TabPanel value={value} index={dataTabs[1].id}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={dataTabs[2].id}>
                            Item Three
                        </TabPanel>
                    </BoxTabPanelStyles>
                </BoxContainStyles>
            </PaperContainStyles>
            <Box>
                <TabPanel value={value} index={dataTabs[0].id}>
                    {stdData.length !== 0 ? <PartTitle title={'Kết quả tìm kiếm'} /> : null}
                    <Grid container spacing={2}>
                        {stdData.map((value, key) => {
                            return (
                                <Grid item key={key} xs={12} sm={6} md={3}>
                                    <Card stdData={value} />
                                </Grid>
                            );
                        })}
                    </Grid>
                    <PartTitle title={'Top sân đặt nhiều nhất'} />
                    <Grid container spacing={2}>
                        {topStds.map((value, key) => {
                            return (
                                <Grid item key={key} xs={12} sm={6} md={3}>
                                    <Card stdData={value} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </TabPanel>
                {/* <PartTitle title={'Gợi ý'} />
                <PartTitle title={'Thường xuyên'} />
                <PartTitle title={'Top'} />
                <PartTitle title={'Vị trí của bạn'} /> */}
                {/* <Map /> */}
            </Box>
            <Grid container spacing={2}>
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

Home.getLayout = function getLayout(page: ReactElement) {
    return <HomeLayout>{page}</HomeLayout>;
};
export default Home;
// export default withAuth(Home);
