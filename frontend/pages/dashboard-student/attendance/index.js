import React from 'react';
import Link from "next/link";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";

const Attendance = () => {
    return (
        <LayoutStudent>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Attendance</h1>


                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>Courses</h2>

                    <table>
                        <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Course Name</th>
                            <th>View Details</th>

                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>01</td>
                            <td>English</td>
                            <Link href={"/dashboard-student/attendance/attendance-detail"} className="primary">
                                Open
                            </Link>
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

export default Attendance;
