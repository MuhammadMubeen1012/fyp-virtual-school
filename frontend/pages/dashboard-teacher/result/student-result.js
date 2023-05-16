import React, { useState, useEffect } from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { compileResults, getResults } from "./resultController";
import {} from "../announcements/announcementController";
import { useRouter } from "next/router";
import { publishResults } from "./resultController";

const StudentResult = () => {
  const [results, setResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const router = useRouter();
  const [courseID, setCourseID] = useState({});
  const [isPublished, setIsPublished] = useState(false);
  const [isCompiled, setCompilation] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.courseId);
      getResults("645122c1e1bcdf8c2a93b954").then((res) => {
        console.log(res.courseResult);
        setResults(res.courseResult);
        setCompilation(true);
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (results) {
      setLoadingResults(true);
    }
  });

  const compileResult = (courseID) => {
    console.log("Compiling result");
    compileResults(courseID).then((res) => {
      if (res.data.success) {
        setLoadingResults(true);
        getResults("645122c1e1bcdf8c2a93b954").then((res) => {
          console.log(res.courseResult);
          setResults(res.courseResult);
        });
        // console.log(loadingResults);
      } else {
        setLoadingResults(false);
      }
    });
  };

  const publishResult = (courseID) => {
    // Testing ID ------- "645122c1e1bcdf8c2a93b954"
    publishResults(courseID).then((res) => {
      console.log(res.data.success);
      console.log(res.data.message);
      if (res.data.success) {
        setIsPublished(true);
      }
    });
    console.log("Publishing result");
  };

  return (
    <LayoutTeacher>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Results: {router.query.courseName}</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          {isCompiled ? (
            <Button
              variant={"primary"}
              onClick={(e) => compileResult(router.query.courseId)}
            >
              Compile Result
            </Button>
          ) : (
            <Button
              disabled
              variant={"primary"}
              onClick={(e) => compileResult(router.query.courseId)}
            >
              Compile Result
            </Button>
          )}
          <Button
            variant={"primary"}
            onClick={(e) => publishResult(router.query.courseId)}
          >
            Publish
          </Button>
        </div>

        {/* ============= Start of Courses ================= */}
        <div className="courses-table">
          <h2>Students</h2>

          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Student Name</th>
                <th>Total Marks</th>
                <th>Obtain Marks</th>
                <th>View Details</th>
              </tr>
            </thead>

            <tbody>
              {loadingResults && results
                ? results.map((res, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{res.student}</td>
                        <td>{res.totalMarks}</td>
                        <td>{res.obtainedMarks}</td>
                        <td>
                          <Link
                            className="primary "
                            href={{
                              pathname: `/dashboard-teacher/result/detail-result`,
                              query: {
                                courseId: res._id,
                                studentID: res.student,
                              },
                            }}
                          >
                            Open
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                : "Quiz, Assignment or Exam are not graded"}
            </tbody>
          </table>
        </div>
        {/* ============= End of Courses  ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutTeacher>
  );
};

export default StudentResult;
