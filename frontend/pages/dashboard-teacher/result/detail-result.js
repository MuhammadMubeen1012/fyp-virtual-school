import React, { useState, useEffect } from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { getResult } from "./resultController";

const DetailResult = () => {
  const router = useRouter();
  const [detailedResult, setDetailedResult] = useState([]);
  const [loadingResult, setLoadingResult] = useState(false);
  const [courseID, setCourseID] = useState({});
  const [studentID, setStudentID] = useState({});

  const [assignmentGrade, setAssignmentGrade] = useState({});
  const [quizGrade, setQuizGrade] = useState({});
  const [examGrade, setExamGrade] = useState({});

  useEffect(() => {
    if (router.isReady) {
      setCourseID(router.query.courseId);
      setStudentID(router.query.studentID);
      //   console.log(courseID, "-----", studentID);
      getResult("645122c1e1bcdf8c2a93b954", "645244addc59de951d55e4ba").then(
        (res) => {
          setDetailedResult(res.courseResult);
          console.log(res.courseResult);
        }
      );
    }
  }, [router.isReady]);

  useEffect(() => {
    if (detailedResult && !loadingResult) {
      setLoadingResult(true);
      setAssignmentGrade(detailedResult.assignmentGrade);
      setQuizGrade(detailedResult.quizGrade);
      setExamGrade(detailedResult.examGrade);

      console.log(assignmentGrade, "--", quizGrade, "--", examGrade);
    }
  }, [detailedResult]);

  return (
    <LayoutTeacher>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Student Name</h1>

        {/* ============= Assignment Result ================= */}
        <div className="courses-table">
          <h2>Assignment Results</h2>

          <table>
            <thead>
              <tr>
                <th>Total Marks</th>
                <th>Obtain Marks</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{assignmentGrade.totalMarks}</td>
                <td>{assignmentGrade.obtainedMarks}</td>
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
                <th>Total Marks</th>
                <th>Obtain Marks</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{quizGrade.totalMarks}</td>
                <td>{quizGrade.obtainedMarks}</td>
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
                <th>Total Marks</th>
                <th>Obtain Marks</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{examGrade.totalMarks}</td>
                <td>{examGrade.obtainedMarks}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* ============= Exam Result  ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutTeacher>
  );
};

export default DetailResult;
