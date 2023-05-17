import React, {useState, useEffect} from "react";
import Link from "next/link";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import {getCourses} from "../controllers/coursesController";

const Index = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (courses.length === 0) {
            getCourses().then((res) => {
                setCourses(res.courses);
            });
        }
    }, []);

    useEffect(() => {
        if (courses.length !== 0 && !loading) {
            setLoading(true);
        }
    }, [courses]);

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
                            <th>Lessons</th>
                            <th>Details</th>
                        </tr>
                        </thead>

                        <tbody>
                        {courses?.map((course, index) => {
                            // const course = res.data.course;
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
                                            // href={`/dashboard-teacher/courses/${course._id}`}
                                            href={{
                                                pathname: `/dashboard-student/courses/${course}`,
                                                query: {
                                                    courseId: course._id,
                                                    courseName: course.name,
                                                },
                                            }}
                                        >
                                            click
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })
                        }
                        </tbody>
                    </table>
                </div>
                {/* ============= End of Courses  ================== */}
            </main>
            {/*=============== End Of Main  ==================*/}

        </LayoutStudent>
    );
};

export default Index;
