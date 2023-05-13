import { http } from '../utils/axios';

class MatchService {
    async createMatch(data: any){
        return await http.post<any>(`/match/create_match`, data);
    }
    async getOwnMatch(){
        return await http.get<any>('/match/get_own_matchs');
    }
    async getUnassignMatch(){
        return await http.get<any>('/match/get_matchs_without_assign');
    }
    async acceptAssignMatch(id: string, data: any){
        return await http.get<any>(`/match/accept_assign_team/${id}`, data);
    }
}
export default new MatchService();