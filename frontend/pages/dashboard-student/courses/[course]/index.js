import React from 'react';
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";

const English = () => {
    return (
        <LayoutStudent>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Overview</h1>

                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>English</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Unit No.</th>
                            <th>Unit Name</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th>01</th>
                            <td>Introduction</td>
                            <Link href={"/dashboard-student/courses/english/unit-01"} className="primary ">Details</Link>
                        </tr>

                        <tr>
                            <th>02</th>
                            <td>Vocabulary</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <th>03</th>
                            <td>Grammar</td>
                            <td className="primary">Details</td>
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

export default English;
