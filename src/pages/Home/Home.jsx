import BottomNavbar from "../../SharedComponents/BottomNavbar";
import TopNavbar from "../../SharedComponents/TopNavbar";
import TopSettings from "../../SharedComponents/TopSettings";
import TopTags from "../../SharedComponents/TopTags";

const Home = () => {
    return (
        <div>
            <TopSettings />
            <TopNavbar />
            <BottomNavbar />
            <TopTags />
        </div>
    );
};

export default Home;