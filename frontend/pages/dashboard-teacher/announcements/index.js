import React, {useState} from 'react';
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import {Button, Card, Form, InputGroup, Modal, Nav} from "react-bootstrap";
import swal from "@sweetalert/with-react";

const Announcement = () => {

    const [modal, setModal] = useState(false);
    const [tab, setTab] = useState(0);
    const [formData, setFormData] = useState({
        subject: '',
        description: '',
        attachment: '',
        announcementFor: '',
    });


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
                        data={formData}
                        setData={setFormData}
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

export default Announcement;



export function AnnouncementModal({modal, setModal, data, setData}){

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);


        swal({
            title: "Added Successfully",
            icon: "success",
        });
        setModal(false);


    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData(prevState => ({
            ...prevState,
            [name]: value,
        }));


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
                        Add Announcement
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Subject"}
                                name={"subject"}
                                value={data.subject}
                                onChange={handleChange}
                            />

                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Description"}
                                name={"description"}
                                value={data.description}
                                onChange={handleChange}
                            />

                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Link"}
                                name={"attachment"}
                                value={data.attachment}
                                onChange={handleChange}

                            />

                            <InputGroup>
                                <Form.Check
                                    type={"radio"}
                                    id={"student"}
                                    value={"student"}
                                    label={"Student"}
                                    name={"announcementFor"}
                                    // checked={data.announcementFor === "student"}

                                />
                            </InputGroup>


                            <InputGroup>
                                <Form.Check
                                    type={"radio"}
                                    id={"all"}
                                    value={"all"}
                                    label={"All"}
                                    name={"announcementFor"}
                                    // checked={data.announcementFor === "all"}
                                />
                            </InputGroup>


                        </Form.Group>


                        <br/>

                        <div
                            style={{display: "flex", justifyContent: "flex-end"}}
                        >
                            <Button type={"submit"}>Submit</Button>
                        </div>
                    </Form>

                </Modal.Body>

            </Modal>

        </>

    )

}


export function SentTab(){

    return(
        <>
            <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Text>Description</Card.Text>
                    <Button>Open</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export function ReceiveTab(){

    return(
        <>
            <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Text>Description</Card.Text>
                    <Button>Open</Button>
                </Card.Body>
            </Card>
        </>
    )
}







