import React, {useEffect} from "react";
import LayoutAdmin from "../../../components/Dashboard/Layout/LayoutAdmin";
import {getClassroomsByAcademicYear} from "../DashboardController";
import Link from "next/link";


const Classrooms = () => {
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
        <>
            <LayoutAdmin>

                <main>

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
                                    classrooms?.map((classroom) => {
                                        return (
                                            <tr key={classroom._id}>
                                                <td>{classroom.name}</td>
                                                <td>{classroom.students.length}</td>
                                                <td>{classroom.teachers.length}</td>
                                                <td className="primary">
                                                    <Link
                                                        href={{
                                                            pathname: `/dashboard-admin/classrooms/${classroom.name}`,
                                                            query: {
                                                                classroomID: classroom._id,
                                                                classroomName: classroom.name,
                                                            },
                                                        }}
                                                    >
                                                        open
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

            </LayoutAdmin>
        </>
    );
};

export default Classrooms;
