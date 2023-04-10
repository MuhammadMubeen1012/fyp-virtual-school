import React from 'react';
import Sidebar from "./Sidebar";

const DashboardLayout = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <Sidebar />

            <>
                {children}
            </>


        </div>
    );
};

export default DashboardLayout;
