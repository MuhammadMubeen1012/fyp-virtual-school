import React, { useState, useEffect } from "react";
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { getSubjectiveExam } from "../controllers/examController";
import Router, { useRouter } from "next/router";

const SubjectiveExam = () => {
  const [subjectiveExam, setSubjectiveExam] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isQuestionsLoaded, setQuestionsLoading] = useState(false);
  const [isExamLoaded, setExamLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [ans, setAns] = useState({});
  const [newAnswer, setNewAnswers] = useState([
    { answer: "" },
    { answer: "" },
    { answer: "" },
    { answer: "" },
  ]);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getSubjectiveExam(router.query.examID).then((res) => {
        // console.log(res);
        // console.log(res.subExam.parts);
        setSubjectiveExam(res.subExam);
        setQuestions(res.subExam.parts);
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (subjectiveExam) {
      setExamLoading(true);
    }
  });

  useEffect(() => {
    if (questions.length > 0) {
      setQuestionsLoading(true);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnswers((prevState) => [...prevState, ans]);
    // submitSubjectiveExam(router.query.examID, answers).then((res) => {
    //   console.log(res);
    // });
    console.log(answers);
  };

  const handleAnswers = async (event) => {
    const { value, name } = event.target;

    // console.log(name, value);

    setAns((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // console.log(answers);
  };

  return (
    <LayoutStudent>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Exam</h1>

        {/* ============= Start of Courses ================= */}
        <div className="courses-table">
          <h2>Subjective Exam</h2>
          <br />

          <Form onSubmit={handleSubmit}>
            {isExamLoaded && isQuestionsLoaded && questions.length > 0
              ? questions.map((question, index) => (
                  <>
                    <Form.Label>
                      Question {index + 1}: {question.question}
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      placeholder="Type answer here..."
                      style={{ height: "100px", resize: "none" }}
                      name={`answer-${index}`}
                      onChange={handleAnswers}
                    />

                    <br />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    ></div>
                  </>
                ))
              : ""}

            <Button type={"submit"}>Submit</Button>
          </Form>
        </div>
        {/* ============= End of Courses  ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutStudent>
  );
};

export default SubjectiveExam;

const Questions = () => {
  return <></>;
};
