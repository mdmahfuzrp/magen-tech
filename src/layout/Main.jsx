import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Main = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Main;