import React, {useEffect, useMemo, useState} from 'react';
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

        // {
        //     id: 2,
        //     name: "Students",
        //     icon: <span className="material-icons-sharp">person_outline</span>,
        //     link: "/dashboard-teacher/students"
        // },

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
            link: "/dashboard-teacher/announcements"
        },

        {
            id: 5,
            name: "Results",
            icon: <span className="material-icons-sharp">inventory</span>,
            link: "/dashboard-teacher/result"
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
                        <h1>Teacher Dashboard</h1>
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

export default SidebarTeacher;
