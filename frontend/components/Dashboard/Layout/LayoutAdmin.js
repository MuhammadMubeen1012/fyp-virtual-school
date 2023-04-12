import React from 'react';
import SidebarAdmin from "../Sidebar/SidebarAdmin";

const LayoutAdmin = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarAdmin />

            <>
                {children}
            </>


        </div>
    );
};

export default LayoutAdmin;
