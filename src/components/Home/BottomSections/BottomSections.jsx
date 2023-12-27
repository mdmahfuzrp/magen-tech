import Electronics from "../Electronics/Electronics";
import Fashion from "../Fashion/Fashion";
import BannerAd from "../../../SharedComponents/BannerAd";
import HealthBeauty from "../HealthBeauty/HealthBeauty";

import Banner9 from '../../../assets/images/banner-9.jpg';
import Banner10 from '../../../assets/images/banner-10.jpg';
import Banner11 from '../../../assets/images/banner-11.jpg';

const BottomSections = () => {
    return (
        <div className="max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 gap-6 md:grid-cols-7">
            <div className="col-span-full md:col-span-5 bg-slate-200">
                <Electronics />
                <BannerAd img={Banner9} />
                <Fashion />
                <BannerAd img={Banner10} />
                <HealthBeauty />
                <BannerAd img={Banner11} />
            </div>

            <div className="col-span-full md:col-span-2 bg-slate-200">h2</div>
        </div>
    );
};

export default BottomSections;