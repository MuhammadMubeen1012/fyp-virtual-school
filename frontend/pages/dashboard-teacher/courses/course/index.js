import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Router, useRouter} from "next/router";
import {getLessons} from "../../../../components/Controllers/CourseController";
import {Button, Form, Modal} from "react-bootstrap";
import {AssignmentModal, ContentModal, EventModal, QuizModal} from "./[slug]";

const Index = (props) => {
    const router = useRouter();
    const [course, setCourse] = useState({});
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [createLessonModal, setCreateLessonModal] = useState(false);
    const [editLessonModal, setEditLessonModal] = useState(false);
    const [unitName, setUnitName] = useState();
    const [unitDescription, setUnitDescription] = useState();


    // console.log(router.query);
    console.log(props);
    const createNewLesson = () => {

        const newLesson = {
            serial: lessons.length + 1,
            unitName,
            unitDescription
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // createNewLesson();

    }


    useEffect(() => {
        if (router.isReady) {
            const query = router.query
            setCourse(router.query)

            if (query.courseName && query.courseId) {
                getLessons(query.courseId).then(r => setLessons(r));
            }
        }
    }, [router.isReady]);


    useEffect(() => {
        if (loading === false && lessons.length !== 0) {
            setLoading(true);
        }
    }, [lessons]);


    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>Overview</h1>


                {/* ============= Start of Courses ================= */}
                <div className="courses-table">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>Course {loading ? course.courseName : ""}</h2>
                        <div>
                            <Button
                                onClick={() => {
                                    setCreateLessonModal(true)
                                }}
                            >
                                Create
                            </Button>
                        </div>
                    </div>


                    <br/>
                    {/* ================================ Table of Lessons =================== */}
                    <table>
                        <thead>
                        <tr>
                            <th>Unit No.</th>
                            <th>Unit Name</th>
                            <th>Details</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            loading && lessons !== null ? (
                                lessons.data.lessons.map((lesson, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{lesson.name}</td>
                                        <td>
                                            {/* href={{
                                            pathname: `/dashboard-teacher/courses/course`,
                                            query: {
                                                courseId: course._id,
                                                courseName: course.name
                                            }
                                        }}*/}
                                            <Link
                                                href={{
                                                    pathname: `/dashboard-teacher/courses/course/lesson/`,
                                                    query: {
                                                        courseId: course._id,
                                                        courseName: course.name,
                                                        lessonName:lesson.name,
                                                        lessonId:lesson._id
                                                    }
                                                }}
                                                className="primary ">Open</Link>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => setEditLessonModal(true)}
                                            >
                                                Edit
                                            </Button>
                                            <Button className={"m-1 btn-danger"}>Delete</Button>
                                        </td>


                                    </tr>)
                                )
                            ) : ""
                        }

                        </tbody>
                    </table>


                    {/* ================ Create Lesson Modal ========================== */}
                    <CreateLesson
                        createLessonModal={createLessonModal}
                        setCreateLessonModal={setCreateLessonModal}
                    />


                    {/*================= Edit Lesson Modal ==========================*/}
                    <EditLesson
                        editLessonModal={editLessonModal}
                        setEditLessonModal={setEditLessonModal}
                    />

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutTeacher>
    );
};

export default Index;


export function CreateLesson(props) {

    const handleCreateLesson = (e) => {
        e.preventDefault();
    }

    return (
        <div className="">
            <Modal
                show={props.createLessonModal}
                onHide={() => props.setCreateLessonModal(false)}
                dialogClassName="custom-modal"
                size={"lg"}
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Create Lesson
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleCreateLesson}>
                        <Form.Group controlId={""}>
                            <Form.Label>Unit Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                name={"unitName"}
                                placeholder={"Unit Name"}
                                onChange={(e) => setUnitName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={""}>
                            <Form.Label>Unit Description</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                name={"unitDescription"}
                                onChange={(e) => setUnitDescription(e.target.value)}
                                placeholder={"Unit Description"}
                            />
                        </Form.Group>

                        <br/>
                        <Modal.Footer>
                            <Button type={"submit"}>Add</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    )
}


export function EditLesson(props) {

    const handleEditLesson = (e) => {
        e.preventDefault();
    }

    return (
        <div className="">
            <Modal
                show={props.editLessonModal}
                onHide={() => props.setEditLessonModal(false)}
                dialogClassName="custom-modal"
                size={"lg"}
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Edit Lesson
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleEditLesson}>
                        <Form.Group controlId={""}>
                            <Form.Label>Unit Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                name={"unitName"}
                                placeholder={"Unit Name"}
                                onChange={(e) => setUnitName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId={""}>
                            <Form.Label>Unit Description</Form.Label>
                            <Form.Control
                                type={"text"}
                                className={"m-2"}
                                name={"unitDescription"}
                                onChange={(e) => setUnitDescription(e.target.value)}
                                placeholder={"Unit Description"}
                            />
                        </Form.Group>

                        <br/>
                        <Modal.Footer>
                            <Button type={"submit"}>Edit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    )
}

