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
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (router.isReady) {
            //   console.log(router.query);
            getAttendance(router.query.attendanceID).then((res) => {
                console.log(res.attendance.attendanceList);
                setAttendance(res.attendance);
                setAttendanceList(res.attendance.attendanceList);
                setLength(res.attendance.attendanceList.length)
            });
        }
    }, [router.isReady]);

    useEffect(() => {
        if (attendanceList.length > 0) {
            setLoadingAttendance(true);
            const marked = new Array(attendanceList.length).fill(1);
            console.log(attendanceList);
            for (let i = 0; i < attendanceList.length; i++) {
                const item = attendanceList[i];
                marked[i] = item.status === "Present" ? 1 : 0;

            }
            setMarkedAttendance(marked);

        }
    }, [attendanceList]);

    useEffect(() => {
        if (markedAttendance.length > 0) {

            console.log(markedAttendance);
        }
    }, [markedAttendance]);
    const submitHandle = (e) => {
        e.preventDefault();
        saveAttendance(attendance._id, markedAttendance).then((res) => {
            console.log(res);
            console.log("Sending");
            router.back();
        });
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
                            <Button onClick={submitHandle}>Save</Button>
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
                            const marked = _.cloneDeep(markedAttendance);
                            marked[idx] = item.status === "Present" ? 1 : 0;
                            // setMarkedAttendance(marked);

                            return (<tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.studentName}</td>
                                {(<td>
                                        <input
                                            type="checkbox"
                                            checked={markedAttendance[idx] === 1}
                                            id="name"
                                            onChange={(e) => {
                                                const ma = _.cloneDeep(markedAttendance);
                                                ma[idx] = e.target.checked ? 1 : 0;
                                                setMarkedAttendance(ma);
                                                console.log(markedAttendance)
                                            }}
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
