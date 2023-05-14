import React, {useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import {Button, Form, Modal, Nav} from "react-bootstrap";
import swal from "@sweetalert/with-react";

const Courses = () => {

    const [modal, setModal] = useState(false);
    const [tab, setTab] = useState(0);


    return (
        <LayoutTeacher>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Announcements</h1>

                <Button
                    onClick={() => setModal(true)}
                >
                    Create
                </Button>

                {
                    modal &&

                    <AnnouncementModal
                        modal={modal}
                        setModal={setModal}
                    />

                }




                <Nav className={"mt-5 mb-5"} fill variant="tabs" defaultActiveKey="#">
                    <Nav.Item>
                        <Nav.Link href="#" onClick={() => setTab(0)}>
                            Sent
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>
                            Received
                        </Nav.Link>
                    </Nav.Item>
                </Nav>


                {
                    tab === 0 ?
                        <div>
                            {/*sent tab*/}
                            <SentTab />
                        </div> :

                        <div>
                            {/*received tab*/}
                            <ReceiveTab />
                        </div>
                }


            </main>
            {/*=============== End Of Main  ==================*/}

        </LayoutTeacher>
    );
};

export default Courses;



export function AnnouncementModal({modal, setModal}){

    const handleSubmit = (e) => {
        e.preventDefault();

        swal({
            title: "Added Successfully",
            icon: "success",
        });
        setModal(false);

    }

    const handleChange = (e) => {
        e.preventDefault();



    }


    return(
        <>
            <Modal
                show={modal}
                onHide={() => setModal(false)}
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

                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId={"question"}>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Subject"}
                                name={"subject"}
                                onChange={() => handleChange}
                                required
                            />

                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Description"}
                                required
                            />

                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Link"}
                                required
                            />


                        </Form.Group>
                        <br/>

                        <div
                            style={{display: "flex", justifyContent: "flex-end"}}
                        >
                            <Button type={"submit"}>Submit</Button>
                        </div>
                    </Form>


                    {/*<Modal.Footer>*/}
                    {/*    <Button>Submit</Button>*/}
                    {/*</Modal.Footer>*/}
                </Modal.Body>

            </Modal>

        </>

    )

}


export function SentTab(){

    return(
        <div>

        </div>
    )
}


export function ReceiveTab(){

    return(
        <div>


        </div>
    )
}







