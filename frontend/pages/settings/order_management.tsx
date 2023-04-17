import { ReactElement, useState } from 'react';

import type { NextPageWithLayout } from '../_app';
import { SettingsLayout } from '../../feature/layouts';
import withAuth from '../../store/withAuth';
import Banner from '../../components/banner';
import { BoxContainStyles } from '../../components/boxcontain';

import bannerBG from '../../public/orderBG1.jpg';
import { UserSchedule } from '../../feature/userScheduler';

const User: NextPageWithLayout = () => {
    const [areaCurr, setAreaCurr] = useState([
        {
            total_cost: 100,
            status: true,
            payment_method: 'Stribe',
            bonus_points: '20',
        },
    ]);
    const handleShowOrder = () => {};
    return (
        <BoxContainStyles>
            <Banner title={'Quản lý lịch đặt sân'} imageBG={bannerBG} />
            <UserSchedule area={areaCurr} handleShowOrder={handleShowOrder} />
        </BoxContainStyles>
    );
};

User.getLayout = function getLayout(page: ReactElement) {
    return <SettingsLayout>{page}</SettingsLayout>;
};
// export default User;
export default withAuth(User);
