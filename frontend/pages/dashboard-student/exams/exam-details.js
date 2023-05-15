import React, { useState, useEffect } from "react";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import { getExam } from "../controllers/examController";
import { useRouter } from "next/router";

const Courses = () => {
  const [exams, setExams] = useState([]);
  const [isExamLoaded, setExamLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getExam(router.query.courseId).then((res) => {
        //   console.log(res.exam);
        setExams(res.exam);
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (exams.length > 0) {
      setExamLoading(true);

      console.log("Exam loaded", exams);
    }
  });

  return (
    <LayoutStudent>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Exam</h1>
        <br />
        <br />
        {isExamLoaded && exams.length > 0
          ? exams.map((exam, idx) => (
              <Card>
                <Card.Header>{exam.name}</Card.Header>
                <Card.Body>
                  <Card.Text>{exam.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={"/dashboard-student/exam/objective-exam"}
                  >
                    Attempt Exam
                  </Button>
                  <Button variant="primary" className={"m-1"}>
                    View
                  </Button>
                </Card.Body>
              </Card>
            ))
          : ""}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutStudent>
  );
};

export default Courses;
