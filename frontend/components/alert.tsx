import { Alert, AlertColor, Snackbar } from '@mui/material';
import { useEffect } from 'react';

export interface AlertProps {
    type: AlertColor;
    message: string;
}

const AlertCustom = (props: AlertProps) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={true}
        >
            <Alert severity={props.type}>{props.message}</Alert>
        </Snackbar>
    );
};

export default AlertCustom;
