import React, {useState} from 'react';
import {questions} from "../data/admissionTestData";
import Navbar from "../components/_App/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const QuizStudent = () => {


    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleRadio = (event, question, answer) => {
        const value = event.target.value;

        setAnswers(prevState => ([...prevState, value]));

        if (value === answer){
            setCorrectAnswers( correctAnswers + 1 );
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(correctAnswers)

        console.log(answers);


        // post request will be here.
        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

        try{
            const res = await axios.post('http://localhost:7000/api/v1/admission/student/submit/test', answers,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            console.log(res);
            console.log("Registered Successfully");
            toast.success("Registered Successfully");

        }catch (error) {
            console.log(error);
        }



    }


    return (
        <div>
            <Navbar />

            <div className="container mtb-100">
                <div style={{ display: "flex", justifyContent: "center"}} className="row align-items-center justify-content-center">
                    <div  className="col-12">
                        <h1 className={"mx-auto text-center"}>Teacher's Admission Quiz</h1>

                        <form action="" onSubmit={handleSubmit}>


                            {
                                questions.map((question, index) => (
                                    <div className={"m-4"} key={index}>
                                        <p className={"fw-bolder"}>{question.question}</p>
                                        {
                                            question.questionOptions.map((option, idx) => (
                                                <div key={idx}>
                                                    <input type="radio"
                                                           onChange={(event) => handleRadio(event, question, question.questionAnswer) }
                                                           value={option}
                                                           name={`option-${index}`} id={`option-${index}-${idx}`}  />
                                                    <label htmlFor={`option-${index}-${idx}`}>{option}</label>
                                                </div>
                                            ))
                                        }


                                    </div>
                                ))
                            }

                            <div  style={{ display:"flex"}} className={" justify-content-center "}>

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

export default QuizStudent;
