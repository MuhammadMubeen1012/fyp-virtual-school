import React, {useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Button, Card, Dropdown, Form, Modal} from "react-bootstrap";
import {AssignmentModal, ContentModal, EventModal, QuizModal} from "../courses/course/[slug]";

const Exam = () => {
    const [modal, setModal] = useState({
        item: 0,
        active: false,
    });

    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Exam Details</h1>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >

                    {/* ============== Dropdown Menu to create Assignments, Quiz, etc ========================== */}
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Create
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setModal({item: 1, active: true})}>
                                    Subjective
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => setModal({item: 2, active: true})}>
                                    Objective
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    {/* ============== Dropdown Menu Ends Here =================== */}


                    {/* ==================== Events Modals according to the Create event from Dropdown ========================= */}
                    <div className={""}>
                        <Modal
                            show={modal.active}
                            onHide={() => setModal({item: 0, active: false})}
                            dialogClassName="custom-modal"
                            size={"lg"}
                            aria-labelledby="example-custom-modal-styling-title"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    {modal.item === 1 ? (
                                        <div>Create Subjective Exam</div>
                                    ) : modal.item === 2 ? (
                                        <div>Create Objective Exam</div>
                                    ) : ""
                                    }
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                {modal.item === 1 ? (
                                    <div>
                                        {/* Subjective Exam */}
                                        <SubjectiveExam />
                                    </div>
                                ) : modal.item === 2 ? (
                                    <div>
                                        {/* Objective Exam */}
                                        <ObjectiveExam />
                                    </div>
                                ): (
                                    ""
                                )}
                            </Modal.Body>
                        </Modal>
                    </div>
                    {/* ==================== Events Modal Code Ends Here ==================================  */}





                </div>

                <br/><br/>
                <Card>
                    <Card.Header>Title</Card.Header>
                    <Card.Body>
                        <Card.Text>Description</Card.Text>
                        <Button variant="primary">View Submissions</Button>
                    </Card.Body>
                </Card>


            </main>
            {/*=============== End Of Main  ==================*/}
        </LayoutTeacher>
    );
};

export default Exam;




export function SubjectiveExam(){

    return(
        <div>
            <Form
                handleSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Form.Group controlId={"question"}>
                    <Form.Label>Question 01</Form.Label>
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Type Question here..."}
                    />
                </Form.Group>
                <br/>

                <Form.Group controlId={"question"}>
                    <Form.Label>Question 02</Form.Label>
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Type Question here..."}
                    />
                </Form.Group>
                <br/>

                <Form.Group controlId={"question"}>
                    <Form.Label>Question 03</Form.Label>
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Type Question here..."}
                    />
                </Form.Group>
                <br/>

                <div
                    style={{display: "flex", justifyContent: "space-between"}}
                >
                    <Button type={"submit"}>Submit</Button>
                    <Button type={"submit"}>Next</Button>
                </div>
            </Form>
        </div>
    )
}


export function ObjectiveExam(){

    return(
        <div>
            <Form
                handleSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Form.Group controlId={"question"}>
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Type Question here..."}
                    />
                </Form.Group>
                <br/>

                <Form.Label>Options</Form.Label>
                <Form.Group controlId={"question"}>
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Option 1"}
                    />
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Option 2"}
                    />
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Option 3"}
                    />
                    <Form.Control
                        type={"text"}
                        className={"m-2"}
                        placeholder={"Option 4"}
                    />
                </Form.Group>

                <br/>
                <Form.Group controlId={"question"}>
                    <Form.Label>Marks</Form.Label>
                    <Form.Control
                        type={"number"}
                        className={"m-2"}
                        placeholder={"Marks"}
                    />
                </Form.Group>

                <div
                    style={{display: "flex", justifyContent: "space-between"}}
                >
                    <Button type={"submit"}>Submit</Button>
                    <Button type={"submit"}>Next</Button>
                </div>
            </Form>
        </div>
    )
}




