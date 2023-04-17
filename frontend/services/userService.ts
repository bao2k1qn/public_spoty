import { http } from '../utils/axios';

class UserService {
    async changeUserInfo(data : any) {
        return await http.patch('/user/update_user', data);
    }
    async getUserByPhone(phone : string) {
        return await http.get<any>(`/user/get_user_by_phone/${phone}`);
    }
}
export default new UserService();
