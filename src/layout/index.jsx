// packages
import { Outlet } from "react-router-dom";
// components
import Sidebar from "../components/container/sidebar";
import Header from "../components/container/header";

// style
import './style.scss';

const Layout = () => {
    return (
        <>
            <div className="layout-container">
                <Sidebar />
                <div className="layout-content">
                    <Header/>
                    <div className="layout-body">
                    <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Layout;