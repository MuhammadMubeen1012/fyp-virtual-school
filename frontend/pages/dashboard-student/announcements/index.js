import React from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";

const Courses = () => {
    return (
        <LayoutStudent>


            {/*=============== Start of main ================= */}
            <main>
                <h1>Results</h1>


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
                            <Link href={"/dashboard-teacher/attendance/attendance-details"} className="primary">
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

export default Courses;