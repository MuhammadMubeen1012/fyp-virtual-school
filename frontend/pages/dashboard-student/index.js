import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import SidebarStudent from "../../components/Dashboard/Sidebar/SidebarStudent";
import LayoutStudent from "../../components/Dashboard/Layout/LayoutStudent";
import axios from "axios";
import Cookies from "js-cookie";
import {set} from "@cloudinary/url-gen/actions/variable";

const Index = () => {

    const [userIdFromLocalStorage, setUserIdFromLocalStorage] = useState("");



    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:7000/api/v1/academicYear/classrooms/6433b54f4f2a795f64ae7ce7', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `${Cookies.get('token')}`
                }
            })
            const data = await res.data.classrooms;
            console.log(data);


            const userId = JSON.parse(localStorage.getItem("user"))
            console.log(userId._id);

            // const check = data.classrooms.map((item, idx) => {
            //     if (item._id === userId){
            //         return item;
            //     }
            //     return null;
            // })

            // console.log(check);



        } catch (e) {
            console.log(e, "error");
        }

    }


    useLayoutEffect(() => {
        fetchData();

    }, []);




    return (
        <>
            <LayoutStudent>

                {/*=============== Start of main ================= */}
                <main>
                    <h1>Overview</h1>

                    {/*========= Start of insights*/}
                    <div className="insights">

                        {/*course completed*/}
                        <div className="course-completed">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Course Completed</h3>
                                    <h1>81</h1>
                                </div>

                                <div className="progress">
                                    <svg>
                                        <circle cx={"38"} cy={"38"} r={"36"}></circle>
                                    </svg>

                                    <div className="number">
                                        <p>81%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*course progress*/}
                        <div className="course-progress">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Courses In Progress</h3>
                                    <h1>68</h1>
                                </div>

                                <div className="progress">
                                    <svg>
                                        <circle cx={"38"} cy={"38"} r={"36"}></circle>
                                    </svg>

                                    <div className="number">
                                        <p>68%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*Certification*/}
                        <div className="certification">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Certification Earned</h3>
                                    <h1>62</h1>
                                </div>

                                <div className="progress">
                                    <svg>
                                        <circle cx={"38"} cy={"38"} r={"36"}></circle>
                                    </svg>

                                    <div className="number">
                                        <p>62%</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    {/*======== end of Insights */}


                    {/*============= start of Courses ====== */}
                    <div className="courses-table">
                        <h2>Courses</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Lessons Completed</th>
                                    <th>Duration</th>
                                    <th>Instructor</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>UX Design Certificate</td>
                                    <td>18/40 (48%)</td>
                                    <td>10h 13m 28s</td>
                                    <td>Dr. Ahsan</td>
                                    <td className="primary">Details</td>
                                </tr>

                                <tr>
                                    <td>SEO Experts from Zero</td>
                                    <td>21/23 (97%)</td>
                                    <td>8hr 15m 10s</td>
                                    <td>Dr. Ahmed</td>
                                    <td className="primary">Details</td>
                                </tr>
                                <tr>
                                    <td>Project Management</td>
                                    <td>7/35 (20%)</td>
                                    <td>20h 30m 0s</td>
                                    <td>Dr. Ghulam</td>
                                    <td className="primary">Details</td>
                                </tr>
                                <tr>
                                    <td>Software Engineering</td>
                                    <td>21/23 (97%)</td>
                                    <td>15hr 10m 0s</td>
                                    <td>Dr. Ajmal</td>
                                    <td className="primary">Details</td>
                                </tr>

                            </tbody>
                        </table>

                        <a href="#">Show All</a>

                    </div>
                    {/*End of Courses */}

                </main>
                {/*=============== End Of Main  ==================*/}



                {/*============= start of Right side*/}
                <div className="right">

                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Student</b></p>
                        </div>

                        <div className="profile-photo">

                        </div>
                    </div>


                    {/*start of recent Updates*/}
                    <div className="recent-updates">
                        <h2>Upcoming Activities</h2>
                        <div className="updates">


                            <div className="update">
                                <div className="profile-photo">
                                    <h3>- UX</h3>
                                </div>

                                <div className="message">
                                    <p>
                                        Assignment due 20 March
                                    </p>
                                    <small className="text-muted">2 Minutes Ago</small>
                                </div>
                            </div>


                            <div className="update">
                                <div className="profile-photo">
                                    <h3>- SEO</h3>
                                </div>

                                <div className="message">
                                    <p>
                                        Assignment due 21 March
                                    </p>
                                    <small className="text-muted">2 Minutes Ago</small>
                                </div>
                            </div>



                            <div className="update">
                                <div className="profile-photo">
                                    <h3>- SE</h3>
                                </div>

                                <div className="message">
                                    <p>
                                        Assignment due 25 March
                                    </p>
                                    <small className="text-muted">2 Minutes Ago</small>
                                </div>
                            </div>



                        </div>
                    </div>
                    {/*end of recent updates*/}


                    {/*============= start of Upcoming Events*/}
                    <div className="upcoming-events">
                        <h2>Upcoming Events</h2>
                        <div className="item online">
                            <div className="icon">
                                <span className="material-icons-sharp">receipt_long</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Topic: Gestalt Design</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>

                            </div>
                        </div>



                        <div className="item offline">
                            <div className="icon">
                                <span className="material-icons-sharp">local_mall</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Topic: Digital Marketing</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>


                            </div>
                        </div>

                    </div>
                    {/*============= end of Upcoming Events*/}


                </div>
                {/*============= End of left Side*/}




            </LayoutStudent>


        </>
    );
};

export default Index;
