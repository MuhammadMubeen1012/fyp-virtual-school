import React from 'react';
import SidebarTeacher from "../Sidebar/SidebarTeacher";
import RightSideTeacher from "../RightSide/RightSideTeacher";

const LayoutTeacher = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarTeacher />


                {children}


            <RightSideTeacher />

        </div>
    );
};

export default LayoutTeacher;
