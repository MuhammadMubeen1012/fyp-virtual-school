import React, {useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button} from "react-bootstrap";

const AttendanceDetail = () => {

    const attendanceTitle = [
        {
            serial: "Serial No.",
            class: "Class",
            timeStart: "Time Start",
            timeEnd: "Time End"
        },
    ];

    const attendanceData = [
        {
            serial: 1,
            class: "IV-A",
            timeStart: "09:00",
            timeEnd: "10:00",
        },

        {
            serial: 2,
            class: "IV-A",
            timeStart: "09:00",
            timeEnd: "10:00",
        },

        {
            serial: 3,
            class: "IV-A",
            timeStart: "09:00",
            timeEnd: "10:00",
        },

    ]

    const [attendance, setAttendance] = useState(attendanceData);


    const CreateNewAttendance = () => {

        const newAttendanceData = {
            serial: attendance.length+1,
            class: "IV-A",
            timeStart: "09:00",
            timeEnd: "10:00",
        };
        setAttendance([...attendance, newAttendanceData]);

    };



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
                            <Button style={{color: "#fff"}} onClick={() => CreateNewAttendance()}  >Create New</Button>
                        </div>
                    </div>


                    {/*========================= Attendance Table ========================== */}
                    <table>
                        <thead>
                            {
                                attendanceTitle.map((item, idx) => (
                                    <tr key={item.serial}>
                                        <th>{item.serial}</th>
                                        <th>{item.class}</th>
                                        <th>{item.timeStart}</th>
                                        <th>{item.timeEnd}</th>
                                    </tr>
                                ))
                            }
                        </thead>

                        <tbody>
                            {
                                attendance.map((item, idx) => (
                                    <tr key={item.serial}>
                                        <td>{item.serial}</td>
                                        <td>{item.class}</td>
                                        <td>{item.timeStart}</td>
                                        <td>{item.timeEnd}</td>
                                        <td className="primary"> <Link href={"/dashboard-teacher/attendance/new-attendance"}>Open</Link> </td>
                                    </tr>
                                ))
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
