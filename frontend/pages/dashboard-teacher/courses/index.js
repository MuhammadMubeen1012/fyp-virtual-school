import React from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";

const Index = () => {
    return (
        <LayoutTeacher>


            {/*=============== Start of main ================= */}
            <main>
                <h1>Overview</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>Courses</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Course Title</th>
                            <th>Lessons Completed</th>
                            <th>Duration</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>English</td>
                            <td>18/40 (48%)</td>
                            <td>10h 13m 28s</td>

                            <Link href={"/dashboard-teacher/courses/english"} className="primary ">Details</Link>
                        </tr>

                        <tr>
                            <td>Maths</td>
                            <td>7/35 (20%)</td>
                            <td>20h 30m 0s</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Science</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
                        </tr>

                        <tr>
                            <td>Urdu</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
                        </tr>

                        <tr>
                            <td>History</td>
                            <td>21/23 (97%)</td>
                            <td>15hr 10m 0s</td>
                            <td className="primary">Details</td>
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

export default Index;
