import React, { useEffect, useState } from "react";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import { Button, Form, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { createAttendance, getCourseAttendance } from "./attendanceController";
import swal from "@sweetalert/with-react";

const AttendanceDetail = () => {
  const router = useRouter();
  const [course, setCourse] = useState({});
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [attendance, setAttendance] = useState([]);
  const [loadingAttendance, setLoadingAttendance] = useState(false);
  const [modal, setModal] = useState(false);
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setCourse(router.query);
      console.log(router.query);
      setCourseId(router.query.courseId);
      console.log(router.query.courseName);
      getCourseAttendance(router.query.courseId).then((res) => {
        console.log(res.attendance);
        setAttendance(res.attendance);
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (attendance.length > 0) {
      setLoadingAttendance(true);
      console.log(attendance);
    }
  }, [attendance]);

  const item = {
    serial: "Serial No.",
    class: "Class",
    timeStart: "Time Start",
    timeEnd: "Time End",
    createdAt: "Date",
  };

  return (
    <LayoutTeacher>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Attendance</h1>

        {/* ============= Start of Courses ================= */}
        <div className="courses-table">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{router.query.courseName}</h2>
            <div>
              <Button
                style={{ color: "#fff" }}
                onClick={() => {
                  setModal(true);
                }}
              >
                Create New
              </Button>
            </div>
          </div>

          <CreateAttendanceModal
            modal={modal}
            setModal={setModal}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
            courseId={courseId}
          />

          {/*========================= Attendance Table ========================== */}
          <table>
            <thead>
              {
                <tr>
                  <th>{item.serial}</th>
                  <th>{item.class}</th>
                  <th>{item.timeStart}</th>
                  <th>{item.timeEnd}</th>
                  <th>{item.createdAt}</th>
                </tr>
              }
            </thead>

            <tbody>
              {loadingAttendance && attendance.length > 0
                ? attendance.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{item.classroom}</td>
                      <td>{item.startTime}</td>
                      <td>{item.endTime}</td>
                      <td>
                        {new Date(
                          Date.parse(item.createdAt)
                        ).toLocaleDateString()}
                      </td>
                      <Link
                        style={{ color: "#fff" }}
                        href={{
                          pathname: `/dashboard-teacher/attendance/new-attendance`,
                          query: {
                            attendanceID: item._id,
                          },
                        }}
                      >
                        View
                      </Link>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
        {/* ============= End of Courses  ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutTeacher>
  );
};

export default AttendanceDetail;

export function CreateAttendanceModal({
  modal,
  setModal,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  courseId,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(startTime, endTime);
    console.log(courseId);

    createAttendance(courseId, { startTime: startTime, endTime: endTime }).then(
      (r) => {
        console.log("Attendance Created", r);
        swal({
          title: "Created Successfully",
          icon: "success",
        });
        setModal(false);
      }
    );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "timeStart") {
      setStartTime(e.target.value);
    } else if (name === "timeEnd") {
      setEndTime(e.target.value);
    }
  };

  return (
    <div>
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
            Create Attendance
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId={""}>
              <Form.Label>Time Start</Form.Label>
              <Form.Control
                type={"text"}
                className={"m-2"}
                placeholder={"Time Start"}
                name={"timeStart"}
                onChange={handleChange}
              />
              <br />

              <Form.Label>Time End</Form.Label>
              <Form.Control
                type={"text"}
                className={"m-2"}
                placeholder={"Time End"}
                name={"timeEnd"}
                onChange={handleChange}
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
}
