import React, {useMemo, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar = () => {
    const sidebar = [
        {
            id: 0,
            name: "Home",
            icon: <span className="material-icons-sharp">dashboard</span>,
            link: "/dashboard-student"
        },

        {
            id: 1,
            name: "My Class",
            icon: <span className="material-icons-sharp">person_outline</span>,
            link: "/dashboard-student/my-class"
        },

        {
            id: 2,
            name: "Courses",
            icon: <span className="material-icons-sharp">receipt_long</span>,
            link: "/dashboard-student/courses"
        },

        {
            id: 3,
            name: "Instructors",
            icon: <span className="material-icons-sharp">emoji_people</span>,
            link: "/dashboard-student/instructors"
        },

        {
            id: 4,
            name: "Messages",
            icon: <span className="material-icons-sharp">mail_outline</span>,
            link: "/dashboard-student/messages"
        },

        {
            id: 5,
            name: "Assignments",
            icon: <span className="material-icons-sharp">inventory</span>,
            link: "/dashboard-student/assignments"
        },

        {
            id: 6,
            name: "Reports",
            icon: <span className="material-icons-sharp">report_gmailerrorred</span>,
            link: "/dashboard-student/reports"
        },

        {
            id: 7,
            name: "Logout",
            icon: <span className="material-icons-sharp">logout</span>,
            link: "/dashboard-student/logout"
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
                        <h1>Student Dashboard</h1>
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

export default Sidebar;
