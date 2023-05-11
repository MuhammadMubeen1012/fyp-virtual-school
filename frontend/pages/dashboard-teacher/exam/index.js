import React from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";

const Exam = () => {
    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Exam</h1>


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
                            <Link href={"/dashboard-teacher/exam/exam-details"} className="primary ">Open</Link>
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

export default Exam;
