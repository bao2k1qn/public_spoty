import { useState, useContext } from 'react';
import { Container, Grid } from '@mui/material';

import { AuthContext } from '../../store';
import { ICartItem } from './stepper';
import { VerifyPayment } from './verifyPayment';
import { DataPaymentType } from './interfaces';
import { PaymentMethod } from './paymentMethod';
import { TotalBill } from './bill';

interface IPayment {
    CartItem: ICartItem;
    deleteItem: Function;
    handleNext: Function;
}

const Payment = ({ CartItem, deleteItem, handleNext }: IPayment) => {
    const { state } = useContext(AuthContext);

    const [verifyPayment, setVerifyPayment] = useState<boolean>(false);
    const [data, setData] = useState<DataPaymentType>({
        total_cost: '0',
        status: '0',
        payment_method: 'Stripe',
        stadium_areas: [],
    });
    const updateData = (name: any, value: any) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <Container sx={{ mt: '40px' }}>
            <Grid container spacing={10}>
                <Grid item md={5}>
                    <VerifyPayment state={state} setVerifyPayment={setVerifyPayment} />
                    <PaymentMethod
                        data={data}
                        updateData={updateData}
                        verifyPayment={verifyPayment}
                        handleNext={handleNext}
                    />
                </Grid>
                <Grid item md={7}>
                    <TotalBill data={data} CartItem={CartItem} deleteItem={deleteItem} updateData={updateData} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Payment;
