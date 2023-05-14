import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import {Button, Card, Form, Modal} from "react-bootstrap";
import {createSubjectiveExam} from "./examController";
import {useRouter} from "next/router";

const SubjectiveExam = () => {
    const router = useRouter();
    const [question, setQuestion] = useState({
        question: "",
    });
    const [questions, setQuestions] = useState([]);
    const [modal, setModal] = useState(false);
    const [examId, setExamId] = useState(null);
    const [submit, setSubmit] = useState(false);


    useEffect(() => {
        if (router.isReady) {
            setExamId(router.query.examId);
            console.log(router.query.examId);
        }
    }, [router.isReady]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(question);
        setQuestions(() => ([...questions, question]))
        setModal(false);
    }


    return (
        <div>
            <LayoutTeacher>
                {/*=============== Start of main ================= */}
                <Form onSubmit={
                    (e) => {
                        e.preventDefault();
                        console.log(questions);
                        setSubmit(true);

                        createSubjectiveExam(examId, questions).then((res) => {
                            console.log(res);
                            // window.location.reload();
                        });
                    }
                }>

                    <h1>Add Questions</h1>
                    <br/>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Button onClick={
                            (e) => {
                                e.preventDefault();
                                setModal(true)
                            }
                        }>
                            Add Question
                        </Button>

                        <Button type={"submit"}>
                            Submit
                        </Button>
                    </div>
                </Form>
                <br/>
                {
                    questions.map((res, index) => {
                        return (
                            <div key={index}>
                                <Card>
                                    <Card.Header>Q{index + 1}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>{res.question}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </div>
                        )
                    })
                }
                <br/>
                <br/>
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


                {/*=============== End Of Main  ==================*/}


            </LayoutTeacher>
        </div>
    );
};

export default SubjectiveExam;
