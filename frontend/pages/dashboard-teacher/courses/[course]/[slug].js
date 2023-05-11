import React, {useEffect, useState} from 'react';
import {Button, Card, Dropdown, Form, Modal, Nav} from "react-bootstrap";
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import {useRouter} from "next/router";
import {
    getLesson,
    getEvents,
    getQuizes,
    getAssignments,
    addNewContent,
    addNewAssignment,
    addNewEvent,
    addNewQuiz,
    deleteEvent,
    deleteAssignment,
    deleteQuiz
} from "../../../../components/Controllers/CourseController";
import Link from "next/link";
import VectorSvg from "../../../../components/Common/VectorSvg";


const Slug = () => {
    const [modal, setModal] = useState({
        item: 0, active: false,
    });
    const [eventKey, setEventKey] = useState(0);
    const [isModalAddQuestion, setIsModalAddQuestion] = useState(false);

    const [lessonLink, setLessonLink] = useState("");
    const [lesson, setLesson] = useState({}); // lesson data
    const [lessonLoading, setLessonLoading] = useState(false);

    const [contentLink, setContentLink] = useState([]);
    const [content, setContent] = useState([]);
    const [contentLoading, setContentLoading] = useState(false);

    const [eventsLink, setEventsLink] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventsLoading, setEventsLoading] = useState(false);

    const [quizesLink, setQuizesLink] = useState([]);
    const [quizes, setQuizes] = useState([]);
    const [quizesLoading, setQuizesLoading] = useState(false);

    const [assignments, setAssignments] = useState([]);
    const [assignmentsLoading, setAssignmentsLoading] = useState(false);
    const [assignmentsLink, setAssignmentsLink] = useState([]);

    const router = useRouter();
    useEffect(() => {
        const lesson_id = router.query['slug'];
        console.log(lesson_id);
        setLessonLink(lesson_id);


        if (lesson_id !== undefined) {
            getLesson(lesson_id).then(data => {
                const lesson = data
                setLesson(lesson);
                console.log('lesson', lesson);
                const lessonId = lesson._id;


                setContent(lesson.content);
                setContentLink(lesson.content.map((res) => res._id));
                console.log('content', lesson.content);

                getEvents(lessonId).then(obj => {
                    const events = obj
                    console.log('events', obj);
                    setEvents(events);
                    setEventsLink(events.map((res) => res._id));
                    console.log('events', events);
                });

                getQuizes(lessonId).then(r => {
                    const quizes = r;
                    setQuizes(quizes);
                    setQuizesLink(quizes.map((res) => res._id));
                    console.log('quizes', quizes);
                });

                getAssignments(lessonId).then(r => {
                    const assignments = r;
                    setAssignments(assignments);
                    setAssignmentsLink(assignments.map((res) => res._id));
                    console.log('assignments', assignments);
                });


            }).catch(e => console.log(e));
        }
    }, []);

    useEffect(() => {
        if (lesson !== undefined && lessonLink !== undefined && lessonLoading === false) {
            console.log(lesson);
            setLessonLoading(true);
        }
    }, [lesson]);

    useEffect(() => {
        if (content !== undefined && contentLink !== undefined && contentLoading === false) {
            console.log(content);
            setContentLoading(true);
        }
    }, [content]);

    useEffect(() => {
        if (events !== undefined && eventsLink !== undefined && eventsLoading === false) {
            console.log(events);
            setEventsLoading(true);
        }
    }, [events]);

    useEffect(() => {
        if (quizes !== undefined && quizesLink !== undefined && quizesLoading === false) {
            console.log(quizes);
            setQuizesLoading(true);
        }
    }, [quizes]);

    useEffect(() => {
        if (assignments !== undefined && assignmentsLink !== undefined && assignmentsLoading === false) {
            console.log(assignments);
            setAssignmentsLoading(true);
        }
    }, [assignments]);

    return (<LayoutTeacher>
        {/*=============== Start of Main ================= */}
        <main>
            <h1>Overview</h1>

            <div
                className=""
                style={{
                    paddingBlock: "1rem", display: "flex", justifyContent: "space-between",
                }}
            >
                <div>
                    <span>{lessonLoading ? lesson.name : ""}</span>
                    <h3>{lessonLoading ? lesson.description : ""}</h3>
                </div>

                <div>
                    <button className={"btn btn-primary"}>Next Lesson</button>
                </div>
            </div>

            <br/>


            {/* ============== Dropdown Menu to create Assignments, Quiz, etc ========================== */}
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Create
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setModal({item: 1, active: true})}>
                        Content
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setModal({item: 2, active: true})}>
                        Events
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setModal({item: 3, active: true})}>
                        Assignment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setModal({item: 4, active: true})}>
                        Quiz
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
                            {modal.item === 1 ? (<div>Add Content</div>) : modal.item === 2 ? (
                                <div>Add Event</div>) : modal.item === 3 ? (
                                <div>Add Assignment</div>) : modal.item === 4 ? (<div>Add Quiz</div>) : ("")}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {modal.item === 1 ? (<div>
                            {/* Content Modal */}
                            <ContentModal lessonId={lessonLink}/>
                        </div>) : modal.item === 2 ? (<div>
                            {/* Event Modal */}
                            <EventModal lessonId={lessonLink}/>
                        </div>) : modal.item === 3 ? (<div className="">
                            {/* Assignments Modal */}
                            <AssignmentModal lessonId={lessonLink}/>
                        </div>) : modal.item === 4 ? (<div className="">
                            {/*  Quiz Modal  */}
                            <QuizModal lessonId={lessonLink}/>
                        </div>) : ("")}
                    </Modal.Body>
                </Modal>
            </div>
            {/* ==================== Events Modal Code Ends Here ==================================  */}


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
            {/* =========== Tabs End Here ================  */}


            {/* ============= Tabs running by conditional rendering ================= */}
            <div className="">
                {
                    eventKey === 0 ? <div>
                        {/*Lesson Tab*/}
                        {contentLoading && content && content.length > 0 ? content.map((item, index) => {
                            return (<div key={index}>
                                <ContentData content={item}/>
                                <br/>
                            </div>)
                        }) : ""}
                        {/*<ContentData/>*/}
                    </div> : eventKey === 1 ? <div>
                        {/*Event Tab*/}
                        {eventsLoading && events && events.length > 0 ? events.map((item, index) => {
                            return (<div key={index}>
                                <EventData content={item}/>
                                <br/>
                            </div>)
                        }) : ""}
                    </div> : eventKey === 2 ? <div>
                        {/*Assignments Tab*/}
                        {assignmentsLoading && assignments && assignments.length > 0 ? assignments.map((item, index) => {
                            return (<div key={index}>
                                <AssignmentData content={item}/>
                            </div>)
                        }) : ""}
                    </div> : eventKey === 3 ? <div>
                        {/*Quiz Tab*/}
                        {quizesLoading && quizes && quizes.length > 0 ? quizes.map((item, index) => {
                            return (<div key={index}>
                                <QuizData content={item} onChange={setIsModalAddQuestion}/>

                            </div>)
                        }) : ""}
                    </div> : ""
                }


                {isModalAddQuestion && (<div>
                    <QuizAddQuestionsModal isCheck={isModalAddQuestion} onChange={setIsModalAddQuestion}/>
                </div>)}
            </div>
            {/* =============      Tabs running code Ends here       ================== */}


        </main>
        {/* =================  End Of Main  ================== */}


        {/* ============== start of Right side ======================== */}
        <div className="right">
            <div className="profile">
                <div className="info">
                    <p>
                        Hey, <b>Teacher</b>
                    </p>
                </div>

                <div className="profile-photo"></div>
            </div>

            {/*====================== Start of Recent Updates ==================== */}
            <div className="recent-updates">
                <h2>Notice Board</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <h3>- UX</h3>
                        </div>

                        <div className="message">
                            <p>Assignment due 20 March</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>

                    <div className="update">
                        <div className="profile-photo">
                            <h3>- SEO</h3>
                        </div>

                        <div className="message">
                            <p>Assignment due 21 March</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>

                    <div className="update">
                        <div className="profile-photo">
                            <h3>- SE</h3>
                        </div>

                        <div className="message">
                            <p>Assignment due 25 March</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>
            {/*====================== End of Recent Updates ====================== */}
        </div>
        {/*============= End of left Side ============================= */}
    </LayoutTeacher>);
};

