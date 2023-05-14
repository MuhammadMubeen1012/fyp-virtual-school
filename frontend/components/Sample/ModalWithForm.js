import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const ModalWithForm = () => {
    return (
        <div>
            <Modal
                show={examModal}
                onHide={() => setExamModal(false) }
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
                    <Form>
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

                        <Modal.Footer>
                            <Button type={"submit"}>Add</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalWithForm;
