import React, { useEffect, useState } from "react";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import { getCourses } from "../controllers/commonControllers";
import Router, { useRouter } from "next/router";
import axios from "axios";

const Results = () => {
  const [courses, setCourses] = useState([]);
  const [isCourses, setIsCourses] = useState(false);

  const [userID, setUserID] = useState();
  const [isUser, setUser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const { _id } = JSON.parse(localStorage.getItem("user"));
    console.log("User", _id);
    setUserID(_id);

    getCourses().then((res) => {
      console.log(res.courses);
      setCourses(res.courses);
    });
  }, []);

  useEffect(() => {
    if (router.isReady && courses.length > 0 && userID) {
      setIsCourses(true);
      setUser(true);
    }
  }, [router.isReady]);

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
              {courses.map((course, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{course.name}</td>
                  <Link
                    className="primary"
                    href={{
                      pathname: `/dashboard-student/results/result-details`,
                      query: {
                        courseID: course._id,
                        studentID: userID,
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

export default Results;
