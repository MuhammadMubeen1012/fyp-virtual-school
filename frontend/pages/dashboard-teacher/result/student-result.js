import React from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button} from "react-bootstrap";

const StudentResult = () => {
    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Results</h1>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "0.5rem",
                    }}
                >
                    <Button variant={"primary"}>Compile Result</Button>
                    <Button variant={"primary"}>Publish</Button>
                </div>


                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>Courses</h2>

                    <table>
                        <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Student Name</th>
                            <th>Total Marks</th>
                            <th>Obtain Marks</th>
                            <th>View Details</th>

                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>01</td>
                            <td>Momin</td>
                            <td>100</td>
                            <td>70</td>
                            <Link href={"/dashboard-teacher/result/detail-result"} className="primary ">Open</Link>
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

export default StudentResult;
