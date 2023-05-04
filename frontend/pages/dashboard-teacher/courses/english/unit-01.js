import React, {useState} from 'react';
import Link from "next/link";
import {Button, Dropdown, Form, Modal, Nav} from "react-bootstrap";
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";

const Unit01 = () => {
    const [modal, setModal] = useState({
        item: 0,
        active: false,
    });
    const [eventKey, setEventKey] = useState(0);

    return (
        <LayoutTeacher>
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

                <div className="" style={{border: "1px solid red", paddingBlock: "1rem" }}>
                    vector image....
                </div>
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Create
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setModal({item: 1, active: true})}>Lecture</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 2, active: true})}>Live Video</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 3, active: true})}>Assignments</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 4, active: true})}>Exercises</Dropdown.Item>
                        <Dropdown.Item onClick={() => setModal({item: 5, active: true})}>Quiz</Dropdown.Item>
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
                                            Lectures
                                        </div> :
                                        modal.item === 2 ?
                                            <div>
                                                Class Video
                                            </div> :
                                            modal.item === 3 ?
                                                <div>
                                                    Assignments
                                                </div> :
                                                modal.item === 4 ?
                                                    <div>
                                                        Exercise
                                                    </div> :
                                                    modal.item === 5 ?
                                                        <div>
                                                            Quiz
                                                        </div> : ""
                                }
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            {
                                modal.item === 1 ?
                                    <div>
                                        {/* Lectures Video Link */}
                                        <Form>
                                            <Form.Label>Upload File</Form.Label>
                                            <Form.Group controlId={""}>
                                                <Button>Choose File</Button>
                                                <Form.Label></Form.Label>
                                            </Form.Group>
                                            <br/>


                                            <Form.Group controlId={""} >
                                                <Form.Label>Or Give Drive Link</Form.Label>
                                                <Form.Control type={"text"} className={"m-2"} placeholder={"File Link"} />
                                            </Form.Group>

                                            <br/>
                                            <Button type={"submit"}>Submit</Button>

                                        </Form>
                                    </div> :
                                    modal.item === 2 ?
                                        <div className="">
                                            {/*Live Video Link*/}
                                            <Form>
                                                <Form.Label>Upload Recorded Video</Form.Label>
                                                <Form.Group controlId={""}>
                                                    <Button>Choose File</Button>
                                                    <Form.Label></Form.Label>
                                                </Form.Group>
                                                <br/>


                                                <Form.Group controlId={""} >
                                                    <Form.Label>Or Give Drive Link</Form.Label>
                                                    <Form.Control type={"text"} className={"m-2"} placeholder={"Video Link"} />
                                                </Form.Group>

                                                <br/>
                                                <Button type={"submit"}>Submit</Button>

                                            </Form>
                                        </div>
                                         :
                                        modal.item === 3 ?
                                            <div className="">
                                                {/* Assignments Modal */}
                                                <Form>
                                                    <Form.Label>Upload File</Form.Label>
                                                    <Form.Group controlId={""}>
                                                        <Button>Choose File</Button>
                                                        <Form.Label></Form.Label>
                                                    </Form.Group>
                                                    <br/>


                                                    <Form.Group controlId={""} >
                                                        <Form.Label>Or Give Assignment Link</Form.Label>
                                                        <Form.Control type={"text"} className={"m-2"} placeholder={"Assignment Link"} />
                                                    </Form.Group>

                                                    <br/>
                                                    <Form.Group controlId={"Marks"} >
                                                        <Form.Label>Marks</Form.Label>
                                                        <Form.Control type={"number"} className={"m-2"} placeholder={"Marks"} />
                                                    </Form.Group>


                                                    <br/>
                                                    <Button type={"submit"}>Submit</Button>

                                                </Form>
                                            </div>
                                             :
                                            modal.item === 4 ?
                                                <div>
                                                    Exercise
                                                </div> :
                                                modal.item === 5 ?
                                                    <div className="">
                                                        {/*  Quiz Modal  */}
                                                        <Form>
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


                                                            <br/>
                                                            <Form.Label>Answer</Form.Label>
                                                            <Form.Select controlId={"question"} >
                                                                <option value="">___Select Option___</option>
                                                                <option value="">Option 1</option>
                                                                <option value="">Option 2</option>
                                                                <option value="">Option 3</option>
                                                                <option value="">Option 4</option>
                                                            </Form.Select>

                                                            <br/>
                                                            <Button type={"submit"}>Submit</Button>

                                                        </Form>
                                                    </div>
                                                        : ""
                            }
                        </Modal.Body>
                    </Modal>
                </div>


                {/* ============= Tabs for Lectures, Live Video, Assignments, Exercises, Quizes, Other Section ================= */}
                <Nav className={"mt-5 mb-5"} fill variant="tabs" defaultActiveKey="#">

                    <Nav.Item>
                        <Nav.Link  href="#" onClick={() => setEventKey(0)}>Lectures</Nav.Link>
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



                {/* ============= Tabs running by conditional rendering ================= */}
                <div className="">
                    {
                        eventKey === 0 ?
                            <div>
                                <div>

                                </div>
                                <br/>
                                lectures will be here....
                            </div> :
                            eventKey === 1 ?
                                <div>
                                    <div>

                                    </div>
                                    <br/>
                                    live video will be here...
                                </div> :
                                eventKey === 2 ?
                                    <div>
                                        <div>

                                        </div>
                                        <br/>
                                        assignments will be here...
                                    </div> :
                                    eventKey === 3 ?
                                        <div>
                                            <div>

                                            </div>
                                            <br/>
                                            exercises will be here...
                                        </div> :
                                        eventKey === 4 ?
                                            <div>
                                                <div>

                                                </div>
                                                <br/>
                                                quizes will be here....
                                            </div> :
                                            eventKey === 5 ?
                                                <div>
                                                    <div>

                                                    </div>
                                                    <br/>
                                                    other section will be here...
                                                </div> : ""
                    }
                </div>
                {/* =============      Tabs for Lectures........           ================== */}







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
