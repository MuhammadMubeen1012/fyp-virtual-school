import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import {Button, Card, Form, Modal} from "react-bootstrap";

const SubjectiveExam = () => {

    const [question, setQuestion] = useState({
        question: "",
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
        <div>
            <LayoutTeacher>
                {/*=============== Start of main ================= */}
                <main>

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
                                                    return{
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
        </div>
    );
};

export default SubjectiveExam;
