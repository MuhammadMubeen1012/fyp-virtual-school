import React, {useState} from "react";
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card, Form, Modal, Nav} from "react-bootstrap";

const Slug = () => {
    const [eventKey, setEventKey] = useState(0);
    const [assignmentModal, setAssignmentModal] = useState(false);

    return (
        <LayoutStudent>
            {/*=============== Start of Main =================*/}
            <main>
                <h1>Overview</h1>

                <div>

                    <div
                        className=""
                        style={{
                            paddingBlock: "1rem",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <span>Unit 1</span>
                            <h3>Speaking to the world</h3>
                        </div>

                        <div>
                            <button className={"btn btn-primary"}>Next Lesson</button>
                        </div>
                    </div>

                    {/* ============= Tabs for lesson, Live Video, Assignments, Exercises, Quizes, Other Section ================= */}
                    <Nav className={"mt-5 mb-5"} fill variant="tabs" defaultActiveKey="#">
                        <Nav.Item>
                            <Nav.Link href="#" onClick={() => setEventKey(0)}>
                                Content
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => setEventKey(1)}>
                                Events
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" onClick={() => setEventKey(2)}>
                                Assignments
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4" onClick={() => setEventKey(3)}>
                                Quizes
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>


                    {/* ============= Tabs running by conditional rendering ================= */}
                    <div className="">
                        {eventKey === 0 ? (
                            <div>
                                {/*Lesson Tab*/}
                                <Card>
                                    <Card.Header>Content</Card.Header>
                                    <Card.Body>
                                        <Card.Text>Description</Card.Text>
                                        <div>
                                            <Button variant="primary">Open</Button>
                                        </div>
                                    </Card.Body>
                                </Card>{" "}
                                <br/>
                            </div>
                        ) : eventKey === 1 ? (
                            <div>
                                {/*Event Tab*/}
                                <Card>
                                    <Card.Header>Event Title</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Description</Card.Title>
                                        <Card.Text>Event Date</Card.Text>
                                        <Button variant="primary">Go to Event</Button>
                                    </Card.Body>
                                </Card>{" "}
                                <br/>
                                <Card>
                                    <Card.Header>Event Title</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Description</Card.Title>
                                        <Card.Text>Event Date</Card.Text>
                                        <Button variant="primary">Go to Event</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ) : eventKey === 2 ? (
                            <div>
                                {/*Assignments Tab*/}
                                <Card>
                                    <Card.Header>Assignment Title</Card.Header>
                                    <Card.Body>
                                        <Card.Text>Description</Card.Text>

                                        <div>
                                            <Button variant="primary">Open</Button>
                                            <Button
                                                className={"m-1"}
                                                variant="success"
                                                onClick={() => {
                                                    setAssignmentModal(true);
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </div>
                        ) : eventKey === 3 ? (
                            <div>
                                {/*Quiz Tab*/}
                                <Card>
                                    <Card.Header>Quiz Title</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Description</Card.Title>
                                        <Button
                                            variant="primary"
                                            href={"/dashboard-student/courses/english/quiz"}
                                        >
                                            Open
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    {assignmentModal && (
                        <div>
                            <Modal
                                show={assignmentModal}
                                onHide={() => setAssignmentModal(false)}
                                dialogClassName="custom-modal"
                                size={"lg"}
                                aria-labelledby="example-custom-modal-styling-title"
                                centered
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        Submit Assignment
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form
                                        handleSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <Form.Group controlId={"question"}>
                                            <Form.Label>File Name</Form.Label>
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"File Name"}
                                            />
                                        </Form.Group>

                                        <br/>
                                        <Form.Group controlId={"question"}>
                                            <Form.Label>File Link</Form.Label>
                                            <Form.Control
                                                type={"text"}
                                                className={"m-2"}
                                                placeholder={"File Link"}
                                            />
                                        </Form.Group>

                                        <br/>
                                        <Modal.Footer>
                                            <Button type={"submit"}>Submit</Button>
                                        </Modal.Footer>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    )}

                </div>

            </main>
            {/*=============== End Of Main  ==================*/}




        </LayoutStudent>
);
};

export default Slug;
