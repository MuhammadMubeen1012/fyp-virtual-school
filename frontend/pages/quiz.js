import React from 'react';
import {questions} from "../data/admissionTestData";
import Navbar from "../components/_App/Navbar";

const Quiz = () => {
    return (
        <div>
            <Navbar />

            <div className="container mtb-100">
                <div style={{ display: "flex", justifyContent: "center"}} className="row align-items-center justify-content-center">
                    <div  className="col-12">
                        <h1 className={"mx-auto text-center"}>Teacher's Admission Quiz</h1>

                        {
                            questions.map((question, index) => (
                                <div className={"m-4"}>
                                    <p className={"fw-bolder"}>{question.question}</p>
                                    {
                                        question.questionOptions.map((option, idx) => (
                                            <div>
                                                <input type="radio" name={`option-${index}`}  />
                                                <label>{option}</label>
                                            </div>
                                        ))
                                    }


                                </div>
                            ))
                        }

                        <div style={{ display:"flex"}} className={" justify-content-center "}>
                            <a className={"default-btn text-center "} href={"/dashboard-student"}>
                                <i className="flaticon-checkmark"></i>
                                Submit
                            </a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Quiz;
