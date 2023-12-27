import BottomNavbar from "../../SharedComponents/BottomNavbar";
import TopNavbar from "../../SharedComponents/TopNavbar";
import TopSettings from "../../SharedComponents/TopSettings";
import TopTags from "../../SharedComponents/TopTags";
import BestSellerAd from "../../components/BestSellerAd";
import BestSeller from "../../components/Home/BestSeller/BestSeller";
import BottomSections from "../../components/Home/BottomSections/BottomSections";
import BundleProducts from "../../components/Home/BundleProducts/BundleProducts";
import Electronics from "../../components/Home/Electronics/Electronics";
import FlashSale from "../../components/Home/FlashSale";
import Header from "../../components/Home/Header";
import HotBrands from "../../components/Home/HotBrands/HotBrands";
import YouAlsoLike from "../../components/Home/YouAlsoLike/YouAlsoLike";
import SuperDealAd from "../../components/SuperDealAd";


const Home = () => {
    
    return (
        <div className="mb-10">
            <TopTags />
            <Header />
            <FlashSale />
            <SuperDealAd />
            <BundleProducts />
            <BestSellerAd />
            <BottomSections />
            <YouAlsoLike />
            <HotBrands />
        </div>
    );
};

export default Home;