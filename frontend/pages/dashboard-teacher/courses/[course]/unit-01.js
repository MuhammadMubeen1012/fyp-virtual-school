import React, {useState} from 'react';
import Link from "next/link";
import {Button, Card, Dropdown, Form, Modal, Nav} from "react-bootstrap";
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";


const Unit01 = () => {
    const [modal, setModal] = useState({
        item: 0,
        active: false,
    });
    const [eventKey, setEventKey] = useState(0);
    const [isModalAddQuestion, setIsModalAddQuestion] = useState(false);

    return (
        <LayoutTeacher>
            {/*=============== Start of Main ================= */}

            <main>

                <h1>Overview</h1>

                <div className="" style={{ paddingBlock: "1rem" ,display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <span>Unit 1</span>
                        <h3>Speaking to the world</h3>
                    </div>

                    <div>
                        <button className={"btn btn-primary"}>Next Lesson </button>
                    </div>
                </div>

                <div style={{
                    paddingBlock: "1rem",
                    border: "1px solid red",
                }}>
                    vector image...
                </div>
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Create
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setModal({item: 1, active: true})}>Content</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 2, active: true})}>Events</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 3, active: true})}>Assignment</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 4, active: true})}>Quiz</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>



                {/*Setting Modals according to the create event*/}
                <div className={""} >
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
                                {
                                    modal.item === 1 ?
                                        <div>
                                            Add Content
                                        </div> :
                                        modal.item === 2 ?
                                            <div>
                                                Add Event
                                            </div> :
                                            modal.item === 3 ?
                                                <div>
                                                    Add Assignment
                                                </div> :
                                                modal.item === 4 ?
                                                    <div>
                                                        Add Quiz
                                                    </div> : ""
                                }
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {
                                modal.item === 1 ?
                                    <div>
                                        {/* lesson Video Link */}
                                        <Form>

                                            <Form.Group controlId={""} >
                                                <Form.Label>File Link</Form.Label>
                                                <Form.Control type={"text"} className={"m-2"} placeholder={"File Link"} />
                                            </Form.Group>

                                            <br/>
                                            <Modal.Footer>
                                                <Button>Submit</Button>
                                            </Modal.Footer>


                                        </Form>
                                    </div>
                                         :
                                        modal.item === 2 ?
                                            <div>
                                                {/* Event Modal */}
                                                <Form>
                                                    <Form.Group controlId={"name"} >
                                                        <Form.Label>Title</Form.Label>
                                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Title"} />
                                                    </Form.Group>
                                                    <br/>

                                                    <Form.Group controlId={"name"} >
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Description"} />
                                                    </Form.Group> <br/>

                                                    <Form.Group controlId={"name"} >
                                                        <Form.Label>Date</Form.Label>
                                                        <Form.Control type={"date"} className={"m-2"} placeholder={"Date"} />
                                                    </Form.Group> <br/>

                                                    <Form.Group controlId={"name"} >

                                                        <div style={{display: "flex", justifyContent: "space-between" }}>
                                                            <div>
                                                                <label htmlFor="">Hours</label><br/>
                                                                <Form.Control placeholder={"Hours"} type="text"/>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="">Minutes</label><br/>
                                                                <Form.Control placeholder={"Minutes"} type="text"/>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="">Seconds</label><br/>
                                                                <Form.Control placeholder={"Seconds"} type="text"/>
                                                            </div>
                                                        </div>

                                                    </Form.Group> <br/>


                                                    <Form.Group controlId={"name"} >
                                                        <Form.Label>Event Link</Form.Label>
                                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Link"} />
                                                    </Form.Group>

                                                    <Form.Group controlId={"name"} >
                                                        <Form.Label>Event Password</Form.Label>
                                                        <Form.Control type={"password"} className={"m-2"} placeholder={"Event Password"} />
                                                    </Form.Group> <br/>


                                                    <br/>
                                                    <Modal.Footer>
                                                        <Button type={"submit"}>Submit</Button>
                                                    </Modal.Footer>

                                                </Form>
                                            </div>
                                             :
                                            modal.item === 3 ?
                                                <div className="">
                                                    {/* Assignments Modal */}
                                                    <Form>
                                                        <Form.Group controlId={"Title"} >
                                                            <Form.Label>Title</Form.Label>
                                                            <Form.Control type={"text"} className={"m-2"} placeholder={"Title"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <Form.Group controlId={"Title"} >
                                                            <Form.Label>Description</Form.Label>
                                                            <Form.Control type={"text"} className={"m-2"} placeholder={"Description"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <Form.Group controlId={"file"} >
                                                            <Form.Label>File Name</Form.Label>
                                                            <Form.Control type={"text"} className={"m-2"} placeholder={"File Name"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <Form.Group controlId={"file"} >
                                                            <Form.Label>File</Form.Label>
                                                            <Form.Control type={"text"} className={"m-2"} placeholder={"Add File Link"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <Form.Group controlId={"name"} >
                                                            <Form.Label>Deadline</Form.Label>
                                                            <Form.Control type={"date"} className={"m-2"} placeholder={"Date"} />
                                                        </Form.Group> <br/>

                                                        <Form.Group controlId={"file"} >
                                                            <Form.Label>Marks</Form.Label>
                                                            <Form.Control type={"number"} className={"m-2"} placeholder={"Marks"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <br/>
                                                        <Modal.Footer>
                                                            <Button type={"submit"}>Submit</Button>
                                                        </Modal.Footer>

                                                    </Form>
                                                </div>
                                                :
                                            modal.item === 4 ?
                                                <div className="">
                                                    {/*  Quiz Modal  */}
                                                    <Form>
                                                        <Form.Group controlId={"question"} >
                                                            <Form.Label>Name</Form.Label>
                                                            <Form.Control type={"text"} className={"m-2"} placeholder={"Name"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <Form.Group controlId={"question"} >
                                                            <Form.Label>Description</Form.Label>
                                                            <Form.Control type={"text"} className={"m-2"} placeholder={"Description"} />
                                                        </Form.Group>
                                                        <br/>

                                                        <Form.Group controlId={"name"} >
                                                            <label>Start Time</label><br/>
                                                            <div style={{display: "flex", justifyContent: "space-between" }}>

                                                                <div>

                                                                    <Form.Control placeholder={"Hours"} type="text"/>
                                                                </div>

                                                                <div>
                                                                    <Form.Control placeholder={"Minutes"} type="text"/>
                                                                </div>

                                                                <div>

                                                                    <Form.Control placeholder={"Seconds"} type="text"/>
                                                                </div>
                                                            </div>

                                                        </Form.Group> <br/>


                                                        <Form.Group controlId={"name"} >
                                                            <label>End Time</label>
                                                            <div style={{display: "flex", justifyContent: "space-between" }}>
                                                                <div>
                                                                    <Form.Control placeholder={"Hours"} type="text"/>
                                                                </div>

                                                                <div>
                                                                    <Form.Control placeholder={"Minutes"} type="text"/>
                                                                </div>

                                                                <div>
                                                                    <Form.Control placeholder={"Seconds"} type="text"/>
                                                                </div>
                                                            </div>

                                                        </Form.Group> <br/>

                                                        <div>
                                                            <input type="checkbox" id="isLive" />
                                                            <label htmlFor="isLive"> isLive</label>
                                                        </div>

                                                        <br/>
                                                        <Modal.Footer>
                                                            <Button type={"submit"}>Submit</Button>
                                                        </Modal.Footer>

                                                    </Form>


                                                </div>
                                                    : ""
                            }
                        </Modal.Body>
                    </Modal>
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
                                        File Link
                                    </Card.Text>
                                    <div>
                                        <Button variant="primary">Edit</Button>
                                        <Button className={"m-1"} variant="primary">Delete</Button>
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
                                    <Card.Title>Description</Card.Title>
                                    <Card.Text>
                                        File Link
                                    </Card.Text>
                                    <Button variant="primary">Go to Event</Button>
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
                                            <Button variant="primary"
                                                onClick={() => {
                                                    setIsModalAddQuestion(true);
                                                }}
                                            >Add Questions</Button>
                                        </Card.Body>
                                    </Card>
                                    <br/>

                                </div> : ""
                    }


                    {
                        isModalAddQuestion
                        &&
                        <Modal
                            show={isModalAddQuestion}
                            onHide={() => setIsModalAddQuestion(false)}
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
                                <Form handleSubmit={(e) => {e.preventDefault()}}>

                                    <Form.Group controlId={"question"} >
                                        <Form.Label>Question</Form.Label>
                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Type Question here..."} />
                                    </Form.Group>
                                    <br/>

                                    <Form.Label>Options</Form.Label>
                                    <Form.Group controlId={"question"} >
                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Option 1"} />
                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Option 2"} />
                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Option 3"} />
                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Option 4"} />
                                    </Form.Group>

                                    <br/>
                                    <Form.Group controlId={"question"} >
                                        <Form.Label>Marks</Form.Label>
                                        <Form.Control type={"number"} className={"m-2"} placeholder={"Marks"} />
                                    </Form.Group>


                                    <div style={{display: "flex", justifyContent: "space-between"}}>
                                        <Button type={"submit"}>Submit</Button>
                                        <Button>Next</Button>
                                    </div>



                                </Form>
                            </Modal.Body>
                        </Modal>
                    }





                </div>
                {/* =============      Tabs for lesson       ================== */}







            </main>

            {/*=============== End Of Main  ==================*/}

            {/*============= start of Right side*/}
            <div className="right">

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Teacher</b></p>
                    </div>

                    <div className="profile-photo">

                    </div>
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
                {/*====================== End of Recent Updates ====================== */}



            </div>
            {/*============= End of left Side*/}



        </LayoutTeacher>
    );
};

export default Unit01;
