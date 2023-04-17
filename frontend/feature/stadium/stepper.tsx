import moment from 'moment';
import { useState, useEffect, useContext, ReactNode, Fragment } from 'react';
import { Container, Box, Stepper, Step, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import DoneIcon from '@mui/icons-material/Done';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import Payment from './payment';
import BookStadiumArea from './bookStadiumArea';
import stadiumService from '../../services/stadiumService';
import { StyledStepLabel, TypographySubheadingStyle } from './styles';
import { StdContext } from '../../pages/stadium';
import { IArea } from './interfaces';

export interface IItem extends AppointmentModel {
    name: string;
    amount?: string;
    totalPrice?: string;
    note?: string;
    new?: boolean;
    stadium_area_ref?: string;
}

export interface ICartItem {
    [key: string]: IItem[];
}

const handleData = (data: any, quantity: number): IItem[] => {
    const result: IItem[] = [];
    data.map((value: any, index: any) => {
        value.schedule.forEach((v: any, i: any) => {
            result.push({
                id: i,
                startDate: moment(`${value.date} ${v.hour}:00`, 'DD-MM-YYYY HH:mm').toDate(),
                endDate: moment(`${value.date} ${v.hour + 1}:00`, 'DD-MM-YYYY HH:mm').toDate(),
                title: `Đã đặt ${v.count} / ${quantity}`,
                available: v.count === quantity ? '0' : '1',
                name: '',
            });
        });
    });
    return result;
};

const steps = ['Đặt sân', 'Thanh toán', 'Hoàn tất'];

const HorizontalLinearStepper = () => {
    const { state } = useContext(StdContext);

    const [activeStep, setActiveStep] = useState<number>(0);
    const [cartItems, setCartItems] = useState<ICartItem>({});
    const [initCartItem, setInitCartItem] = useState<boolean>(true);

    useEffect(() => {
        state.areas?.map((value: IArea) => {
            const fetchScheduleData = async () => {
                const resSchedule = await stadiumService.getStadiumSchedule(value._id);
                const result = handleData(resSchedule.data.data, value.quantity);
                setCartItems((prev) => ({ ...prev, [value.name]: result }));
            };
            fetchScheduleData();
        });
    }, [state.areas]);

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    const addToCart = (name: string, product: IItem) => {
        const updatedArray: IItem[] = [...cartItems[name], product];
        setCartItems({ ...cartItems, [name]: updatedArray });
        setInitCartItem(false);
    };

    const deleteItem = (product: IItem) => {
        const updatedArray: IItem[] = cartItems[product.name].filter((item: IItem) => item.id !== product.id);
        setCartItems((prev) => ({ ...prev, [product.name]: updatedArray }));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} sx={{ color: (theme) => theme.color.main }}>
                {steps.map((label: string) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StyledStepLabel {...labelProps}>{label}</StyledStepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep == 0 && (
                <Fragment>
                    <BookStadiumArea addToCart={addToCart} CartItem={cartItems} />
                </Fragment>
            )}
            {activeStep == 1 && (
                <Fragment>
                    <Payment CartItem={cartItems} deleteItem={deleteItem} handleNext={handleNext} />
                </Fragment>
            )}
            {activeStep == 2 && (
                <Fragment>
                    <Container sx={{ textAlign: 'center' }}>
                        <DoneIcon sx={{ fontSize: '70px', width: '100%', color: (theme) => theme.color.main }} />
                        <TypographySubheadingStyle>Thanh toán thành công</TypographySubheadingStyle>
                    </Container>
                </Fragment>
            )}
            {activeStep === steps.length ? (
                <Fragment>
                    <TypographySubheadingStyle>Hoàn tất các bước đặt sân</TypographySubheadingStyle>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Đặt lại</Button>
                    </Box>
                </Fragment>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'end', mt: '10px' }}>
                    <Button
                        color="inherit"
                        size="large"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        startIcon={<WestIcon />}
                    >
                        Quay lại
                    </Button>
                    <Button
                        size="large"
                        onClick={handleNext}
                        endIcon={<EastIcon />}
                        disabled={initCartItem || activeStep === 1}
                    >
                        {activeStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp theo'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};
export default HorizontalLinearStepper;
