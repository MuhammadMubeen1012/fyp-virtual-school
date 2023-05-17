import React, {useState, useEffect} from "react";
import {getCourses} from "../../../pages/dashboard-student/controllers/commonControllers";
import {
    getLessons,
    getAssignmentsByLesson,
    getQuizesByLesson,
} from "../../../pages/dashboard-student/controllers/coursesController";

const RightSideStudent = () => {
    //classes > courses > assignment and quizes
    const [assignments, setAssignments] = useState([]);
    const [areAssignments, setAreAssignments] = useState(false);
    const [quizes, setQuizes] = useState([]);
    const [areQuizes, setAreQuizes] = useState(false);
    const [upcomingAssignments, setUpcomingAssignments] = useState();
    const [upComingQuiz, setUpComingQuiz] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const courses = await getCourses();
                //console.log(courses.courses);
                const coursesLessons = [];

                for (const course of courses.courses) {
                    const lessons = await getLessons(course._id);
                    //console.log("Lesssons", lessons.data.lessons);
                    coursesLessons.push(...lessons.data.lessons);
                    //console.log("Lessons of all courses", coursesLessons);
                    //tested
                }

                const assiggnments = await Promise.all(
                    coursesLessons.map((lesson) => getAssignmentsByLesson(lesson._id))
                );

                console.log("Assignments", assignments);
                await setAssignments(assiggnments.flat());
                setAreAssignments(true);

                const quizzes = await Promise.all(
                    coursesLessons.map((lesson) => getQuizesByLesson(lesson._id))
                );

                console.log("Quizes", quizes);
                await setQuizes(quizzes.flat());
                setAreQuizes(true);
                // await console.log("State-Q", quizes);
                // await console.log("State-A", assignments);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (areAssignments && assignments.length > 0) {
            setUpcomingAssignments(assignments.slice(0, 2));

            console.log("UA", upcomingAssignments);
        }

        if (areQuizes && quizes.length > 0) {
            setUpComingQuiz(quizes.slice(0, 2));
            console.log("UQ", upComingQuiz);
        }
    }, []);

    return (
        <>


            {/* ============== start of Right side ======================== */}
            <div className="right">
                <div className="profile">
                    <div className="info">
                        <p>
                            Hey, <b>Teacher</b>
                        </p>
                    </div>

                    <div className="profile-photo"></div>
                </div>

                {/*====================== Start of Recent Updates ==================== */}

                {/*start of recent Updates*/}
                <div className="recent-updates">
                    <h2>Upcoming Activities</h2>
                    <div className="updates">


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- E</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment 01
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- U</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment 02
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- M</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment 03
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>


                    </div>
                </div>
                {/*end of recent updates*/}


                <div className="recent-updates">
                    <h2>Notice Board</h2>
                    <div className="updates">
                        <div className="update">
                            <div className="profile-photo">
                                <h3>- A</h3>
                            </div>

                            <div className="message">
                                <p>Announcement 01</p>
                                <small className="text-muted">1 Day Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <h3>- A</h3>
                            </div>

                            <div className="message">
                                <p>Announcement 02</p>
                                <small className="text-muted">2 Days Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <h3>- A</h3>
                            </div>

                            <div className="message">
                                <p>Announcement 03</p>
                                <small className="text-muted">2 Days Ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================== End of Recent Updates ====================== */}
            </div>
            {/*============= End of Right Side ============================= */}


            {/*/!*============= start of Right side*!/*/}
            {/*<div className="right">*/}
            {/*  <div className="profile">*/}
            {/*    <div className="info">*/}
            {/*      <p>*/}
            {/*        Hey, <b>Momin </b>*/}
            {/*      </p>*/}
            {/*    </div>*/}

            {/*    <div className="profile-photo"></div>*/}
            {/*  </div>*/}

            {/*  /!*start of recent Updates*!/*/}
            {/*  <div className="recent-updates">*/}
            {/*    <h2>Upcoming Activities</h2>*/}

            {/*    {upComingQuiz*/}
            {/*      ? upComingQuiz.map((quiz) => (*/}
            {/*          <div className="update">*/}
            {/*            <div className="profile-photo">*/}
            {/*              <h3>Q</h3>*/}
            {/*            </div>*/}

            {/*            <div className="message">*/}
            {/*              <p>{quiz.name}</p>*/}
            {/*              <small className="text-muted">{quiz.description}</small>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        ))*/}
            {/*      : ""}*/}

            {/*    {upcomingAssignments*/}
            {/*      ? upcomingAssignments.map((assignment) => (*/}
            {/*          <div className="update">*/}
            {/*            <div className="profile-photo">*/}
            {/*              <h3>A</h3>*/}
            {/*            </div>*/}

            {/*            <div className="message">*/}
            {/*              <p>{assignment.name}</p>*/}
            {/*              <small className="text-muted">*/}
            {/*                Deadline:*/}
            {/*                {new Date(*/}
            {/*                  Date.parse(assignment.deadLine)*/}
            {/*                ).toLocaleDateString()}*/}
            {/*              </small>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        ))*/}
            {/*      : ""}*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!*end of recent updates*!/*/}

            {/*/!*============= start of Upcoming Events*!/*/}
            {/*<div className="upcoming-events">*/}
            {/*  <h2>Upcoming Events</h2>*/}
            {/*  <div className="item online">*/}
            {/*    <div className="icon">*/}
            {/*      <span className="material-icons-sharp">receipt_long</span>*/}
            {/*    </div>*/}
            {/*    <div className="right">*/}
            {/*      <div className="info">*/}
            {/*        <h3>Topic: Gestalt Design</h3>*/}
            {/*        <small className="text-muted">Last 24 Hours</small>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="item offline">*/}
            {/*    <div className="icon">*/}
            {/*      <span className="material-icons-sharp">local_mall</span>*/}
            {/*    </div>*/}
            {/*    <div className="right">*/}
            {/*      <div className="info">*/}
            {/*        <h3>Topic: Digital Marketing</h3>*/}
            {/*        <small className="text-muted">Last 24 Hours</small>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*/!*============= end of Upcoming Events*!/*/}

            {/*============= End of left Side*/}
        </>
    );
};

export default RightSideStudent;
