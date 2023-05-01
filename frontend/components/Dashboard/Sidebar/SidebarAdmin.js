import React, {useMemo, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const SidebarAdmin = () => {

    const sidebar = [
        {
            id: 0,
            name: "Home",
            icon: <span className="material-icons-sharp">dashboard</span>,
            link: "/dashboard-admin"
        },

        {
            id: 1,
            name: "Students",
            icon: <span className="material-icons-sharp">receipt_long</span>,
            link: "/dashboard-admin/students"
        },

        {
            id: 2,
            name: "Teachers",
            icon: <span className="material-icons-sharp">person_outline</span>,
            link: "/dashboard-admin/teachers"
        },

        {
            id: 3,
            name: "Classes",
            icon: <span className="material-icons-sharp">emoji_people</span>,
            link: "/dashboard-admin/classes"
        },

        {
            id: 4,
            name: "Attendance",
            icon: <span className="material-icons-sharp">mail_outline</span>,
            link: "/dashboard-admin/attendance"
        },

        {
            id: 5,
            name: "Notice Board",
            icon: <span className="material-icons-sharp">inventory</span>,
            link: "/dashboard-admin/notice-board"
        },

        {
            id: 6,
            name: "Requests",
            icon: <span className="material-icons-sharp">grade</span>,
            link: "/dashboard-admin/requests"
        },


        {
            id: 8,
            name: "Logout",
            icon: <span className="material-icons-sharp">logout</span>,
            link: "/dashboard-admin/logout"
        },
    ];


    const router = useRouter();
    const activeMenu = useMemo(
        () => sidebar.find(menu => menu.link === router.pathname),
        [router.pathname]
    );

    const [toggleHamdburger, setToggleHamburger] = useState(true);
    const [sidebarClick, setSidebarClick] = useState(sidebar);


    return (
        <div className={"container-dashboard"}>
            <aside className={` ${toggleHamdburger ? "toggle animated  " : "" } `}>

                <div className="top">
                    <div className="logo">
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div className={`hamburger pt-0`} id={"close-btn"} onClick={ () => setToggle(!toggle) } >
                        <span className="material-icons-sharp fs-2 pt-3">close</span>
                    </div>
                </div>


                <div className="sidebar">

                    {
                        sidebar.map((item, index) => (

                            <Link
                                href={item.link}
                                key={index}
                            >
                                <a className={`link `}>
                                    <span className="material-icons-sharp">{item.icon}</span>
                                    <h3>{item.name}</h3>
                                </a>

                            </Link>

                        ))
                    }

                </div>


            </aside>

            <div
                className={`hamburger`}
                id={"close-btn"}
                onClick={ () => setToggleHamburger(!toggleHamdburger) }
            >
                <span className="material-icons-sharp fs-1 ">menu</span>
            </div>
        </div>
    );
};

export default SidebarAdmin;
