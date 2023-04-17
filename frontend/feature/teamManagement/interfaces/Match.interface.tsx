import { ITeam } from '.';
export interface IMatch {
    _id: string;
    address: string;
    stadium: string;
    type: string;
    start_time: string;
    duration: string;
    my_team: ITeam;
    your_team: ITeam;
}
