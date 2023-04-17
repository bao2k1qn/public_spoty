import * as React from 'react';
import moment from 'moment';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentTooltip,
    DateNavigator,
    Toolbar,
    AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

import orderService from '../../services/orderService';
import { ButtonStyle } from '../../components/button';
import { Box, Paper } from '@mui/material';

const formatToAppointmentsType = (orders: any, handleShowOrder: Function) => {
    const appointments = [] as any[];
    orders.forEach((order: any) => {
        const date = moment(order.date, 'DD-MM-YYYY');
        const schedules = order.schedule.map((sche: any) => {
            const startDate = date.clone().add(Number(sche.hour), 'hours').toDate();
            const endDate = date
                .clone()
                .add(Number(sche.hour) + 1, 'hours')
                .toDate();
            const ids = sche.have.map((has: any) => has._id);
            return {
                startDate,
                endDate,
                ids,
                count: sche.count,
                title: `Số lượng ${sche.count}`,
                handleShowOrder,
            };
        });
        appointments.push(...schedules);
    });
    return appointments;
};

const Content = ({ children, appointmentData, ...restProps }: any) => {
    return (
        <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
            <ButtonStyle
                variant="contained"
                fullWidth
                onClick={() => appointmentData.handleShowOrder(appointmentData.ids)}
            >
                Xem danh sách thông tin đặt sân
            </ButtonStyle>
        </AppointmentTooltip.Content>
    );
};

const BasicLayoutComponent = ({ onFieldChange, appointmentData, ...restProps }: AppointmentForm.BasicLayoutProps) => {
    const onCustomFieldChange = (nextValue: any) => {
        onFieldChange({ quantity: nextValue });
    };

    return (
        <AppointmentForm.BasicLayout
            appointmentData={appointmentData}
            onFieldChange={onFieldChange}
            {...restProps}
            textEditorComponent={() => {
                return null;
            }}
            booleanEditorComponent={() => {
                return null;
            }}
            labelComponent={() => {
                return null;
            }}
        >
            <Box>
                <AppointmentForm.Label text="Số lượng" type="titleLabel" />
                <AppointmentForm.TextEditor
                    type="titleTextEditor"
                    readOnly={false}
                    value={appointmentData.quantity}
                    onValueChange={onCustomFieldChange}
                    placeholder="Số lượng"
                />
            </Box>
        </AppointmentForm.BasicLayout>
    );
};

const UserSchedule = ({ area, handleShowOrder }: any) => {
    const [statesScheduler, setstatesScheduler] = React.useState({
        data: [] as any[],
        currentDate: new Date(Date.now()),
    });

    React.useEffect(() => {
        const getScheduleDuringWeekbyDate = async () => {
            const resSchedule = await orderService.scheduleDuringWeekbyDate(
                area,
                moment(statesScheduler.currentDate).toISOString(true),
            );
            const orders = resSchedule.data.data as any[];
            const appointments = formatToAppointmentsType(orders, handleShowOrder);
            setstatesScheduler((pre: any) => ({ ...pre, data: appointments }));
        };
        if (area) getScheduleDuringWeekbyDate();
        else setstatesScheduler((pre: any) => ({ ...pre, data: [] }));
    }, [area, handleShowOrder, statesScheduler.currentDate]);

    const currentDateChange = (currentDate: any) => setstatesScheduler({ ...statesScheduler, currentDate });

    return (
        <Paper>
            <Scheduler data={statesScheduler.data}>
                <ViewState currentDate={statesScheduler.currentDate} onCurrentDateChange={currentDateChange} />
                <WeekView startDayHour={6} endDayHour={23} cellDuration={60} />

                <Appointments />

                <AppointmentTooltip contentComponent={Content} showCloseButton />
                <Toolbar />
                <DateNavigator />
            </Scheduler>
        </Paper>
    );
};
export default React.memo(UserSchedule);
