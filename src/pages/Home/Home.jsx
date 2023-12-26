import BottomNavbar from "../../SharedComponents/BottomNavbar";
import TopNavbar from "../../SharedComponents/TopNavbar";
import TopSettings from "../../SharedComponents/TopSettings";
import TopTags from "../../SharedComponents/TopTags";
import FlashSale from "../../components/Home/FlashSale";
import Header from "../../components/Home/Header";
import SuperDealAd from "../../components/SuperDealAd";

const Home = () => {
    
    return (
        <div>
            <TopSettings />
            <TopNavbar />
            <BottomNavbar />
            <TopTags />
            <Header />
            <FlashSale />
            <SuperDealAd />
        </div>
    );
};

export default Home;