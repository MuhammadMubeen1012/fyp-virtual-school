import React, {useEffect, useState} from 'react';
import {Button, Card, Form, Modal} from "react-bootstrap";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import {createObjectiveExam} from "./examController";
import {useRouter} from "next/router";

const ObjectiveExam = () => {
    const router = useRouter();


    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctOption, setCorrectOption] = useState("");

    const [examId, setExamId] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setExamId(router.query.examId);
            console.log(router.query.examId);
        }
    }, [router.isReady]);


    return (
        <div>
            <LayoutTeacher>
                {/*=============== Start of main ================= */}
                <main>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(questions);
                        if (examId !== null && questions.length !== 0) {

                            createObjectiveExam(examId, questions).then((res) => {
                                    console.log(res);
                                    // router.back();
                                }
                            );
                        }
                    }}>
                        <h1>Add Questions</h1>
                        <br/>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Button
                                onClick={() => setModal(true)}
                            >
                                Add Question
                            </Button>

                            <Button type={'submit'}>
                                Submit
                            </Button>
                        </div>
                    </Form>

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
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        setQuestions(() => ([...questions, {
                                            question: question,
                                            questionOptions: [option1, option2, option3, option4],
                                            questionAnswer: correctOption,
                                        }]))

                                        setModal(false);
                                        setQuestion("");
                                        setOption1("");
                                        setOption2("");
                                        setOption3("");
                                        setOption4("");
                                        setCorrectOption("");

                                    }
                                    }>

                                        <Form.Group controlId={"question"}>
                                            <Form.Label>Question</Form.Label>
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"Type Question here..."}
                                                name={"question"}
                                                onChange={(e) => setQuestion(e.target.value)}
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
                                                onChange={(e) => setOption1(e.target.value)}

                                            />
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"Option 2"}
                                                name={"question-02"}
                                                onChange={(e) => setOption2(e.target.value)}
                                            />
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"Option 3"}
                                                name={"question-03"}
                                                onChange={(e) => setOption3(e.target.value)}

                                            />
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"Option 4"}
                                                name={"question-04"}
                                                onChange={(e) => setOption4(e.target.value)}

                                            />

                                            <br/>
                                            <Form.Label>Correct Answer</Form.Label>
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"Correct Answer"}
                                                name={"question-ans"}
                                                onChange={(e) => setCorrectOption(e.target.value)}

                                            />

                                        </Form.Group>


                                        <Modal.Footer>
                                            <div style={{
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


                    <br/>
                    <br/>

                    {
                        questions.map((q, index) => (<Card key={index}>
                                <Card.Header>Q{index + 1}</Card.Header>
                                <Card.Body>
                                    <Card.Text>{q.question}</Card.Text>
                                    <Card.Text>{q.option01}</Card.Text>
                                    <Card.Text>{q.option02}</Card.Text>
                                    <Card.Text>{q.option03}</Card.Text>
                                    <Card.Text>{q.option04}</Card.Text>
                                    <Card.Text>{q.answer}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }


                </main>
                {/*=============== End Of Main  ==================*/
                }


            </LayoutTeacher>
        </div>
    )
        ;
};

export default ObjectiveExam;
