import React from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";

const Index = () => {
    return (
        <LayoutStudent>


            {/*=============== Start of main ================= */}
            <main>
                <h1>Overview</h1>

                {/* ============= Start of Courses ================= */}
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
                            <td>English</td>
                            <td>18/40 (48%)</td>
                            <td>10h 13m 28s</td>

                            <Link href={"/dashboard-student/courses/english"} className="primary ">Details</Link>
                        </tr>

                        <tr>
                            <td>Maths</td>
                            <td>7/35 (20%)</td>
                            <td>20h 30m 0s</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
                        </tr>

                        <tr>
                            <td>Urdu</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
                        </tr>

                        <tr>
                            <td>History</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
                        </tr>

                        </tbody>
                    </table>

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



            </div>
            {/*============= End of left Side*/}


        </LayoutStudent>
    );
};

export default Index;
