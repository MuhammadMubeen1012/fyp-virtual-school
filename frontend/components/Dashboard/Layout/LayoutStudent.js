import React from 'react';
import SidebarStudent from "../Sidebar/SidebarStudent";
import RightSideStudent from "../RightSide/RightSideStudent";

const LayoutStudent = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarStudent />

                {children}

            <RightSideStudent />

        </div>
    );
};

export default LayoutStudent;
