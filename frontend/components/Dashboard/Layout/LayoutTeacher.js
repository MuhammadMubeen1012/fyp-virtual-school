import React from 'react';
import SidebarTeacher from "../Sidebar/SidebarTeacher";

const LayoutTeacher = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarTeacher />

            <>
                {children}
            </>


        </div>
    );
};

export default LayoutTeacher;
