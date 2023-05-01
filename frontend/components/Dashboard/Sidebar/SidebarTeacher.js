import React, {useMemo, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const SidebarTeacher = () => {
    const sidebar = [
        {
            id: 0,
            name: "Home",
            icon: <span className="material-icons-sharp">dashboard</span>,
            link: "/dashboard-teacher"
        },

        {
            id: 1,
            name: "Courses",
            icon: <span className="material-icons-sharp">receipt_long</span>,
            link: "/dashboard-teacher/courses"
        },

        {
            id: 2,
            name: "Students",
            icon: <span className="material-icons-sharp">person_outline</span>,
            link: "/dashboard-teacher/students"
        },

        {
            id: 3,
            name: "Attendance",
            icon: <span className="material-icons-sharp">emoji_people</span>,
            link: "/dashboard-teacher/attendance"
        },

        {
            id: 4,
            name: "Notice Board",
            icon: <span className="material-icons-sharp">mail_outline</span>,
            link: "/dashboard-teacher/notice-board"
        },

        {
            id: 5,
            name: "Results",
            icon: <span className="material-icons-sharp">inventory</span>,
            link: "/dashboard-teacher/results"
        },

        {
            id: 6,
            name: "Exam",
            icon: <span className="material-icons-sharp">grade</span>,
            link: "/dashboard-teacher/exam"
        },

        {
            id: 7,
            name: "Logout",
            icon: <span className="material-icons-sharp">logout</span>,
            link: "/dashboard-teacher/logout"
        },
    ];


    const router = useRouter();
    const activeMenu = useMemo(
        () => sidebar.find(menu => menu.link === router.pathname),
        [router.pathname]
    );

    const [toggleHamburger, setToggleHamburger] = useState(true);
    const [sidebarClick, setSidebarClick] = useState(sidebar);


    return (
        <div className={"container-dashboard"}>
            <aside className={` ${toggleHamburger ? "toggle animated" : "" } `}>

                <div className="top">
                    <div className="logo">
                        <h1>Teacher Dashboard</h1>
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
                onClick={ () => setToggleHamburger(!toggleHamburger) }
            >
                <span className="material-icons-sharp fs-1 ">menu</span>
            </div>
        </div>
    );
};

export default SidebarTeacher;
