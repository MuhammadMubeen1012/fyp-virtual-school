import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (courses.length === 0) {
            getCourses().then((res) => {
                setCourses(res);
            })
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
                        {loading ? courses?.map((res, index) => {
                            const course = res.data.course;
                            return (<tr key={index}>
                                <td>{course.name}</td>
                                {course.lessons ? <td>{course.lessons.length}</td> : <td>0</td>}
                                <td>
                                    <Link
                                        href={{
                                            pathname: `/dashboard-teacher/courses/course`,
                                            query: {
                                                courseId: course._id,
                                                courseName: course.name
                                            }
                                        }}
                                    >
                                        Open
                                    </Link>
                                </td>
                            </tr>)
                        }) : ""
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

export default Index;


export const getCourses = async () => {
    const teacher = await getTeacher();
    const coursesLinks = teacher.courses;

    return Promise.all(coursesLinks.map((course) => {
        return axios.get(`http://localhost:7000/api/v1/course/${course}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            })
    }))
}


const getTeacher = async () => {
    const response = await axios.get(`http://localhost:7000/api/v1/teacher`, {
        headers: {
            Authorization: `${Cookies.get('token')}`
        }
    })
    return response.data.teacher
}








