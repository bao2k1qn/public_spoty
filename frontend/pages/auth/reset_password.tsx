import Router, { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { ReactElement, useState } from 'react';
import { Grid, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import authService from '../../services/authService';
import AlertCustom from '../../components/alert';
import { NextPageWithLayout } from '../_app';
import { HomeLayout } from '../../feature/layouts';
import { TextFieldStyle } from '../../components/textField';
import { ButtonStyle } from '../../components/button';

const PaperStyle = styled(Paper)({
    padding: 20,
    margin: '20px auto',
});

const ButtonFormStyle = styled(ButtonStyle)({
    margin: '30px 0 20px 0',
    height: '40px',
});

const Login: NextPageWithLayout = () => {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        isShow: true,
        component: <></>,
    });
    const [data, setData] = useState({
        otp: '',
        password: '',
        passwordConfirm: '',
    });
    const route = useRouter();
    const username = route.query.username ? (route.query.username as string) : '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await authService.resetPassword({ ...data, username });
            setLoading(false);
            setAlert({
                isShow: true,
                component: <AlertCustom type="success" message="Reset successful" />,
            });
            setTimeout(() => {
                Router.push('/auth/login');
            }, 2000);
        } catch (error: any) {
            setLoading(false);
            setAlert({
                isShow: true,
                component: <AlertCustom type="error" message={error.message} />,
            });
        }
    };

    return (
        <>
            {alert.isShow && alert.component}
            <PaperStyle elevation={10} sx={{ width: { xs: '85%', md: '400px' } }}>
                <Grid alignItems={'center'}>
                    <h2>Reset password</h2>
                </Grid>
                <TextFieldStyle
                    label="OTP"
                    name="otp"
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextFieldStyle
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mt: '15px' }}
                />
                <TextFieldStyle
                    label="Password Confirm"
                    name="passwordConfirm"
                    onChange={handleChange}
                    placeholder="Enter password confirm"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mt: '15px' }}
                />
                <ButtonFormStyle type="submit" variant="contained" loading={loading} onClick={handleSubmit} fullWidth>
                    Submit
                </ButtonFormStyle>
            </PaperStyle>
        </>
    );
};
Login.getLayout = function getLayout(page: ReactElement) {
    return <HomeLayout>{page}</HomeLayout>;
};
export default Login;
