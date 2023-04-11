import React from 'react';
import LayoutTeacher from "../../components/Dashboard/Layout/LayoutTeacher";

const Index = () => {
    return (
        <LayoutTeacher>

            {/*=============== Start of main ================= */}
            <main >
                <h1>Overview</h1>

                {/* ============ Start of insights ============== */}

                    <div className="insights">

                        {/*course completed*/}
                        <div className="course-completed">
                            <span className="material-icons-sharp">person_outline</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Students</h3>
                                    <h1>81</h1>
                                </div>

                                {/*<div className="progress">*/}
                                {/*    <svg>*/}
                                {/*        <circle cx={"38"} cy={"38"} r={"36"}></circle>*/}
                                {/*    </svg>*/}

                                {/*    <div className="number">*/}
                                {/*        <p>81%</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                        </div>

                        {/*course progress*/}
                        <div className="course-progress">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Your Courses</h3>
                                    <h1>3</h1>
                                </div>

                                {/*<div className="progress">*/}
                                {/*    <svg>*/}
                                {/*        <circle cx={"38"} cy={"38"} r={"36"}></circle>*/}
                                {/*    </svg>*/}

                                {/*    <div className="number">*/}
                                {/*        <p>68%</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                        </div>

                        {/*Certification*/}
                        <div className="certification">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Your Classes</h3>
                                    <h1>8</h1>
                                </div>

                                {/*<div className="progress">*/}
                                {/*    <svg>*/}
                                {/*        <circle cx={"38"} cy={"38"} r={"36"}></circle>*/}
                                {/*    </svg>*/}

                                {/*    <div className="number">*/}
                                {/*        <p>62%</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>

                        </div>

                    </div>

                {/*============ END of insights =================== */}



                {/* ============= start of Courses ================= */}
                    <div className="courses-table">
                    <h2>Courses</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Course Title</th>
                            <th>Lessons Completed</th>
                            <th>Duration</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Human Computer Interaction</td>
                            <td>18/40 (48%)</td>
                            <td>10h 13m 28s</td>

                            <td className="primary">Details</td>
                        </tr>

                        <tr>
                            <td>Project Management</td>
                            <td>7/35 (20%)</td>
                            <td>20h 30m 0s</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Software Engineering</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
                        </tr>

                        </tbody>
                    </table>

                    <a href="#">Show All</a>

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}



            {/*============= start of Right side*/}
            <div className="right">

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Teacher</b></p>
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
                    <h2>Notice Board</h2>

                </div>
                {/*============= end of Upcoming Events*/}


            </div>
            {/*============= End of left Side*/}




        </LayoutTeacher>
    );
};

export default Index;
