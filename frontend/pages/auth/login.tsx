import Link from 'next/link';
import Router from 'next/router';
import styled from '@emotion/styled';
import { ReactElement, useContext, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import authService from '../../services/authService';
import AlertCustom from '../../components/alert';
import { NextPageWithLayout } from '../_app';
import { AuthContext } from '../../store';
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
    const { dispatch } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        isShow: true,
        component: <></>,
    });
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await authService.login(data);
            setLoading(false);
            setAlert({
                isShow: true,
                component: <AlertCustom type="success" message="Login successfull" />,
            });
            setTimeout(() => {
                dispatch({ type: 'SET_USER', payload: { ...res.data.data, isLoginIn: true } });
                Router.push('/');
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
                    <h2>Sign In</h2>
                </Grid>
                <TextFieldStyle
                    label="Username"
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter email or phone number"
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
                <ButtonFormStyle type="submit" variant="contained" loading={loading} onClick={handleSubmit} fullWidth>
                    Sign in
                </ButtonFormStyle>
                <Typography sx={{ fontSize: '14px', color: '#1394DD' }}>
                    <Link href="/auth/forgot_password">Forgot password ?</Link>
                </Typography>
                <Typography sx={{ fontSize: '14px', color: '#1394DD' }}>
                    {' '}
                    <span style={{ color: 'black' }}>Do you have an account ?</span>
                    <Link href="/auth/signup">Sign Up</Link>
                </Typography>
            </PaperStyle>
        </>
    );
};
Login.getLayout = function getLayout(page: ReactElement) {
    return <HomeLayout>{page}</HomeLayout>;
};
export default Login;
