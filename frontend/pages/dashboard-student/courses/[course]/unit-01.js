import React, {useState} from 'react';
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card, Nav} from "react-bootstrap";

const Unit01 = () => {

    const [eventKey, setEventKey] = useState(0);

    return (
        <LayoutStudent>
            {/*=============== Start of Main ================= */}
            <main>

                <h1>Overview</h1>

                <div className="" style={{paddingBlock: "1rem" ,display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <span>Unit 1</span>
                        <h3>Speaking to the world</h3>
                    </div>

                    <div>
                        <button className={"btn btn-primary"}>Next Lesson </button>
                    </div>
                </div>

                <div className="" style={{border: "1px solid red", paddingBlock: "1rem"}}>
                    Vector Image...
                </div>


                {/* ============= Tabs for lesson, Live Video, Assignments, Exercises, Quizes, Other Section ================= */}
                <Nav className={"mt-5 mb-5"} fill variant="tabs" defaultActiveKey="#">
                    <Nav.Item>
                        <Nav.Link  href="#" onClick={() => setEventKey(0)}>Content</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => setEventKey(1)}>Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => setEventKey(2)}>Assignments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" onClick={() => setEventKey(3)} >Quizes</Nav.Link>
                    </Nav.Item>
                </Nav>



                {/* ============= Tabs running by conditional rendering ================= */}
                <div className="">

                    {
                        eventKey === 0 ?
                            <div>
                                {/*Lesson Tab*/}
                                <Card>
                                    <Card.Header>Content</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Description
                                        </Card.Text>
                                        <div>
                                            <Button variant="primary">Open</Button>
                                        </div>
                                    </Card.Body>
                                </Card> <br/>
                            </div> :
                            eventKey === 1 ?
                                <div>
                                    {/*Event Tab*/}
                                    <Card>
                                        <Card.Header>Event Title</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Description</Card.Title>
                                            <Card.Text>
                                                Event Date
                                            </Card.Text>
                                            <Button variant="primary">Go to Event</Button>
                                        </Card.Body>
                                    </Card> <br/>

                                    <Card>
                                        <Card.Header>Event Title</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Description</Card.Title>
                                            <Card.Text>
                                                Event Date
                                            </Card.Text>
                                            <Button variant="primary">Go to Event</Button>
                                        </Card.Body>
                                    </Card>

                                </div> :
                                eventKey === 2 ?
                                    <div>
                                        {/*Assignments Tab*/}
                                        <Card>
                                            <Card.Header>Assignment Title</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    Description
                                                </Card.Text>
                                                <Button variant="primary">Open</Button>
                                            </Card.Body>
                                        </Card>
                                        <br/>

                                    </div> :
                                    eventKey === 3 ?
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

                                        </div> : ""
                    }

                </div>




            </main>
            {/*=============== End Of Main  ==================*/}



            {/*============= Start of Right side*/}
            <div className="right">

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Student</b></p>
                    </div>

                    <div className="profile-photo">

                    </div>
                </div>


                {/*start of recent Updates*/}
                <div className="recent-updates">
                    <h2>Upcoming Activities</h2>
                    <div className="updates">


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- UX</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment due 20 March
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- SEO</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment due 21 March
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>



                        <div className="update">
                            <div className="profile-photo">
                                <h3>- SE</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment due 25 March
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>



                    </div>
                </div>
                {/*end of recent updates*/}

            </div>
            {/*============= End of left Side*/}



        </LayoutStudent>
    );
};

export default Unit01;
