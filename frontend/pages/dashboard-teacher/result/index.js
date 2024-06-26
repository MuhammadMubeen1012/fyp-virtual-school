import React, {useEffect, useState} from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button} from "react-bootstrap";
import {getCourses} from "./resultController";

const Results = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (courses.length === 0) {
            getCourses().then((res) => {
                setCourses(res.courses);
                console.log(res.courses);
            });
        }
    }, []);
    useEffect(() => {
        if (courses.length !== 0 && !loading) {
            setLoading(true);
        }
    }, [courses]);

    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Results</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">
                    <h2>Courses</h2>

                    <table>
                        <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Lessons</th>
                            <th>View Details</th>
                        </tr>
                        </thead>

                        <tbody>
                        {loading && courses
                            ? courses?.map((res, index) => {
                                const course = res;
                                return (
                                    <tr key={index}>
                                        <td>{course.name}</td>
                                        {course.lessons ? (
                                            <td>{course.lessons.length}</td>
                                        ) : (
                                            <td>0</td>
                                        )}
                                        <td>
                                            <Link
                                                className="primary "
                                                // href={`/dashboard-teacher/courses/${course._id}`}
                                                href={{
                                                    pathname: `/dashboard-teacher/result/student-result`,
                                                    query: {
                                                        courseId: course._id,
                                                        courseName: course.name,
                                                    },
                                                }}
                                            >
                                                Open
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                            : ""}
                        </tbody>
                    </table>
                </div>
                {/* ============= End of Courses  ================== */}
            </main>
            {/*=============== End Of Main  ==================*/}
        </LayoutTeacher>
    );
};

export default Results;
