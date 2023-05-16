import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import { useRouter } from "next/router";
import Router from "next/router";
import { getAttendance } from "../controllers/attendanceController";
import { getStudent } from "../controllers/commonControllers";

const AttendanceDetail = () => {
  const [attendance, setAttendance] = useState([]);
  const [loadAttendance, setLoadAttendance] = useState(false);
  const [attendanceList, setAttendanceList] = useState([]);
  const [courseID, setCourseID] = useState();
  const [userID, setUserID] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setCourseID(router.query.courseId);
      getStudent().then((res) => {
        // console.log(res.student._id);
        setUserID(res.student._id);
        // console.log("Logged in Student", res);
      });
      //   const { _id } = JSON.parse(localStorage.getItem("user"));
      //   setUserID(_id);
    }
  });

  useEffect(() => {
    if (courseID && userID) {
      getAttendance(courseID, userID).then((res) => {
        // console.log(res);
        setAttendance(res.attendance);
      });
    }
  }, []);

  useEffect(() => {
    if (attendance) {
      setLoadAttendance(true);
      console.log("Att", attendance);
    }
  });

  return (
    <LayoutStudent>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Attendance</h1>

        {/* ============= Start of Courses ================= */}
        <div className="courses-table">
          <br />
          {/*========================= Attendance Table ========================== */}
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {loadAttendance && attendance
                ? attendance.map((list, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        {new Date(
                          Date.parse(list.createdAt)
                        ).toLocaleDateString()}
                      </td>
                      <td style={{ color: "green", fontWeight: "bold" }}>
                        {list.attendanceList[0].status}
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        {/* ============= End of Courses  ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutStudent>
  );
};

export default AttendanceDetail;
