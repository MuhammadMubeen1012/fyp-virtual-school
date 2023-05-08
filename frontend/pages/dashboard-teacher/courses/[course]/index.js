import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Router, useRouter} from "next/router";
import {getLessons} from "../../../../components/Controllers/CourseController";

const Index = () => {
    const [course, setCourse] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    console.log(router.query);


    useEffect(() => {
        // console.log(router.query );
        setCourse(router.query.course);
        getLessons(router.query.course).then(r => setLessons(r));
    }, []);

    useEffect(() => {
        if (loading === false && lessons.length !== 0) {
            console.log(lessons);
            console.log(course);
            setLoading(true);
        }
    }, [lessons]);


    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Overview</h1>
                {/* ============= Start of Courses ================= */}
                <div className="courses-table">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>Courses</h2>
                        <div>
                            <button>Create</button>
                            <button>Edit</button>
                        </div>
                    </div>
                    <table>
                        <thead>

                        <tr>
                            <th>Unit No.</th>
                            <th>Unit Name</th>
                            <th>Details</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            loading && lessons !== null ? (
                                lessons.data.lessons.map((lesson, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{lesson.name}</td>
                                        <td><Link href={`/dashboard-teacher/courses/${course}/${lesson._id}`}
                                                  className="primary ">Details</Link></td>
                                    </tr>)
                                )
                            ) : ""
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
