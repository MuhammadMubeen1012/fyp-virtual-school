import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";

import {Button, Card, Dropdown, Form, Modal} from "react-bootstrap";
import {AssignmentModal, ContentModal, EventModal, QuizModal} from "../courses/course/[slug]";
import {useRouter} from "next/router";
import {createExam, getExams} from "./examController";

const Exam = () => {

    const router = useRouter();
    const [course, setCourse] = useState({});
    const [modal, setModal] = useState({
        item: 0,
        active: false,
    });
    const [exams, setExams] = useState([]);
    const [loadingExams, setLoadingExams] = useState(false);

    const [examModal, setExamModal] = useState(false);
    useEffect(() => {
        if (router.isReady) {
            console.log(router.query)
            setCourse(router.query);
            getExams(router.query.courseId).then((res) => {
                setExams(res.exam);
                console.log(res);
            });
        }
    }, [router.isReady]);

    useEffect(() => {
        if (exams.length > 0) {
            setLoadingExams(true);
            console.log('exams', exams);
        }
    }, [exams]);
    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Exam Details</h1>

                <div style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>

                    <Button
                        onClick={(e) => setExamModal(true)}
                    >Create Exam</Button>

                    {
                        examModal &&
                        <CreateExamModal
                            courseId={course.courseId}
                            examModal={examModal}
                            setExamModal={setExamModal}
                        />
                    }

                </div>

                <br/><br/>

                {
                    loadingExams && exams ? exams.map((exam) => {
                        return <Card>
                            <Card.Header>{exam.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>{exam.description}</Card.Text>

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
                                            <Dropdown.Item onClick={() => {
                                                window.location.href = `/dashboard-teacher/exam/subjective-exam?examId=${exam._id}`
                                            }}>
                                                Subjective
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => {
                                               window.location.href = `/dashboard-teacher/exam/objective-exam?examId=${exam._id}`
                                            }}>
                                                Objective
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* ============== Dropdown Menu Ends Here =================== */}

                                </div>


                            </Card.Body>
                        </Card>

                    }) : ""
                }


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
                                    <SubjectiveExam/>
                                </div>
                            ) : modal.item === 2 ? (
                                <div>
                                    {/* Objective Exam */}
                                    <ObjectiveExam/>
                                </div>
                            ) : (
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


export function CreateExamModal({examModal, setExamModal, courseId}) {
    const sumbitHandle = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.description.value);
        console.log(e.target.date.value);
        console.log(e.target.totalMarks.value);
        console.log(e.target.passingMarks.value);
        console.log(e.target.hours.value)
        console.log(e.target.minutes.value)
        console.log(e.target.seconds.value)
        console.log(e.target.dHours.value)
        console.log(e.target.dMinutes.value)
        console.log(e.target.dSeconds.value)
        createExam(courseId, {
            name: e.target.name.value,
            description: e.target.description.value,
            passMarks: e.target.passingMarks.value,
            totalMarks: e.target.totalMarks.value,
            duration: e.target.dMinutes.value,
            examDate: e.target.date.value,
            examTime: e.target.hours.value + ":" + e.target.minutes.value + ":" + e.target.seconds.value,
        }).then((res) => {
            console.log(res);
            setExamModal(false);
            window.location.reload();
        })
    }

    return (
        <>
            <div className="create-exam">
                <Modal
                    show={examModal}
                    onHide={() => setExamModal(false)}
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
                        <Form onSubmit={sumbitHandle}>
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
                            <Form.Group controlId={""}>
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type={"date"}
                                    className={"m-2"}
                                    placeholder={"Date"}
                                    name={"date"}
                                />
                            </Form.Group>
                            <Form.Group controlId={""}>
                                <Form.Label>Total Marks</Form.Label>
                                <Form.Control
                                    type={"text"}
                                    className={"m-2"}
                                    placeholder={"Total Marks"}
                                    name={"totalMarks"}
                                />
                            </Form.Group>
                            <Form.Group controlId={""}>
                                <Form.Label>Passing Marks</Form.Label>
                                <Form.Control
                                    type={"text"}
                                    className={"m-2"}
                                    placeholder={"Passing Marks"}
                                    name={"passingMarks"}
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
                                        <Form.Control placeholder={"Minutes"} type="text"
                                                      name={'minutes'}/>
                                    </div>

                                    <div>
                                        <Form.Control placeholder={"Seconds"} type="text"
                                                      name={'seconds'}/>
                                    </div>
                                </div>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId={""}>
                                <label>Duration</label>
                                <div
                                    style={{
                                        display: "flex", justifyContent: "space-between",
                                    }}
                                >
                                    <div>
                                        <Form.Control placeholder={"Hours"} type="text"
                                                      name={'dHours'}/>
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
                                <Button type={"submit"}>Create</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>

        </>
    );
};


export function SubjectiveExam() {

    return (
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


export function ObjectiveExam() {

    return (
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







