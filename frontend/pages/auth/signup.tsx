import Router from 'next/router';
import styled from '@emotion/styled';
import { ReactElement, useContext, useState } from 'react';
import { Grid, Paper } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

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
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await authService.signup(data);
            setLoading(false);
            setAlert({
                isShow: true,
                component: <AlertCustom type="success" message="Signup successfull" />,
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
                    <h2>Sign up</h2>
                </Grid>
                <TextFieldStyle
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter name"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextFieldStyle
                    label="Phone"
                    name="phone"
                    onChange={handleChange}
                    placeholder="Enter phone"
                    variant="outlined"
                    sx={{ mt: '15px' }}
                    fullWidth
                    required
                />
                <TextFieldStyle
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mt: '15px' }}
                />
                <TextFieldStyle
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter password (at least eight characters) "
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mt: '15px' }}
                />
                <TextFieldStyle
                    label="Password confirm"
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
                    Sign in
                </ButtonFormStyle>
            </PaperStyle>
        </>
    );
};
Login.getLayout = function getLayout(page: ReactElement) {
    return <HomeLayout>{page}</HomeLayout>;
};
export default Login;
