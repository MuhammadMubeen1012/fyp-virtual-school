import React from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button} from "react-bootstrap";

const Results = () => {
    return (
        <LayoutStudent>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Results</h1>


                {/*=============== Start of main ================= */}
                <main>

                    <h1>Course Name</h1>


                    {/* ============= Assignment Result ================= */}
                    <div className="courses-table">

                        <h2>Assignment Results</h2>

                        <table>
                            <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Assignment </th>
                                <th>Total Marks</th>
                                <th>Obtain Marks</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>01</td>
                                <td>Momin</td>
                                <td>100</td>
                                <td>70</td>

                            </tr>

                            </tbody>
                        </table>

                    </div>
                    {/* ============= Assignment Result  ================== */}



                    {/* ============= Quiz Result ================= */}
                    <div className="courses-table">

                        <h2>Quiz Results</h2>

                        <table>
                            <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Quiz </th>
                                <th>Total Marks</th>
                                <th>Obtain Marks</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>01</td>
                                <td>Momin</td>
                                <td>100</td>
                                <td>70</td>

                            </tr>

                            </tbody>
                        </table>

                    </div>
                    {/* ============= Quiz Result  ================== */}


                    {/* ============= Exam Result ================= */}
                    <div className="courses-table">

                        <h2>Exam Results</h2>

                        <table>
                            <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Exam</th>
                                <th>Total Marks</th>
                                <th>Obtain Marks</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>01</td>
                                <td>Momin</td>
                                <td>100</td>
                                <td>70</td>

                            </tr>

                            </tbody>
                        </table>

                    </div>
                    {/* ============= Exam Result  ================== */}



                </main>
                {/*=============== End Of Main  ==================*/}


            </main>
            {/*=============== End Of Main  ==================*/}
        </LayoutStudent>
    );
};

export default Results;