export default Slug;


// ================================== Modals for Creating Events  ==============================================
export function ContentModal({lessonId}) {
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value, link: e.target.link.value,
        };
        addNewContent(lessonId, data).then(r => console.log(r))
        console.log(data)

    }


    return (<>

        <Form onSubmit={submitHandler}>
            <Form.Group controlId={""}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    name={"name"}
                    placeholder={"Name"}
                />
            </Form.Group>
            <Form.Group controlId={""}>
                <Form.Label>File Link</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    name={"link"}
                    placeholder={"File Link"}
                />
            </Form.Group>

            <br/>
            <Modal.Footer>
                <Button type={'submit'}>Submit</Button>
            </Modal.Footer>
        </Form>

    </>)
}


export function EventModal({lessonId}) {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            description: e.target.description.value,
            eventDate: e.target.eventDate.value,
            duration: e.target.duration.value,
            eventPassword: e.target.eventPassword.value,
            eventLink: e.target.eventLink.value,
        };
        addNewEvent(lessonId, data).then(r => console.log(r))
        console.log(data)
    }
    return (<>

        <Form onSubmit={submitHandler}>
            <Form.Group controlId={""}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    placeholder={"Title"}
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
            </Form.Group>{" "}
            <br/>
            <Form.Group controlId={""}>
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type={"date"}
                    className={"m-2"}
                    placeholder={"Date"}
                    name={"eventDate"}
                />
            </Form.Group>{" "}
            <br/>
            <Form.Group controlId={""}>
                <Form.Label>Duration</Form.Label>
                <div
                    style={{
                        display: "flex", justifyContent: "space-between",
                    }}
                >
                    <div>
                        <label htmlFor="">Hours</label>
                        <br/>
                        <Form.Control placeholder={"Hours"}
                                      type="text"
                                      name={'duration'}/>
                    </div>

                    <div>
                        <label htmlFor="">Minutes</label>
                        <br/>
                        <Form.Control placeholder={"Minutes"} type="text"/>
                    </div>

                    <div>
                        <label htmlFor="">Seconds</label>
                        <br/>
                        <Form.Control placeholder={"Seconds"} type="text"/>
                    </div>
                </div>
            </Form.Group>{" "}
            <br/>
            <Form.Group controlId={""}>
                <Form.Label>Event Link</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    placeholder={"Link"}
                    name={"eventLink"}
                />
            </Form.Group>
            <Form.Group controlId={""}>
                <Form.Label>Event Password</Form.Label>
                <Form.Control
                    type={"password"}
                    className={"m-2"}
                    placeholder={"Event Password"}
                    name={"eventPassword"}
                />
            </Form.Group>{" "}
            <br/>
            <br/>
            <Modal.Footer>
                <Button type={"submit"}>Submit</Button>
            </Modal.Footer>
        </Form>

    </>)
}


