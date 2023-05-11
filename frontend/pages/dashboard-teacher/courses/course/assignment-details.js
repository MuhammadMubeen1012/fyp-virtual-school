import React from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";

const AssignmentDetails = () => {
    return (
        <div>

            <LayoutTeacher>

                <main>

                    <h1>View Submissions</h1>

                    {/* ============= Start of Courses ================= */}
                    <div className="courses-table">

                        <br/>
                        <table>
                            <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Student Name</th>
                                <th>File Link</th>
                                <th>Time</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>01</td>
                                <td>Momin</td>
                                <td>Link</td>
                                <td>11:00pm</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    {/* ============= End of Courses  ================== */}

                </main>

            </LayoutTeacher>

        </div>
    );
};

export default AssignmentDetails;
