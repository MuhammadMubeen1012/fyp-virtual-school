import React, { useState, useEffect } from "react";
// import { questions } from "../../../data/admissionTestData";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../../../components/_App/Navbar";
import router from "next/router";
import {
  getObjectiveExam,
  submitObjectiveExam,
} from "../controllers/examController";

const ObjectiveExam = () => {
  const [objectiveExam, setObjectiveExam] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isQuestionsLoaded, setQuestionsLoading] = useState(false);
  const [isExamLoaded, setExamLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      getObjectiveExam(router.query.examID).then((res) => {
        // console.log(res.objExam);
        setObjectiveExam(res.objExam);
        setQuestions(res.objExam.questions);
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (objectiveExam) {
      setExamLoading(true);
    }
  });

  useEffect(() => {
    if (questions.length > 0) {
      setQuestionsLoading(true);
    }
  });

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleRadio = (event, question, answer) => {
    const value = event.target.value;

    setAnswers((prevState) => [...prevState, value]);

    if (value === answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitObjectiveExam(router.query.examID, answers).then((res) => {
      console.log(res);
    });
    console.log(answers);
  };

  return (
    <div>
      <div className="container mtb-100">
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="row align-items-center justify-content-center"
        >
          <div className="col-12">
            <h1 className={"mx-auto text-center"}>Exam</h1>

            <form action="" onSubmit={handleSubmit}>
              {isQuestionsLoaded && isExamLoaded
                ? questions.map((question, index) => (
                    <div className={"m-4"} key={index}>
                      <p className={"fw-bolder"}>{question.question}</p>
                      {question.questionOptions.map((option, idx) => (
                        <div key={idx}>
                          <input
                            type="radio"
                            onChange={(event) =>
                              handleRadio(
                                event,
                                question,
                                question.questionAnswer
                              )
                            }
                            value={option}
                            name={`option-${index}`}
                            id={`option-${index}-${idx}`}
                          />
                          <label htmlFor={`option-${index}-${idx}`}>
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))
                : ""}

              <div
                style={{ display: "flex" }}
                className={" justify-content-center "}
              >
                <button type="submit" className={"default-btn"}>
                  {/*<a className={"default-btn text-center "} href={"/dashboard-student"}>*/}
                  <i className="flaticon-checkmark"></i>
                  {/*    Submit*/}
                  {/*</a>*/}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveExam;
