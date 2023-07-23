import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import {Button, Card, Form, Modal} from "react-bootstrap";



const AddQuizQuestions = () => {

    const [question, setQuestion] = useState({
        question: "",
        option01: "",
        option02: "",
        option03: "",
        option04: "",
        answer: "",
    });
    const [questions, setQuestions] = useState([]);
    const [modal, setModal] = useState(false);


    useEffect(() => {

    }, [question, questions]);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(question);
        setQuestions(() => ([...questions, question]))
        console.log(questions);
        setModal(false);

    }

    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>

                <h1>Add Reading Comprehension</h1>
                <br/>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <div style={{display: "flex", gap: "0.5rem"}}>
                        <Button
                            onClick={() => setModal(true)}
                        >
                            Add Passage
                        </Button>
                        <Button
                            onClick={() => setModal(true)}
                        >
                            Add Question
                        </Button>
                    </div>



                    <Button>
                        Submit
                    </Button>
                </div>


                {
                    modal &&
                    <div>

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
                                    Add Question
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>

                                    <Form.Group controlId={"question"}>
                                        <Form.Label>Question</Form.Label>
                                        <Form.Control
                                            type={"text"}
                                            className={"m-2"}
                                            placeholder={"Type Question here..."}
                                            name={"question"}
                                            onChange={(e) => setQuestion((prev) => {
                                                return {
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
                                            name={"question-o1"}
                                            onChange={(e) => setQuestion((prev) => {
                                                return {
                                                    ...prev,
                                                    option01: e.target.value,
                                                }
                                            })}
                                        />
                                        <Form.Control
                                            type={"text"}
                                            className={"m-2"}
                                            placeholder={"Option 2"}
                                            name={"question-02"}
                                            onChange={(e) => setQuestion((prev) => {
                                                return {
                                                    ...prev,
                                                    option02: e.target.value,
                                                }
                                            })}
                                        />
                                        <Form.Control
                                            type={"text"}
                                            className={"m-2"}
                                            placeholder={"Option 3"}
                                            name={"question-03"}
                                            onChange={(e) => setQuestion((prev) => {
                                                return {
                                                    ...prev,
                                                    option03: e.target.value,
                                                }
                                            })}
                                        />
                                        <Form.Control
                                            type={"text"}
                                            className={"m-2"}
                                            placeholder={"Option 4"}
                                            name={"question-04"}
                                            onChange={(e) => setQuestion((prev) => {
                                                return {
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
                                            name={"question-ans"}
                                            onChange={(e) => setQuestion((prev) => {
                                                return {
                                                    ...prev,
                                                    answer: e.target.value,
                                                }
                                            })}
                                        />

                                    </Form.Group>


                                    <Modal.Footer>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end"
                                            }}
                                        >
                                            <Button type={"submit"}>Add</Button>
                                        </div>
                                    </Modal.Footer>

                                </Form>
                            </Modal.Body>

                        </Modal>


                    </div>
                }


                <br/><br/>
                <Card>
                    <Card.Header>Q1</Card.Header>
                    <Card.Body>
                        <Card.Text>question description</Card.Text>
                    </Card.Body>
                </Card>


            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutTeacher>
    );
};

export default AddQuizQuestions;
