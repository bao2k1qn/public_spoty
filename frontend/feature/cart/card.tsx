import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import { AuthContext } from '../../store';
import { useContext } from 'react';
import { ButtonStyle } from '../../components/button';
import Link from 'next/link';

import {
    BoxStyle,
    CardStyle,
    TypographyStyle,
    TypographyContentStyle,
    LocationOnIcon,
    PhoneEnabledIcon,
    SellIcon,
    Discount,
} from './card.styles';
export default function ImgMediaCard({ stdData }: { stdData: any }) {
    const { state } = useContext(AuthContext);
    console.log(stdData);
    return (
        <CardStyle>
            <CardMedia component="img" alt="green iguana" height="140" image={stdData.avatar} />
            <CardContent>
                <TypographyStyle gutterBottom variant="h5">
                    {stdData.name}
                </TypographyStyle>
                <Box>
                    <BoxStyle>
                        <LocationOnIcon />
                        <Box component="div">
                            <TypographyContentStyle
                                sx={{ height: '35px' }}
                            >{`${stdData.location.address}, ${stdData.location.ward.name}, ${stdData.location.district.name}, ${stdData.location.province.name}`}</TypographyContentStyle>
                        </Box>
                    </BoxStyle>
                    <BoxStyle>
                        <PhoneEnabledIcon />
                        <TypographyContentStyle>
                            {state.isLoginIn ? stdData.contact : 'Đăng nhập để xem số điện thoại'}
                        </TypographyContentStyle>
                    </BoxStyle>
                    {stdData.funds && (
                        <BoxStyle>
                            <SellIcon />
                            <Box component="div">
                                <TypographyContentStyle>
                                    <strong>{`${stdData.funds.min} - ${stdData.funds.max} (VND/h)`}</strong>
                                </TypographyContentStyle>
                            </Box>
                        </BoxStyle>
                    )}
                    <BoxStyle>
                        <Box component="div">
                            <TypographyContentStyle>
                                <strong>
                                    {stdData.areas?.reduce((prev: number, curr: any) => prev + curr.quantityOrders, 0)}
                                </strong>
                                <span> đã đặt</span>
                            </TypographyContentStyle>
                        </Box>
                    </BoxStyle>
                </Box>
            </CardContent>
            <CardActions sx={{ position: 'absolute', bottom: '0' }}>
                <ButtonStyle size="small" variant="contained">
                    Liên hệ zalo
                </ButtonStyle>
                <Link href={`/stadium?slug=${stdData.slug}`}>
                    <ButtonStyle size="small" variant="contained">
                        Xem chi tiết
                    </ButtonStyle>
                </Link>
            </CardActions>
            {stdData.promotions?.length !== 0 && <Discount>Sale</Discount>}
        </CardStyle>
    );
}
