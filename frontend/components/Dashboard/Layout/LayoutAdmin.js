import React from 'react';
import SidebarAdmin from "../Sidebar/SidebarAdmin";
import RightSideAdmin from "../RightSide/RightSideAdmin";

const LayoutAdmin = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarAdmin />

                {children}


            <RightSideAdmin />

        </div>
    );
};

export default LayoutAdmin;
