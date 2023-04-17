import { Dispatch, SetStateAction, useState } from 'react';
import { Button, TextField } from '@mui/material';

import authService from '../../services/authService';
import AlertCustom from '../../components/alert';
import { PaperStyle, TypographyHeading1Style, TypographyHeading2Style } from './styles';

interface IVerify {
    state: any;
    setVerifyPayment: Dispatch<SetStateAction<boolean>>;
}

export const VerifyPayment = ({ state, setVerifyPayment }: IVerify) => {
    const [otp, setOtp] = useState<string>('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleOnSendOtp = async () => {
        setError(false);
        await authService.sendOTPbyPhone();
    };

    const handleOnSubmitPayment = async () => {
        try {
            const res = await authService.checkOTP(otp);
            setVerifyPayment(true);
            setSuccess(true);
            setError(false);
        } catch (err) {
            setError(true);
            setSuccess(false);
        }
    };
    return (
        <div>
            {error && <AlertCustom type="error" message={'Nhập sai mã OTP!'} />}
            {success && <AlertCustom type="success" message={'Xác nhận OTP thành công!'} />}

            <TypographyHeading1Style>Xác minh</TypographyHeading1Style>
            <TypographyHeading2Style>thông tin người đặt</TypographyHeading2Style>
            <PaperStyle>
                <TextField
                    id="name"
                    label="Tên"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ m: 1 }}
                    disabled
                    value={state.name}
                />
                <TextField
                    id="phone"
                    label="Số điện thoại"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ m: 1 }}
                    disabled
                    value={state.phone}
                />
                <TextField
                    id="otp"
                    label="Mã OTP"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ m: 1 }}
                    onChange={(e) => setOtp(e.target.value)}
                />
                <Button variant="contained" sx={{ m: 1 }} onClick={handleOnSubmitPayment}>
                    Xác nhận
                </Button>
                <Button variant="outlined" sx={{ m: 1 }} onClick={handleOnSendOtp}>
                    Gửi OTP
                </Button>
            </PaperStyle>
        </div>
    );
};
