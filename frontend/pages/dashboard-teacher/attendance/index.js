import React from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {} from "./attendanceController";

<<<<<<< HEAD
=======

>>>>>>> 9387460982eec61f14e86ea12a2df925872e93aa
const Attendance = () => {
  return (
    <LayoutTeacher>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Attendance</h1>

        {/* ============= Start of Courses ================= */}
        <div className="courses-table">
          <h2>Attendance</h2>

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
                <Link
                  href={"/dashboard-teacher/attendance/attendance-details"}
                  className="primary"
                >
                  Open
                </Link>
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
