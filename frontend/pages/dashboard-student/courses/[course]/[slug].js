import React, {useEffect, useState} from "react";
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card, Form, Modal, Nav} from "react-bootstrap";
import {
    getAssignmentsByLesson,
    getContentsByLesson,
    getEventsByLesson,
    getQuizesByLesson, submitAssignment
} from "../../controllers/coursesController";
import {useRouter} from "next/router";

const Slug = () => {

    const router = useRouter();
    const [eventKey, setEventKey] = useState(0);
    const [assignmentModal, setAssignmentModal] = useState(false);
    const [contentData, setContentData] = useState();
    const [eventData, setEventData] = useState();
    const [assignmentsData, setAssignmentsData] = useState();
    const [quizData, setQuizData] = useState();

    const [formAssignmentData, setFormAssignmentData] = useState();



    useEffect(() => {

        getContentsByLesson(router.query.lessonID).then(res => setContentData(res))
        getEventsByLesson(router.query.lessonID).then(res => setEventData(res))
        getAssignmentsByLesson(router.query.lessonID).then(res => setAssignmentsData(res))
        getQuizesByLesson(router.query.lessonID).then(res => setQuizData(res))


    }, []);


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
                    <div>
                        {eventKey === 0 ? (
                            <div>
                                {/*Content Tab*/}
                                <ContentTab
                                    contentData={contentData}
                                />
                                <br/>
                            </div>
                        ) : eventKey === 1 ? (
                            <div>
                                {/*Event Tab*/}
                                <EventsTab
                                    eventData={eventData}
                                />
                                <br/>
                            </div>
                        ) : eventKey === 2 ? (
                            <div>
                                {/*Assignments Tab*/}
                                <AssignmentsTab
                                    assignmentsData={assignmentsData}
                                    assignmentModal={assignmentModal}
                                    setAssignmentModal={setAssignmentModal}
                                    formAssignmentData={formAssignmentData}
                                    setFormAssignmentData={setFormAssignmentData}
                                />
                                <br/>
                            </div>
                        ) : eventKey === 3 ? (
                            <div>
                                {/*Quiz Tab*/}
                                <QuizTab
                                    quizData={quizData}
                                />
                                <br/>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    {/* ============= Tabs running by conditional rendering ================= */}






                </div>

            </main>
            {/*=============== End Of Main  ==================*/}

        </LayoutStudent>
);
};

export default Slug;



export const ContentTab = ({contentData}) => {
    const router = useRouter();

    return(
        <>
            {
                contentData?.map((item, idx) => (
                    <>
                        <Card>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <div>
                                    <Button
                                        target={"_blank"}
                                        variant="primary"
                                        onClick={() => {
                                            router.push("https://www.google.com")
                                            // window.location.href = ""
                                        }}
                                    >
                                        Open
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <br/>
                    </>
                ))
            }

        </>
    )
}


export const EventsTab = ({eventData}) => {
    const router = useRouter();

    return(
        <>

            {
                eventData?.map((item, idx) =>(
                    <>
                        <Card>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{item.description}</Card.Title>
                                <Card.Text>{item.eventDate.toLocaleString()}</Card.Text>
                                <Button variant="primary"
                                    target={"_blank"}
                                    onClick={() => {
                                        // router.push(`https://${item.link}`)
                                    }}
                                >
                                    Go to Event
                                </Button>
                            </Card.Body>
                        </Card>
                        <br/>
                    </>
                ))
            }



        </>
    )
}


export const AssignmentsTab = ({assignmentsData, assignmentModal, setAssignmentModal, formAssignmentData, setFormAssignmentData}) => {
    const router = useRouter();

    return(
        <>
            {
                assignmentsData?.map((item, idx) => (
                    <>
                        <Card>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>{item.description}</Card.Text>

                                <div>
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            router.push(item.fileLink)
                                        }}
                                    >
                                        Open
                                    </Button>
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

                            <AssignmentModal
                                assignmentsData={assignmentsData}
                                assignmentModal={assignmentModal}
                                setAssignmentModal={setAssignmentModal}
                                formAssignmentData={formAssignmentData}
                                setFormAssignmentData={setFormAssignmentData}
                                id={item._id}
                            />
                        </Card>



                    </>
                ))

            }

        </>
    )
}


export const AssignmentModal = ({assignmentsData, assignmentModal, setAssignmentModal, formAssignmentData, setFormAssignmentData, id}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formAssignmentData);

        submitAssignment(id , {
            "fileName": formAssignmentData.fileName,
            "fileLink": formAssignmentData.fileLink,
        } )
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormAssignmentData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    return(
        <>

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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId={"question"}>
                            <Form.Label>File Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"File Name"}
                                name={"fileName"}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <br/>
                        <Form.Group controlId={"question"}>
                            <Form.Label>File Link</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"File Link"}
                                name={"fileLink"}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <br/>
                        <Modal.Footer>
                            <Button type={"submit"}>Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}


export const QuizTab = ({quizData}) => {

    return(
        <>
            {
                quizData?.map((item, idx) => (
                    <>
                        <Card>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{item.description}</Card.Title>
                                <Button
                                    variant="primary"
                                    href={"/dashboard-student/courses/english/quiz"}
                                >
                                    Open
                                </Button>
                            </Card.Body>
                        </Card><br/>
                    </>
                ))
            }

        </>
    )
}











