import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Router, useRouter} from "next/router";
import {addLesson, deleteLesson, getLessons, updateLesson} from "../../../../components/Controllers/CourseController";
import {Button, Form, Modal} from "react-bootstrap";
import {AssignmentModal, ContentModal, EventModal, QuizModal} from "./[slug]";
import swal from "@sweetalert/with-react";

const Index = (props) => {
    const router = useRouter();
    const [course, setCourse] = useState({});
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [createLessonModal, setCreateLessonModal] = useState(false);
    const [editLessonModal, setEditLessonModal] = useState(false);
    const [lesson, setLesson] = useState({});


    useEffect(() => {
        if (router.isReady) {
            const query = router.query
            setCourse(router.query)
            console.log(router.query);
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
                                            <Link
                                                href={{
                                                    pathname: `/dashboard-teacher/courses/course/lesson/`,
                                                    query: {
                                                        courseId: course._id,
                                                        courseName: course.name,
                                                        lessonName: lesson.name,
                                                        lessonId: lesson._id
                                                    }
                                                }}
                                                className="primary ">
                                                Open
                                            </Link>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => {
                                                    setLesson(lesson)
                                                    setEditLessonModal(true)
                                                }
                                                }>
                                                Edit
                                            </Button>
                                            <Button className={"m-1 btn-danger"} onClick={
                                                (e) => {
                                                    e.preventDefault();
                                                    // swal confirmation message
                                                    swal({
                                                        title: "Are you sure?",
                                                        text: "You want to delete this user?",
                                                        icon: "warning",
                                                        dangerMode: true,
                                                    }).then((value) => {
                                                        switch (value) {
                                                            case true:
                                                                deleteLesson(lesson._id).then(r => {
                                                                    console.log(r);
                                                                })
                                                                window.location.reload();
                                                                break;
                                                            default:
                                                                swal.close();
                                                        }

                                                    });

                                                }
                                            }>
                                                Delete
                                            </Button>
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
                        courseId={course.courseId}
                    />


                    {/*================= Edit Lesson Modal ==========================*/}
                    <EditLesson
                        editLessonModal={editLessonModal}
                        setEditLessonModal={setEditLessonModal}
                        lesson={lesson}
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

    const [unitName, setUnitName] = useState("");
    const [unitDescription, setUnitDescription] = useState("");
    const handleCreateLesson = (e) => {
        e.preventDefault();

        const lesson = {
            name: unitName,
            description: unitDescription,
        }

        addLesson(props.courseId, lesson).then(r => {
            console.log(r);
        })

        props.setCreateLessonModal(false);

        swal({
            title: "Lesson Successfully created",
            icon: "success",
        }).then(() => {
            window.location.reload();
        });

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
    const {lesson} = props;
    const [id, setId] = useState(null);
    const [lessonName, setLessonName] = useState(null);
    const [lessonDescription, setLessonDescription] = useState(null);

    useEffect(() => {
        const {_id, name, description} = lesson;
        if (lesson !== null) {
            setId(_id);
            setLessonName(lesson.name);
            setLessonDescription(lesson.description);
        }
    }, [lesson]);

    const handleEditLesson = (e) => {
        e.preventDefault();
        console.log(name, description);
        updateLesson(id, {
            name: lessonName,
            description: lessonDescription
        }).then(r => console.log(r));
        // window.location.reload();


        props.setEditLessonModal(false);

        swal({
            title: "Lesson Successfully Edited",
            icon: "success",
        }).then(() => {
            window.location.reload();
        });
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
                                id={"name"}
                                type={"text"}
                                className={"m-2"}
                                name={"name"}
                                value={lessonName}
                                onChange={(e) => setLessonName(e.target.value)}
                                placeholder={"Unit Name"}
                            />
                        </Form.Group>
                        <Form.Group controlId={""}>
                            <Form.Label>Unit Description</Form.Label>
                            <Form.Control
                                id={"description"}
                                type={"text"}
                                className={"m-2"}
                                name={"description"}
                                value={lessonDescription}
                                onChange={(e) => setLessonDescription(e.target.value)}
                                placeholder={"Unit Description"}
                            />
                        </Form.Group>

                        <br/>
                        <Modal.Footer>
                            <Button type={"submit"}>Update</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    )
}

