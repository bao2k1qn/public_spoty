import { http } from '../utils/axios';
interface Order {
    total_cost: number;
    status: boolean;
    payment_method: string;
    bonus_points: string;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date;
    user: string;
    customer_program: Array<object>;
    service: Array<object>;
    stadium_areas: Array<object>;
}
class orderService {
    async createOrder(order: Order) {
        return await http.post(`/order/create`, order);
    }
    async scheduleDuringWeekbyDate(id: string, date: string) {
        return await http.get<string, any>(`/order/get_schedule_week_by_date?id=${id}&date=${date}`);
    }
    async getOrderByIds(ids: string[]) {
        return await http.get<any>(`/order/get_order_by_ids`, {
            params: {
                ids: ids.reduce((f, s) => `${f},${s}`),
            },
        });
    }
    async payment_byVisa(id: string) {
        return await http.get<any>(`/order/get_checkout_session?id=${id}`);
    }
    async updatePaymentSuccessful(order_id: string, user: string) {
        return await http.post<any>(`/order/update_payment_successful`, { order_id, user });
    }
    async getOrdersByArea(areaId: string) {
        return await http.get<any>(`/order/get_orders_by_area?area_id=${areaId}`);
    }
    async updateStatusPayment(orderId: string, data: any) {
        return await http.put<any>(`/order/update_status_payment/${orderId}`, data);
    }
    async deleteOrder(orderId: string) {
        return await http.delete<any>(`/order/delete_order/${orderId}`);
    }
    async statTopOrder() {
        return await http.get<any>(`/order/stat_top_order`);
    }
}

export default new orderService();
