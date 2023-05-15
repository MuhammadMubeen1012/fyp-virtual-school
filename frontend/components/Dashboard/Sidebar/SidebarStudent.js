import React, {useEffect, useMemo, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const SidebarStudent = () => {
    const sidebar = [
        {
            id: 0,
            name: "Home",
            icon: <span className="material-icons-sharp">dashboard</span>,
            link: "/dashboard-student"
        },

        {
            id: 1,
            name: "Courses",
            icon: <span className="material-icons-sharp">receipt_long</span>,
            link: "/dashboard-student/courses"
        },

        {
            id: 2,
            name: "Attendance",
            icon: <span className="material-icons-sharp">person_outline</span>,
            link: "/dashboard-student/attendance"
        },

        // {
        //     id: 3,
        //     name: "Instructors",
        //     icon: <span className="material-icons-sharp">emoji_people</span>,
        //     link: "/dashboard-student/instructors"
        // },

        {
            id: 4,
            name: "Announcements",
            icon: <span className="material-icons-sharp">mail_outline</span>,
            link: "/dashboard-student/announcements"
        },

        {
            id: 5,
            name: "Exams",
            icon: <span className="material-icons-sharp">inventory</span>,
            link: "/dashboard-student/exams"
        },

        {
            id: 6,
            name: "Results",
            icon: <span className="material-icons-sharp">grade</span>,
            link: "/dashboard-student/results"
        },

        {
            id: 7,
            name: "Logout",
            icon: <span className="material-icons-sharp">logout</span>,
            link: "/dashboard-student/logout"
        },
    ];

    const [activeMenu, setActiveMenu] = useState();

    const router = useRouter();
    const activePath = useMemo(
        () => sidebar.find(menu => {
            // console.log(router.pathname.split('/'))
            if(router.pathname.split(('/')).length ===2)
                return true;
            else
                return  menu.link === `/${router.pathname.split('/')[1]}/${router.pathname.split('/')[2]}`
        }),
        [router.pathname]
    );

    useEffect(() => {

    }, [activeMenu]);




    const [toggleHamburger, setToggleHamburger] = useState(true);



    return (
        <div className={"container-dashboard"}>
            <aside className={` ${toggleHamburger ? "toggle animated" : "" } `}>

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
                            <div className={"wrap-a"}
                                 onClick={() => {
                                     setActiveMenu(index)
                                 }}
                            >
                                <Link
                                    href={item.link}
                                    key={index}
                                >
                                    {/*${sidebar.link === item.link.includes(`${sidebar.link}}`) ? "active" : "" }*/}
                                    {/*${item.id === activeMenu ? "active" : ""}*/}
                                    <a
                                        className={`link  ${ activePath.link === item.link ? "active" : ""} `}
                                    >

                                        <span className="material-icons-sharp">{item.icon}</span>
                                        <h3>{item.name}</h3>


                                    </a>

                                </Link>
                            </div>


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

export default SidebarStudent;
