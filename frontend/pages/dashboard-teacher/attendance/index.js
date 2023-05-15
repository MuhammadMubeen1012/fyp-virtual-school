import React, {useEffect} from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {getCourses} from "./attendanceController";

const Attendance = () => {
    const [courses, setCourses] = React.useState([]);
    const [loading, setLoading] = React.useState(false);


    useEffect(() => {
        getCourses().then(r => setCourses(r.courses));

    }, []);

    useEffect(() => {
        if (loading === false && courses.length !== 0) {
            setLoading(true);
            console.log(courses);
        }
    }, [courses]);

    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Attendance</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">
                    <h2>Attendance</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Course Name</th>
                                <th>View Details</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                courses.map((course, index) => {
                                    console.log(course)
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{course.name}</td>
                                            <Link
                                                href={{
                                                    pathname: `/dashboard-teacher/attendance/attendance-details`,
                                                    query: {
                                                        courseId: course._id,
                                                        courseName: course.name,
                                                        classroomId:course.classroom

                                                    }
                                                }}
                                                className="primary"
                                            >
                                                Open
                                            </Link>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
                {/* ============= End of Courses  ================== */}
            </main>
            {/*=============== End Of Main  ==================*/}
        </LayoutTeacher>
    );
};

export default Attendance;










