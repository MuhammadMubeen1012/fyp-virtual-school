import React from 'react';
import SidebarAdmin from "../Sidebar/SidebarAdmin";

const LayoutStudent = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarAdmin />

            <>
                {children}
            </>


        </div>
    );
};

export default LayoutStudent;
