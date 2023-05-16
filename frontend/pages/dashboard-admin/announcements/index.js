import { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Dashboard/Layout/LayoutAdmin";
import { Button, Card, Form, InputGroup, Modal, Nav } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import { createAnnouncement, getAnnouncements } from "./announcementController";
import { Router } from "next/router";

const Announcement = () => {
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    attachment: "",
    announcementFor: "",
  });

  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    getAnnouncements().then((res) => setAnnouncements(res.announcements));
  }, []);

  return (
    <LayoutAdmin>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Announcements</h1>

        <Button onClick={() => setModal(true)}>Create</Button>

        {modal && (
          <AnnouncementModal
            modal={modal}
            setModal={setModal}
            data={formData}
            setData={setFormData}
          />
        )}

        <br />
        <br />
        <div>
          {/*sent tab*/}
          <SentTab announcements={announcements} />
        </div>
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutAdmin>
  );
};

export default Announcement;

export function AnnouncementModal({ modal, setModal, data, setData }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { _id } = JSON.parse(localStorage.getItem("user"));
    console.log("User", _id);
    createAnnouncement(data)
      .then((res) => {
        console.log(res);
        if (res.success) {
          swal({
            title: "Added Successfully",
            icon: "success",
          });
          setModal(false);
          window.location.reload();
        }
      })
      .catch((res) => {
        console.log(res);
        swal({
          title: "Error",
          icon: "error",
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
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

              <Form.Group controlId="" onChange={handleChange}>
                <Form.Check
                  value="student"
                  id={"student"}
                  type="radio"
                  label="Student"
                  name={"announcementFor"}
                  // checked={data.announcementFor === "student"}
                />
                <Form.Check
                  value="all"
                  id={"all"}
                  type="radio"
                  label="All"
                  name={"announcementFor"}
                  // checked={data.announcementFor === "all"}
                />
              </Form.Group>
            </Form.Group>

            <br />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type={"submit"}>Submit</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export function SentTab({ announcements }) {
  return (
    <>
      {announcements.map((announcement) => (
        <>
          <Card>
            <Card.Header>{announcement.subject}</Card.Header>
            <Card.Body>
              <Card.Text>{announcement.description}</Card.Text>
              <Button href={announcement.attachment}>Open</Button>
            </Card.Body>
          </Card>
          <br />
        </>
      ))}
    </>
  );
}
