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

const StadiumDetail = ({ data }: any) => {
    return (
        <PaperStyle elevation={10} sx={{ width: { xs: '85%', md: '500px' } }}>
            <TypographyHeading2Style>Thông tin sân bóng chi tiết</TypographyHeading2Style>
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
                label="Contact"
                name="contact"
                placeholder="Enter contact"
                variant="outlined"
                value={data.contact}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Location"
                name="location"
                placeholder="Enter location"
                variant="outlined"
                value={`${data.location.ward.name}, ${data.location.district.name}, ${data.location.province.name}`}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <TextFieldStyle
                label="Create At"
                name="createAt"
                placeholder="Enter createAt"
                variant="outlined"
                value={data.createAt}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <Box sx={{ display: 'flex' }}>
                <TextFieldStyle
                    label="Time open"
                    name="time_open"
                    placeholder="Enter time_open"
                    variant="outlined"
                    value={data.time_open}
                    fullWidth
                    required
                    focused
                    sx={{ mt: '15px' }}
                />
                <TextFieldStyle
                    label="Time clode"
                    name="time_clode"
                    placeholder="Enter time_clode"
                    variant="outlined"
                    value={data.time_close}
                    fullWidth
                    required
                    focused
                    sx={{ mt: '15px' }}
                />
            </Box>
            <TextFieldStyle
                label="Description"
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
                label="Rules"
                name="rules"
                placeholder="Enter rules"
                variant="outlined"
                value={data.rules}
                fullWidth
                required
                focused
                sx={{ mt: '15px' }}
            />
            <Box sx={{ mt: '15px' }}>
                <Typography>Main image</Typography>
                <ImageList cols={3}>
                    <ImageListItem key={data.avatar}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`${data.avatar}`} alt={'main images'} />
                    </ImageListItem>
                </ImageList>
            </Box>
            <Box sx={{ mt: '15px' }}>
                <Typography>Secondary images</Typography>
                <ImageList cols={3}>
                    {data.images.map((item: any) => (
                        <ImageListItem key={item}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`${item}`} alt={'secondary images'} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </PaperStyle>
    );
};

export default StadiumDetail;
