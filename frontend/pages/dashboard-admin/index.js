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






        </LayoutAdmin>
    );
};

export default DashboardAdmin;










