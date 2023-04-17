import { Typography } from '@mui/material';
import PartTile from '../../components/parttitle';
import CreateMatch from './createMatch';
import { Match } from './footballMatchCard';
import { AssignMatch } from './footballMatchAssignCard';
import { IMatch } from './interfaces';
const FootballMatch = () => {
    const matches: IMatch[] = [
        {
            _id: '1',
            address: '133/23 Đinh Bộ Lĩnh, quận 1, TP.HCM',
            stadium: 'Sân Phú Thọ',
            type: 'Sân 5',
            start_time: '15h-23/12/2023',
            duration: '90ph',
            my_team: {
                name: 'Manchester United',
                avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdidTvjgPdvdjwtelmSx8kkV6mhHETmS18aQKb7f6vqEgIYKrf',
            },
            your_team: {
                name: 'Manchester City',
                avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/285px-Manchester_City_FC_logo.svg.png',
            },
        },
        {
            _id: '2',
            address: '133/23 Đinh Bộ Lĩnh, quận 1, TP.HCM',
            stadium: 'Sân Phú Thọ',
            type: 'Sân 5',
            start_time: '15h-23/12/2023',
            duration: '90ph',
            my_team: {
                name: 'Chelsea',
                avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
            },
            your_team: {
                name: 'Manchester City',
                avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/1d/Manchester_City_FC_logo.svg/285px-Manchester_City_FC_logo.svg.png',
            },
        },
    ];
    const suggestions = [
        {
            _id: 1,
            address: '133/23 Đinh Bộ Lĩnh, quận 1, TP.HCM',
            stadium: 'Sân Phú Thọ',
            type: 'Sân 5',
            start_time: '15h-23/12/2023',
            duration: '90ph',
            phone: '0123 456 789',
            match: {
                name: 'Chelsea',
                avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png',
                age: 'U18',
                level: 'Nghiệp dư',
            },
        },
    ];
    return (
        <>
            <CreateMatch />
            <PartTile title={'Danh sách kèo cáp'} />
            {matches.length > 0 ? (
                matches.map((match: IMatch) => <Match key={match._id} data={match} />)
            ) : (
                <Typography variant="body2" gutterBottom m={2}>
                    Chưa có kèo nào được thiết lập.
                </Typography>
            )}
            <PartTile title={'Gợi ý'} />
            {suggestions.length > 0 ? (
                suggestions.map((suggestion) => <AssignMatch key={suggestion._id} data={suggestion} />)
            ) : (
                <Typography variant="body2" gutterBottom m={2}>
                    Chưa có kèo phù hợp cho bạn.
                </Typography>
            )}
        </>
    );
};
export default FootballMatch;
