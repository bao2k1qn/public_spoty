import { Box, ImageList, ImageListItem, Paper, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import AlertCustom from '../../components/alert';
import { ButtonStyle, ButtonWhiteStyle } from '../../components/button';
import { TextFieldStyle } from '../../components/textField';
import { useAxios } from '../../hooks';
import stadiumService from '../../services/stadiumService';

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
const AreaDetail = (props: any) => {
    const { data, setDataArea } = props;
    const { resData, error, loading, setParams } = useAxios(stadiumService.updateArea);

    const [newData, setNewData] = useState({
        name: data.name,
        size: data.size,
        quantity: data.quantity,
        description: data.description,
        type: data.type,
        status: data.status,
        default_price: data.default_price,
        time_price: data.time_price,
    });

    useEffect(() => {
        if (resData) {
            setDataArea((pre: any) => {
                const newRows = pre.filter((e: any) => e._id !== resData.data.updated_area._id);
                newRows.push(resData.data.updated_area);
                return newRows;
            });
        }
    }, [resData, setDataArea]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewData({ ...newData, [e.target.name]: e.target.value });
    };

    const handleDynamicChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        let dataTemp = { ...newData };
        dataTemp['time_price'][index][event.target.name] = event.target.value;
        setNewData(dataTemp);
    };
    const handleAddField = () => {
        let newfield = { from: '', to: '', price: '' };

        setNewData({ ...newData, time_price: [...newData.time_price, newfield] });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setParams([data.stadium, data._id, newData]);
    };
    return (
        <PaperStyle elevation={10} sx={{ width: { xs: '85%', md: '500px' } }}>
            {resData ? <AlertCustom type="success" message="Update successfull" /> : null}
            {error ? <AlertCustom type="error" message={'something went wrong'} /> : null}
            <TypographyHeading2Style>Chỉnh sửa sân con</TypographyHeading2Style>
            <TextFieldStyle
                label="Name"
                name="name"
                placeholder="Enter email or phone number"
                value={newData.name}
                onChange={handleChange}
                fullWidth
                required
            />
            <TextFieldStyle
                label="Kích thước"
                name="size"
                placeholder="Enter size"
                variant="outlined"
                value={newData.size}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Số lương"
                name="quantity"
                placeholder="Enter quantity"
                variant="outlined"
                value={newData.quantity}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Mô tả"
                name="description"
                placeholder="Enter description"
                variant="outlined"
                value={newData.description}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Loại sân"
                name="type"
                placeholder="Enter type"
                variant="outlined"
                value={newData.type}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Giá mặt định"
                name="default_price"
                placeholder="Enter default_price"
                variant="outlined"
                value={newData.default_price}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: '15px' }}
            />
            {newData.time_price.map((tp: any, idx: number) => (
                <Box key={idx} sx={{ display: 'flex' }}>
                    <TextFieldStyle
                        label="Từ"
                        name="from"
                        placeholder="Enter from"
                        variant="outlined"
                        value={tp.from}
                        onChange={(e: any) => handleDynamicChange(idx, e)}
                        fullWidth
                        required
                        sx={{ mt: '15px' }}
                    />
                    <TextFieldStyle
                        label="Đến"
                        name="to"
                        placeholder="Enter to"
                        variant="outlined"
                        value={tp.to}
                        onChange={(e: any) => handleDynamicChange(idx, e)}
                        fullWidth
                        required
                        sx={{ mt: '15px' }}
                    />
                    <TextFieldStyle
                        label="Giá"
                        name="price"
                        placeholder="Enter price"
                        variant="outlined"
                        value={tp.price}
                        onChange={(e: any) => handleDynamicChange(idx, e)}
                        fullWidth
                        required
                        sx={{ mt: '15px' }}
                    />
                </Box>
            ))}
            <ButtonWhiteStyle variant="contained" size="small" sx={{ mt: '15px' }} onClick={handleAddField}>
                Thêm thời gian và giá
            </ButtonWhiteStyle>
            <ButtonStyle
                variant="contained"
                sx={{ mt: '15px' }}
                fullWidth
                onClick={(e: any) => handleSubmit(e)}
                type="submit"
                loading={loading}
            >
                Chỉnh sửa
            </ButtonStyle>
        </PaperStyle>
    );
};

export default AreaDetail;
