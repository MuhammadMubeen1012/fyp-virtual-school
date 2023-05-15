import React, { useState, useEffect } from "react";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card, Form, Modal} from "react-bootstrap";
import { getExam } from "../controllers/examController";
import { useRouter } from "next/router";

const ExamDetails = () => {
  const [exams, setExams] = useState([]);
  const [isExamLoaded, setExamLoading] = useState(false);
  const [modal, setModal] = useState(false);
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
          ? exams?.map((exam, idx) => (
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
                  <Button
                      variant="primary" className={"m-1"}
                      onClick={() => setModal(true)}
                  >
                    View
                  </Button>
                </Card.Body>
              </Card>
            ))

          : ""}

          <ViewModal
            modal={modal}
            setModal={setModal}
          />

      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutStudent>
  );
};

export default ExamDetails;



const ViewModal = ({modal, setModal}) => {

    return(
        <>
            <Modal
                show={modal}
                onHide={() => setModal(false)}
                dialogClassName="custom-modal"
                size={"lg"}
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Create Attendance
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>


                    <label>Objective Exam</label><br/>
                    <Button
                        href={"/dashboard-student/exams/objective-exam"}
                    >
                        Attempt
                    </Button>
                    <br/><br/>

                    <label>Subjective Exam</label><br/>
                    <Button
                        href={"/dashboard-student/exams/subjective-exam"}
                    >
                        Attempt
                    </Button>


                    <br/><br/>
                    <Modal.Footer>
                        <Button
                            onClick={() => setModal(false)}
                        >Close</Button>
                    </Modal.Footer>

                </Modal.Body>
            </Modal>
        </>
    )
}




