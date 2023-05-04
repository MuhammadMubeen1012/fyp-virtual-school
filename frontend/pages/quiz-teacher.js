import React, {useEffect, useState} from 'react';
import {questions} from "../data/admissionTestData";
import Navbar from "../components/_App/Navbar";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import {Button, Modal} from "react-bootstrap";
import swal from "@sweetalert/with-react";
import Cookies from "js-cookie";

const QuizTeacher = (props) => {

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

    }, [answers, correctAnswers]);

    const handleRadio = (event, question, answer) => {
        const value = event.target.value;

        setAnswers(prevState => ([...prevState, value]));

        if (value === answer){
            setCorrectAnswers( prevState => prevState + 1 );
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(correctAnswers)

        console.log(answers);


        if (correctAnswers > 1){

            swal({
                text: "Test Pass",
                buttons: {
                    test: {
                        text: "Take Test",
                        value: "test",
                    }
                },
                content: (
                    <div>

                        <p>Test Pass</p>
                    </div>
                )
            })
                .then(value => {
                    switch(value){
                        case "test":
                            router.push("/dashboard-teacher");
                            break;

                        default:
                            swal.close();

                    }
                })

        }

        // post request will be here.
        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

        const dummyData = {
            "answers": ["Option01","Option01","Option01","Option01","Option01","Option01","Option01","Option01","Option01","Option01"]
        }

        try{
            const res = await axios.post('http://localhost:7000/api/v1/admission/teacher/submit/test', dummyData,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `${Cookies.get('token')}`
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
                <Toaster />
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

                    {
                        correctAnswers > 1 && showModal ?
                            <>

                            </>
                            :
                            <>

                            </>
                    }



                </div>
            </div>


        </div>
    );
};

export default QuizTeacher;
