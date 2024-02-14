// packages
import { MdOutlineSpaceDashboard, MdOutlineAnalytics, MdOutlineAdd, MdOutlineBookmarkBorder, MdKeyboardArrowRight } from "react-icons/md";

// style
import './style.scss'
import { useState } from "react";



const Sidebar = () => {
    const [show, setShow] = useState(false);
    const pathName = location.pathname.split("/")[1];
    const handleMenu = () => {
        setShow(!show)
    }
    return (
        <div className="sidebar-container">
            <ul>
                <li className={`visible ${pathName === "dashboard" ? "active" : ""}`}>
                    <MdOutlineSpaceDashboard/>
                    Dashboard
                </li>
                <li className={`visible ${pathName === "analytics" ? "active" : ""}`} onClick={handleMenu}>
                    <MdOutlineAnalytics/>
                    Analytics
                    <MdKeyboardArrowRight style={{marginLeft: "auto"}}/>
                </li>
                <li className={`${show ? 'visible' : 'invisible'}`}>
                    <MdOutlineAdd/>
                    Add a Connection
                </li>
                <li className={`${show ? 'visible' : 'invisible'}`}>
                    <MdOutlineBookmarkBorder/>
                    Saved Connection
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;