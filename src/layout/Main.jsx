import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footers from "../SharedComponents/Footers/Footers";
import TopSettings from "../SharedComponents/TopSettings";
import TopNavbar from "../SharedComponents/TopNavbar";
import BottomNavbar from "../SharedComponents/BottomNavbar";
const Main = () => {
  return (
    <div>
      <TopSettings />
      <TopNavbar />
      <BottomNavbar />
      <Outlet />
      <Footers />
    </div>
  );
};

export default Main;