export function AssignmentModal({lessonId}) {
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.title.value,
            description: e.target.description.value,
            fileName: e.target.fileName.value,
            fileLink: e.target.file.value,
            deadLine: e.target.deadline.value,
            totalMarks: e.target.marks.value,
        };
        addNewAssignment(lessonId, data).then(r => console.log(r))
        console.log(data)

    }

    return (<>

        <Form onSubmit={submitHandler}>
            <Form.Group controlId={""}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    placeholder={"Title"}
                    name={"title"}
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
                <Form.Label>File Name</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    placeholder={"File Name"}
                    name={"fileName"}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId={""}>
                <Form.Label>File</Form.Label>
                <Form.Control
                    type={"text"}
                    className={"m-2"}
                    placeholder={"Add File Link"}
                    name={"file"}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId={""}>
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                    type={"date"}
                    className={"m-2"}
                    placeholder={"Date"}
                    name={"deadline"}
                />
            </Form.Group>{" "}
            <br/>
            <Form.Group controlId={""}>
                <Form.Label>Marks</Form.Label>
                <Form.Control
                    type={"number"}
                    className={"m-2"}
                    placeholder={"Marks"}
                    name={"marks"}
                />
            </Form.Group>
            <br/>
            <br/>
            <Modal.Footer>
                <Button type={"submit"}>Submit</Button>
            </Modal.Footer>
        </Form>

    </>)
}


