import { createContext, ReactElement, useEffect, useState } from 'react';

import type { NextPageWithLayout } from '../_app';
import { SettingsLayout } from '../../feature/layouts';
import withAuth from '../../store/withAuth';
import { Banner, DiscountCard } from '../../feature/promotion';
import bannerBG from '../../public/promotionManagementBG.jpg';
import promotionService from '../../services/promotionService';
import { BoxContainStyles } from '../../feature/promotion/styles';

export const PromotionConext = createContext<{
    state: any;
    dispatch: React.Dispatch<React.SetStateAction<any>>;
}>({
    state: {},
    dispatch: () => null,
});

const User: NextPageWithLayout = () => {
    const [pros, setPros] = useState([]);
    useEffect(() => {
        const getPros = async () => {
            const resPros = await promotionService.getPromotionsOfOwn();
            setPros(resPros.data.data);
        };
        getPros();
    }, []);
    return (
        <PromotionConext.Provider value={{ state: pros, dispatch: setPros }}>
            <BoxContainStyles>
                <Banner title={''} imageBG={bannerBG} />
                {pros.map((e: any) => (
                    <DiscountCard key={e._id} data={e} />
                ))}
            </BoxContainStyles>
        </PromotionConext.Provider>
    );
};

User.getLayout = function getLayout(page: ReactElement) {
    return <SettingsLayout>{page}</SettingsLayout>;
};
export default withAuth(User);
