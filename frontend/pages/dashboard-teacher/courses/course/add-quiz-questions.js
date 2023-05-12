import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import {Button, Form} from "react-bootstrap";


const AddQuizQuestions = () => {

    const [q1, setQ1] = useState({
        question: "",
        option01: "",
        option02: "",
        option03: "",
        option04: "",
        answer: "",
    });

    const [q2, setQ2] = useState({
        question: "",
        option01: "",
        option02: "",
        option03: "",
        option04: "",
        answer: ""
    });

    const [q3, setQ3] = useState({
        question: "",
        option01: "",
        option02: "",
        option03: "",
        option04: "",
        answer: ""
    });

    const [questions, setQuestions] = useState([{

    }]);

    const addQuestion = (e) => {

        const newQuestion = {
            "question": "Question01",
            "questionOptions": [
                "Option01",
                "Option02",
                "Option03",
                "Option04"
            ],
            "questionAnswer": "Option01"
        };



    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(q1);
        console.log(q2)
        console.log(q3)

    }

    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Add Questions</h1>
                <br/>


                <div className="">
                    <Form onSubmit={handleSubmit}>

                        {/* ======================== Question 01 ====================== */}

                        <Form.Group controlId={"question"}>
                            <Form.Label>Question 01</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Type Question here..."}
                                name={"q1"}
                                onChange={(e) => setQ1((prev) => {
                                    return{
                                        ...prev,
                                        question: e.target.value,
                                    }
                                })}
                            />
                        </Form.Group>
                        <br/>

                        <Form.Label>Options</Form.Label>
                        <Form.Group controlId={"question"}>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 1"}
                                name={"q1-o1"}
                                onChange={(e) => setQ1((prev) => {
                                    return{
                                        ...prev,
                                        option01: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 2"}
                                name={"q1-02"}
                                onChange={(e) => setQ1((prev) => {
                                    return{
                                        ...prev,
                                        option02: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 3"}
                                name={"q1-03"}
                                onChange={(e) => setQ1((prev) => {
                                    return{
                                        ...prev,
                                        option03: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 4"}
                                name={"q1-04"}
                                onChange={(e) => setQ1((prev) => {
                                    return{
                                        ...prev,
                                        option04: e.target.value,
                                    }
                                })}
                            />

                            <br/>
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Correct Answer"}
                                name={"q1-ans"}
                                onChange={(e) => setQ1((prev) => {
                                    return{
                                        ...prev,
                                        answer: e.target.value,
                                    }
                                })}
                            />

                        </Form.Group>




                        <br/><br/><br/>
                        {/* ============================ Question 02 ================= */}
                        <Form.Group controlId={"question"}>
                            <Form.Label>Question 02</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Type Question here..."}
                                name={"q2"}
                                onChange={(e) => setQ2((prev) => {
                                    return{
                                        ...prev,
                                        question: e.target.value,
                                    }
                                })}
                            />
                        </Form.Group>
                        <br/>

                        <Form.Label>Options</Form.Label>
                        <Form.Group controlId={"question"}>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 1"}
                                name={"q2-o1"}
                                onChange={(e) => setQ2((prev) => {
                                    return{
                                        ...prev,
                                        option01: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 2"}
                                name={"q2-02"}
                                onChange={(e) => setQ2((prev) => {
                                    return{
                                        ...prev,
                                        option02: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 3"}
                                name={"q2-03"}
                                onChange={(e) => setQ2((prev) => {
                                    return{
                                        ...prev,
                                        option03: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 4"}
                                name={"q2-04"}
                                onChange={(e) => setQ2((prev) => {
                                    return{
                                        ...prev,
                                        option04: e.target.value,
                                    }
                                })}
                            />

                            <br/>
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Correct Answer"}
                                name={"q2-ans"}
                                onChange={(e) => setQ2((prev) => {
                                    return{
                                        ...prev,
                                        answer: e.target.value,
                                    }
                                })}
                            />

                        </Form.Group>


                        <br/><br/><br/>
                        {/* ============================ Question 03 ================= */}
                        <Form.Group controlId={"question"}>
                            <Form.Label>Question 03</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Type Question here..."}
                                name={"q2"}
                                onChange={(e) => setQ3((prev) => {
                                    return{
                                        ...prev,
                                        question: e.target.value,
                                    }
                                })}
                            />
                        </Form.Group>
                        <br/>

                        <Form.Label>Options</Form.Label>
                        <Form.Group controlId={"question"}>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 1"}
                                name={"q3-o1"}
                                onChange={(e) => setQ3((prev) => {
                                    return{
                                        ...prev,
                                        option01: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 2"}
                                name={"q3-02"}
                                onChange={(e) => setQ3((prev) => {
                                    return{
                                        ...prev,
                                        option02: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 3"}
                                name={"q3-03"}
                                onChange={(e) => setQ3((prev) => {
                                    return{
                                        ...prev,
                                        option03: e.target.value,
                                    }
                                })}
                            />
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Option 4"}
                                name={"q3-04"}
                                onChange={(e) => setQ3((prev) => {
                                    return{
                                        ...prev,
                                        option04: e.target.value,
                                    }
                                })}
                            />

                            <br/>
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Correct Answer"}
                                name={"q3-ans"}
                                onChange={(e) => setQ3((prev) => {
                                    return{
                                        ...prev,
                                        answer: e.target.value,
                                    }
                                })}
                            />

                        </Form.Group>



                        <div
                            style={{display: "flex", justifyContent: "flex-end"}}
                        >
                            <Button type={"submit"}>Submit</Button>
                        </div>
                    </Form>
                </div>



            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutTeacher>
    );
};

export default AddQuizQuestions;