export function QuizModal({lessonId}) {

    const submitHandler = (e) => {
        e.preventDefault();
        const startTime = e.target.hours.value + ":" + e.target.minutes.value + ":" + e.target.seconds.value;
        const duration = e.target.dHours.value + ":" + e.target.dMinutes.value + ":" + e.target.dSeconds.value;

        const data = {
            name: e.target.name.value,
            description: e.target.description.value,
            startTime: startTime,
            duration: duration,
        };
        addNewQuiz(lessonId, data).then(r => console.log(r))
        console.log(data)

    }
    return (<>

        <Form onSubmit={submitHandler}>
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

    </>)
}

export function QuizAddQuestionsModal(props) {

    return (<>

        <Modal
            show={props.isCheck}
            onHide={() => props.onChange(false)}
            dialogClassName="custom-modal"
            size={"lg"}
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Add Quiz
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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

            </Modal.Body>
        </Modal>

    </>)
}

// ================================= Modal for Events Code Ends Here =============================================


// ================================= Tabs Content Data =============================================

export function ContentData({content}) {

    return (<>
        <Card>
            <Card.Header>{content.name}</Card.Header>
            <Card.Body>
                <Card.Text>{content.link}</Card.Text>
                <Button>Open</Button>
            </Card.Body>
        </Card>

    </>)
}


export function EventData({content}) {
    const id = content._id;
    const onDelete = () => {
        deleteEvent(id).then(r => console.log(r))
    }
    return (<><Card>
        <Card.Header>{content.name}</Card.Header>
        <Card.Body>
            <Card.Title>{content.description}</Card.Title>
            <Card.Text>{content.eventDate}</Card.Text>
            <Button variant="primary">Go to Event</Button>
            <Button className={"m-1"} variant="primary" onClick={onDelete}>
                Delete
            </Button>
        </Card.Body>
    </Card>    </>)
}


export function AssignmentData({content}) {
    const id = content._id;
    const onDelete = () => {
        deleteAssignment(id).then(r => console.log(r))
    }


    return (<>

        <Card>
            <Card.Header>{content.name}</Card.Header>
            <Card.Body>
                <Card.Title>{content.description}</Card.Title>
                <Card.Text><Link href={content.fileLink}>{content.fileName}</Link></Card.Text>

                <div>
                    <Button variant="primary">Go to Event</Button>
                    <Button className={"m-1"} variant="primary">
                        View Submissions
                    </Button>
                    <Button className={"m-1"} variant="primary" onClick={onDelete}>
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </Card>
        <br/>


    </>)
}


export function QuizData({content, onChange}) {
    const id = content._id;
    const onDelete = () => {
        deleteQuiz(id).then(r => console.log(r))
    }
    return (<>
        <Card>
            <Card.Header>{content.name}</Card.Header>
            <Card.Body>
                <Card.Title>{content.description}</Card.Title>

                <div>
                    <Button
                        variant="primary"
                        href={"/dashboard-teacher/courses/english/add-quiz-questions"}
                    >
                        Add Questions
                    </Button>

                    <Button href={"/dashboard-teacher/courses/english/quiz-details"} className={"m-1"} variant={"primary"}>
                        View Submissions
                    </Button>
                    <Button className={"m-1"} variant="primary" onClick={onDelete}>
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </Card>
        <br/>

    </>)
}


// ================================= Tabs Content Ends Here =============================================






