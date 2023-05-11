import React, {useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";

import {Button, Card, Dropdown, Form, Modal} from "react-bootstrap";
import {AssignmentModal, ContentModal, EventModal, QuizModal} from "../courses/[course]/[slug]";

const Exam = () => {
    const [modal, setModal] = useState({
        item: 0,
        active: false,
    });

    const [examModal, setExamModal] = useState(false);

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

                <Button
                    onClick={(e) => setExamModal(true) }
                >
                    Create Exam
                </Button>

                    {
                        examModal ?
                            <div className="create-exam">
                                <Modal
                                    show={examModal}
                                    onHide={() => setExamModal(false) }
                                    dialogClassName="custom-modal"
                                    size={"lg"}
                                    aria-labelledby="example-custom-modal-styling-title"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            Create Exam
                                        </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <Form>
                                            <Form.Group controlId={""}>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    className={"m-2"}
                                                    placeholder={"Name"}
                                                    name={"name"}
                                                />
                                            </Form.Group>
                                            <br/>
                                            <Form.Group controlId={""}>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    type={"text"}
                                                    className={"m-2"}
                                                    placeholder={"Description"}
                                                    name={"description"}
                                                />
                                            </Form.Group>
                                            <br/>
                                            <Form.Group controlId={""}>
                                                <label>Start Time</label>
                                                <br/>
                                                <div
                                                    style={{
                                                        display: "flex", justifyContent: "space-between",
                                                    }}
                                                >
                                                    <div>
                                                        <Form.Control placeholder={"Hours"} type="text" name={'hours'}/>
                                                    </div>

                                                    <div>
                                                        <Form.Control placeholder={"Minutes"} type="text" name={'minutes'}/>
                                                    </div>

                                                    <div>
                                                        <Form.Control placeholder={"Seconds"} type="text" name={'seconds'}/>
                                                    </div>
                                                </div>
                                            </Form.Group>{" "}
                                            <br/>
                                            <Form.Group controlId={""}>
                                                <label>Duration</label>
                                                <div
                                                    style={{
                                                        display: "flex", justifyContent: "space-between",
                                                    }}
                                                >
                                                    <div>
                                                        <Form.Control placeholder={"Hours"} type="text" name={'dHours'}/>
                                                    </div>

                                                    <div>
                                                        <Form.Control placeholder={"Minutes"} type="text" name={'dMinutes'}/>
                                                    </div>

                                                    <div>
                                                        <Form.Control placeholder={"Seconds"} type="text" name={'dSeconds'}/>
                                                    </div>
                                                </div>
                                            </Form.Group>{" "}
                                            <br/>
                                            <br/>
                                            <Modal.Footer>
                                                <Button type={"submit"}>Submit</Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </div> : ""

                    }


                </div>

                <br/><br/>
                <Card>
                    <Card.Header>Title</Card.Header>
                    <Card.Body>
                        <Card.Text>Description</Card.Text>

                        <div
                            style={{
                                display: "flex",
                                gap: "0.5rem",
                            }}
                        >
                            <Button variant="primary">View Submissions</Button>

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

                        </div>


                    </Card.Body>
                </Card>



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




