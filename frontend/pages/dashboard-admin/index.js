import React, {useEffect} from 'react';
import LayoutAdmin from "../../components/Dashboard/Layout/LayoutAdmin";
import Link from "next/link";
import {getClassroomsByAcademicYear} from "./DashboardController";

const DashboardAdmin = () => {

    const [classrooms, setClassrooms] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (classrooms.length === 0) {
            getClassroomsByAcademicYear().then(r => setClassrooms(r));
        }
    }, []);
    useEffect(() => {
        if (classrooms.length !== 0 && loading === false) {
            setLoading(true);
        }
    }, [classrooms]);

    return (
        <LayoutAdmin>

            {/*=============== Start of main ================= */}
                <main>
                <h1>Overview</h1>


                {/* ============ Start of insights ============== */}

                <div className="insights">

                    {/*course completed*/}
                    <div className="course-completed">
                        <span className="material-icons-sharp">person_outline</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Students</h3>
                                <h1>130</h1>
                            </div>
                        </div>

                    </div>

                    {/*course progress*/}
                    <div className="course-progress">
                        <span className="material-icons-sharp">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Teachers</h3>
                                <h1>14</h1>
                            </div>
                        </div>

                    </div>

                    {/*Certification*/}
                    <div className="certification">
                        <span className="material-icons-sharp">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Faculty</h3>
                                <h1>15</h1>
                            </div>

                        </div>

                    </div>

                </div>

                {/*============ END of insights =================== */}


                <div className="courses-table">

                    <h2>Classrooms</h2>

                    <table>
                        <thead>
                        <tr>
                            <th>Classroom</th>
                            <th>No. of Students</th>
                            <th>No. of Teachers</th>
                            <th>Details</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            loading ?
                                classrooms.map((classroom) => {
                                    return (
                                        <tr key={classroom._id}>
                                            <td>{classroom.name}</td>
                                            <td>{classroom.students.length}</td>
                                            <td>{classroom.teachers.length}</td>
                                            <td className="primary">
                                                <Link href={"/dashboard-admin/class-06"}>
                                                    Details
                                                </Link>

                                            </td>
                                        </tr>
                                    )
                                }) : ""
                        }

                        </tbody>
                    </table>

                </div>


            </main>
            {/*=============== End Of Main  ==================*/}



            {/*============= start of Right side*/}
                <div className="right">

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Admin </b></p>
                    </div>

                    <div className="profile-photo">

                    </div>
                </div>


                {/*start of recent Updates*/}
                <div className="recent-updates">
                    <h2>Results</h2>
                    <div className="updates">


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- A</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Admission Result
                                </p>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- C</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Classroom results
                                </p>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- E</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Exam Results
                                </p>

                            </div>
                        </div>


                    </div>
                </div>
                {/*end of recent updates*/}


                {/*============= start of Upcoming Events ==================*/}
                <div className="upcoming-events">
                    <h2>Notice Board</h2>
                    <div className="item online">
                        <div className="icon">
                            <span className="material-icons-sharp">receipt_long</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>Notice 01</h3>
                                <small className="text-muted">24 Hours ago</small>
                            </div>

                        </div>
                    </div>


                    <div className="item offline">
                        <div className="icon">
                            <span className="material-icons-sharp">local_mall</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>Notice 02</h3>
                                <small className="text-muted">24 Hours ago</small>
                            </div>


                        </div>
                    </div>

                </div>
                {/*============= end of Upcoming Events*/}


            </div>
            {/*============= End of left Side*/}


        </LayoutAdmin>
    );
};

export default DashboardAdmin;










