import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";
import {getCourseAttendance} from "./attendanceController";

const AttendanceDetail = () => {
    const router = useRouter();
    const [course, setCourse] = useState({});

    const [attendance, setAttendance] = useState([]);
    const [loadingAttendance, setLoadingAttendance] = useState(false);

    useEffect(() => {
            if (router.isReady) {
                setCourse(router.query);
                console.log(router.query);
                getCourseAttendance(router.query.courseId).then((res) => {
                    console.log(res.attendance);
                    setAttendance(res.attendance);
                });
            }
        },
        [router.isReady]
    );

    useEffect(() => {
        if (attendance.length > 0) {
            setLoadingAttendance(true);
            console.log(attendance);

        }
    }, [attendance]);
    const item = {
        serial: "Serial No.",
        class: "Class",
        timeStart: "Time Start",
        timeEnd: "Time End"
    }


    return (
        <LayoutTeacher>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Attendance</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>English</h2>
                        <div>
                            <Button
                                style={{color: "#fff"}}
                                href={"/dashboard-teacher/attendance/new-attendance"}
                            >
                                Create New
                            </Button>
                        </div>
                    </div>


                    {/*========================= Attendance Table ========================== */}
                    <table>
                        <thead>
                        {
                            <tr>
                                <th>{item.serial}</th>
                                <th>{item.class}</th>
                                <th>{item.timeStart}</th>
                                <th>{item.timeEnd}</th>
                                <th>Created At</th>
                            </tr>
                        }
                        </thead>

                        <tbody>
                        {
                            loadingAttendance && attendance.length > 0 ? attendance.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item._id}</td>
                                    <td>{item.classroom}</td>
                                    <td>{item.startTime}</td>
                                    <td>{item.endTime}</td>
                                    <td>{(new Date(Date.parse(item.createdAt)).toLocaleDateString())}</td>
                                    <Button
                                        style={{color: "#fff"}}
                                        onClick={() => {
                                            
                                        }}
                                    >
                                       View
                                    </Button>
                                </tr>
                            )) : ""
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

export default AttendanceDetail;
