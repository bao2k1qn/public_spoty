import { Box, ImageList, ImageListItem, Paper, styled, Typography } from '@mui/material';
import { TextFieldStyle } from '../../components/textField';

const PaperStyle = styled(Paper)({
    padding: 20,
    margin: '20px auto',
    height: '500px',
    overflowY: 'scroll',
});

export const TypographyHeading2Style = styled(Typography)(({ theme, color }) => ({
    margin: '20px auto',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: theme.typography.h3.fontWeight,
    fontSize: 25,
    letterSpacing: '0.04em',
    color: theme.color.main,
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
}));
// name: { type: String, required: true },
// size: { type: String },
// quantity: { type: Number },
// description: { type: String },
// type: { type: String, required: true },
// status: { type: String },
// default_price: { type: Number },
// time_price: [
//     {
//         from: {
//             type: Number,
//             require: true,
//         },
//         to: {
//             type: Number,
//             require: true,
//         },
//         price: {
//             type: Number,
//             require: true,
//         },
//     },
// ],
// extra_infor: [
//     {
//         key: {
//             type: String,
//             require: true,
//         },
//         value: {
//             type: String,
//             require: true,
//         },
//     },
// ],
const AreaDetail = (props: any) => {
    const { data } = props;
    return (
        <PaperStyle elevation={10} sx={{ width: { xs: '85%', md: '500px' } }}>
            <TypographyHeading2Style>Thông tin sân con chi tiết</TypographyHeading2Style>
            <TextFieldStyle
                label="Name"
                name="Name"
                placeholder="Enter email or phone number"
                value={data.name}
                fullWidth
                required
                focused
            />
            <TextFieldStyle
                label="Kích thước"
                name="size"
                placeholder="Enter size"
                variant="outlined"
                value={data.size}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Số lượng"
                name="quantity"
                placeholder="Enter quantity"
                variant="outlined"
                value={data.quantity}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Mô tả"
                name="description"
                placeholder="Enter description"
                variant="outlined"
                value={data.description}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Loại sân"
                name="type"
                placeholder="Enter type"
                variant="outlined"
                value={data.type}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Giá mặt định"
                name="default_price"
                placeholder="Enter default_price"
                variant="outlined"
                value={data.default_price}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            {data.time_price.map((tp: any) => (
                <Box key={`${tp.from}${tp.from}${tp.price}`} sx={{ display: 'flex' }}>
                    <TextFieldStyle
                        label="Từ"
                        name="from"
                        placeholder="Enter from"
                        variant="outlined"
                        value={tp.from}
                        fullWidth
                        required
                        focused
                        sx={{ mt: '15px' }}
                    />
                    <TextFieldStyle
                        label="Đến"
                        name="to"
                        placeholder="Enter to"
                        variant="outlined"
                        value={tp.to}
                        fullWidth
                        required
                        focused
                        sx={{ mt: '15px' }}
                    />
                    <TextFieldStyle
                        label="Giá"
                        name="price"
                        placeholder="Enter price"
                        variant="outlined"
                        value={tp.price}
                        fullWidth
                        required
                        focused
                        sx={{ mt: '15px' }}
                    />
                </Box>
            ))}
            <TextFieldStyle
                label="Thời gian tạo"
                name="createAt"
                placeholder="Enter createAt"
                variant="outlined"
                value={data.createAt}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
        </PaperStyle>
    );
};

export default AreaDetail;
