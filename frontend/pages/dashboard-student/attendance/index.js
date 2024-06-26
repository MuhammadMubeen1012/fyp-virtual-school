import React, { useEffect, useState } from "react";
import Link from "next/link";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import { getCourses } from "../controllers/commonControllers";

const Attendance = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) => {
      console.log(res.courses);
      setCourses(res.courses);
    });
  }, []);

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
              {courses.map((course, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{course.name}</td>
                  <Link
                    className="primary"
                    href={{
                      pathname: `/dashboard-student/attendance/attendance-detail`,
                      query: {
                        courseId: course._id,
                        courseName: course.name,
                      },
                    }}
                  >
                    Open
                  </Link>
                </tr>
              ))}
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
