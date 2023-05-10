import React from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button} from "react-bootstrap";

const Attendance = () => {

    return (
        <LayoutTeacher>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Attendance Teacher</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>Courses</h2>
                        <div>
                            <Button>Save</Button>
                        </div>
                    </div>


                    {/*========================= Attendance Table ========================== */}
                    <table>
                        <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Student Name </th>
                            <th>Status </th>
                            <th>Class </th>
                            <th>Absences </th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th>01</th>
                            <td>Ali Ahmed</td>
                            <td><input type="checkbox" checked name="" id=""/></td>
                            <td>IV-C</td>
                            <td>0</td>

                        </tr>

                        <tr>
                            <th>02</th>
                            <td>Abdul Rehman</td>
                            <td><input type="checkbox" checked name="" id=""/></td>
                            <td>IV-C</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th>03</th>
                            <td>Aftab Ahmed</td>
                            <td><input type="checkbox" checked name="" id=""/></td>
                            <td>IV-C</td>
                            <td>0</td>
                        </tr>


                        </tbody>
                    </table>

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}



        </LayoutTeacher>
    );
};

export default Attendance;
