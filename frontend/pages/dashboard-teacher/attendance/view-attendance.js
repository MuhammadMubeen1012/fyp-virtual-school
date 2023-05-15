import React, {useEffect, useState} from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button, Form} from "react-bootstrap";
import {useRouter} from "next/router";
import {getAttendance, saveAttendance} from "./attendanceController";
import _ from 'lodash'

const Attendance = () => {
    const router = useRouter();
    const [attendance, setAttendance] = useState({});
    const [loadingAttendance, setLoadingAttendance] = useState(false);
    const [attendanceList, setAttendanceList] = useState([]);
    const [markedAttendance, setMarkedAttendance] = useState([]);

    useEffect(() => {
        if (router.isReady) {
            //   console.log(router.query);
            getAttendance(router.query.attendanceID).then((res) => {
                console.log(res.attendance.attendanceList);
                setAttendance(res.attendance);
                setAttendanceList(res.attendance.attendanceList);
            });
        }
    }, [router.isReady]);

    useEffect(() => {
        if (attendanceList.length > 0) {
            setLoadingAttendance(true);
            console.log(attendanceList);
            setMarkedAttendance(new Array(attendanceList.length).fill(1));

        }
    }, [attendanceList]);

    useEffect(() => {
        if (markedAttendance.length > 0) {
            console.log(markedAttendance);
        }
    }, [markedAttendance]);
    const submitHandle = (e) => {
        e.preventDefault();
        router.back();
    };

    return (<LayoutTeacher>
        {/*=============== Start of main ================= */}
        <main>
            <h1>Attendance Teacher</h1>
            <Form>
                {/* ============= Start of Courses ================= */}
                <div className="courses-table">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>Courses</h2>
                        <div>
                            <Button onClick={submitHandle}>Back</Button>
                        </div>
                    </div>

                    {/*========================= Attendance Table ========================== */}
                    <table>
                        <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Student Name</th>
                            <th>Status</th>
                        </tr>
                        </thead>

                        <tbody>
                        {loadingAttendance && attendanceList.length > 0 ? attendanceList.map((item, idx) => {
                            return (<tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.studentName}</td>
                                {(<td>
                                        <input
                                            type="checkbox"
                                            checked={item.status === "Present"}
                                            disabled={true}
                                            id="name"
                                        />
                                    </td>
                                )}
                            </tr>);
                        }) : ""}
                        </tbody>
                    </table>
                </div>
            </Form>
            {/* ============= End of Courses  ================== */}
        </main>
        {/*=============== End Of Main  ==================*/}
    </LayoutTeacher>);
};

export default Attendance;
