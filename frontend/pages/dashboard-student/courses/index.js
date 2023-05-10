import React, {useState} from 'react';
import Link from "next/link";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";

const Index = () => {

    const [course, setCourse] = useState("english");

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
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>English</td>
                            <td>3</td>
                            <Link href={`/dashboard-student/courses/${course}`} className="primary ">Details</Link>
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
