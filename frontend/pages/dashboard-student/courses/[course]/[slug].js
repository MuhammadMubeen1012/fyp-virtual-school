import React, {useState} from 'react';
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card, Nav} from "react-bootstrap";

const Slug = () => {

    const [eventKey, setEventKey] = useState(0);

    return (
        <LayoutStudent>
            {/*=============== Start of Main ================= */}
            <main>

                <h1>Overview</h1>

                <div className="" style={{border: "1px solid red", paddingBlock: "1rem" ,display: "flex", justifyContent: "space-between"}}>
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


                <Nav className={"mt-5 mb-5"} fill variant="tabs" defaultActiveKey="link-0">

                    <Nav.Item>
                        <Nav.Link eventKey="link-0" href="#" onClick={() => setEventKey(0)}>Lessons</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => setEventKey(1)}>Live Video</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => setEventKey(2)}>Assignments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" onClick={() => setEventKey(3)}>Exercises</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" onClick={() => setEventKey(4)} >Quizes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-5" onClick={() =>  setEventKey(5)} >Other Section</Nav.Link>
                    </Nav.Item>

                </Nav>


                {/* ============= Start of Courses ================= */}
                <div className="">
                    {
                        eventKey === 0 ?
                            <div className={""}>
                                <Card>
                                    <Card.Header as="h5">Lecture 01</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Introduction to Speaking</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Download</Button>
                                    </Card.Body>
                                </Card>

                                <br/>
                                <Card>
                                    <Card.Header as="h5">Lecture 02</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Chapter 02</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Download</Button>
                                    </Card.Body>
                                </Card>

                                <br/>
                                <Card>
                                    <Card.Header as="h5">Lecture 02</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Chapter 03</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Download</Button>
                                    </Card.Body>
                                </Card>

                            </div> :
                        eventKey === 1 ?
                            <div>live video will be here...</div> :
                        eventKey === 2 ?
                            <div>assignments will be here...</div> :
                        eventKey === 3 ?
                            <div>exercises will be here...</div> :
                        eventKey === 4 ?
                            <div>quizes will be here....</div> :
                        eventKey === 5 ?
                            <div>other section will be here...</div> : ""
                    }
                </div>
                {/* ============= End of Courses  ================== */}







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

export default Slug;
