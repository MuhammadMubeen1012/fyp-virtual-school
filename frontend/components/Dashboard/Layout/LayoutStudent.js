import React from 'react';
import SidebarStudent from "../Sidebar/SidebarStudent";

const LayoutStudent = ({children}) => {
    return (
        <div className={"container-dashboard"}>

            <SidebarStudent />

            <>
                {children}
            </>


        </div>
    );
};

export default LayoutStudent;
