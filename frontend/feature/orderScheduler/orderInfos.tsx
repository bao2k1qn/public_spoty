import { Box, Paper, styled, Typography } from '@mui/material';
import { memo } from 'react';

const PaperStyle = styled(Paper)({
    padding: 20,
    margin: '30px auto',
});
const OrderInfos = ({ orderInfo }: any) => {
    return (
        <PaperStyle elevation={10} sx={{ width: { xs: '85%', md: '600px' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Thông tin người đặt sân</strong>
                <strong>Thông tin đơn đặt</strong>
            </Box>
            {orderInfo.map((order: any) => (
                <Box key={order._id} sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
                    <Box>
                        <Box>
                            <strong>Name: </strong>
                            {order.user.name}
                        </Box>
                        <Box>
                            <strong>Phone: </strong>
                            {order.user.phone}
                        </Box>
                        <Box>
                            <strong>Email: </strong>
                            {order.user.email}
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <strong>Total cost: </strong>
                            {order.total_cost}
                        </Box>
                        <Box>
                            <strong>Trạng thái: </strong>
                            {order.state ? 'Đã thanh toán' : 'Chưa thanh toán'}
                        </Box>
                        <Box>
                            <strong>Phương thức thanh toán: </strong>
                            {order.payment_method}
                        </Box>
                    </Box>
                </Box>
            ))}
        </PaperStyle>
    );
};

export default memo(OrderInfos);
