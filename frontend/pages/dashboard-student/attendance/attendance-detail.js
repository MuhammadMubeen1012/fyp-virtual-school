import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";

const AttendanceDetail = () => {



    return (
        <LayoutStudent>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Attendance</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">


                    <br/>
                    {/*========================= Attendance Table ========================== */}
                    <table>
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1-Apr-2023</td>
                                <td style={{color: "green", fontWeight: "bold" }}>Present</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>2-Apr-2023</td>
                                <td style={{color: "red", fontWeight: "bold" }}>Absent</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}



        </LayoutStudent>
    );
};

export default AttendanceDetail;
