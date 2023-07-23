import React, {useEffect, useState} from 'react';
import {questions} from "../data/admissionTestData";
import Navbar from "../components/_App/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import swal from "@sweetalert/with-react";

const QuizStudent = () => {


    const router = useRouter();
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [answers, setAnswers] = useState([]);

    let data = {}
    useEffect(() => {}, [answers, correctAnswers]);

    const handleRadio = (event, question, answer) => {
        const value = event.target.value;

        setAnswers(prevState => ([...prevState, value]));

        if (value === answer) {
            setCorrectAnswers(correctAnswers + 1);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        data = {answers: answers}

        // post request will be here.
        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';


        try {
            const res = await axios.post('http://localhost:7000/api/v1/admission/student/submit/test', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `${Cookies.get('token')}`
                }
            });

            if(res) {
                swal({
                    title: "Registered Successfully",
                    icon: "success"
                }).then(res => {
                    if (res) {
                        router.push("/login")
                    }
                });
            }

        } catch (error) {
            console.log(error);
        }


    }


    return (
        <div>
            <Navbar/>

            <div className="container mtb-100">
                <div style={{display: "flex", justifyContent: "center"}}
                     className="row align-items-center justify-content-center">
                    <div className="col-12">
                        <h1 className={"mx-auto text-center"}>Student's Admission Quiz</h1>

                        <form action="" onSubmit={handleSubmit}>
                            {
                                questions.map((question, index) => (
                                    <div className={"m-4"} key={index}>
                                        <p className={"fw-bolder"}>{question.question}</p>
                                        {
                                            question.questionOptions.map((option, idx) => (
                                                <div key={idx}>
                                                    <input type="radio"
                                                           onChange={(event) => handleRadio(event, question, question.questionAnswer)}
                                                           value={option}
                                                           name={`option-${index}`} id={`option-${index}-${idx}`}/>
                                                    <label htmlFor={`option-${index}-${idx}`}>{option}</label>
                                                </div>
                                            ))
                                        }


                                    </div>
                                ))
                            }

                            <div style={{display: "flex"}} className={" justify-content-center "}>

                                <button type="submit" className={"default-btn"}>
                                    <i className="flaticon-checkmark"></i>
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
