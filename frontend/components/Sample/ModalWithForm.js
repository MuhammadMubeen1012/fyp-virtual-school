import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const ModalWithForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div>

            <Modal
                show={modal}
                onHide={() => setModal(false) }
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId={""}>
                            <Form.Label>Time Start</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                placeholder={"Name"}
                                name={"name"}
                            />
                        </Form.Group>
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
