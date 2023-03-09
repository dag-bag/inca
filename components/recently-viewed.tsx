/** @format */
import { atom, useRecoilValue } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
import Carousel from "./utils/Carosel";

export const recentlyViewedAtom = atom<any[]>({
    key: 'recently-viewed',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

function RecentlyViewed() {
    const recentlyItems = useRecoilValue(recentlyViewedAtom);
    return (
        <div className="mt-5">
            <Carousel products={recentlyItems} title="Recently Viewed Products" />
        </div>
    );
}

export default RecentlyViewed;
