import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import SidebarStudent from "../../components/Dashboard/Sidebar/SidebarStudent";
import LayoutStudent from "../../components/Dashboard/Layout/LayoutStudent";
import axios from "axios";
import Cookies from "js-cookie";
import {set} from "@cloudinary/url-gen/actions/variable";

const Index = () => {

    const [userIdFromLocalStorage, setUserIdFromLocalStorage] = useState("");
    const [courses, setCourses] = useState([]);
    const [age, setAge] = useState();
    const [bForm, setBForm] = useState();
    const [classroom, setClassroom] = useState();
    const [fatherNIC, setFatherNIC] = useState();
    const [fatherName, setFatherName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [photo, setPhoto] = useState();
    const [mainCourses, setMainCourses] = useState([]);




    const getStudent = () => {
        axios.get(`http://localhost:7000/api/v1/student`, {
            headers: {
                Authorization: `${Cookies.get('token')}`
            }
        }).then(async (res) => {
            console.log( "Student Data: ", res.data.student);
            const {
                age,
                bForm,
                classroom,
                fatherNIC,
                fatherName,
                firstName,
                lastName,
                phoneNumber,
                photo,
                courses: c,
            } = res.data.student;
            setBForm(bForm);
            setPhoto(photo);
            setFirstName(firstName);
            setLastName(lastName);
            setFatherName(fatherName);
            setAge(age);
            setPhoneNumber(phoneNumber);
            setFatherNIC(fatherNIC);
            setClassroom(classroom);

            getClassroomDetails(classroom);

        }).catch((err) => {
            console.log(err);
        })
    }

    const getClassroomDetails = (classroom) => {

        axios.get(`http://localhost:7000/api/v1/classroom/${classroom}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            }).then((res) => {

                const {courses} = res.data.classrooms;
                console.log("Classroom Detail: ",courses)
                setCourses(courses);
                // console.log(res.data)
                getCourses(courses);
        })

    }


    const getCourses = (courses) => {

        courses.map(course => {
            axios.get(`http://localhost:7000/api/v1/course/${course}`, {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            }).then(res => {
                console.log("Courses:  ", res.data.course);
                setMainCourses(prevState => ([...prevState, res.data.course]));
            })
        })
    }



    useEffect( () => {
         getStudent();
         // getClassroomDetails();
         // getCourses();


    }, []);


    return (
        <>
            <LayoutStudent>

                {/*=============== Start of main ================= */}
                <main>
                    <h1>Overview</h1>

                    {/*========= Start of insights*/}
                    <div className="insights">

                        {/*course completed*/}
                        <div className="course-completed">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Course Completed</h3>
                                    <h1>{courses.length}</h1>
                                </div>

                                <div className="progress">
                                    <svg>
                                        <circle cx={"38"} cy={"38"} r={"36"}></circle>
                                    </svg>

                                    <div className="number">
                                        <p>0%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*course progress*/}
                        <div className="course-progress">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Courses In Progress</h3>
                                    <h1>{courses.length}</h1>
                                </div>

                                <div className="progress">
                                    <svg>
                                        <circle cx={"38"} cy={"38"} r={"36"}></circle>
                                    </svg>

                                    <div className="number">
                                        <p>0%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*Certification*/}
                        <div className="certification">
                            <span className="material-icons-sharp">analytics</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Certification Earned</h3>
                                    <h1>0</h1>
                                </div>

                                <div className="progress">
                                    <svg>
                                        <circle cx={"38"} cy={"38"} r={"36"}></circle>
                                    </svg>

                                    <div className="number">
                                        <p>3%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/*======== end of Insights */}


                    {/*============= start of Courses ====== */}
                    <div className="courses-table">
                        <h2>Courses</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Title</th>
                                    <th>Lessons Completed</th>
                                </tr>
                            </thead>

                            <tbody>
                            {mainCourses.map((course, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{course.name}</td>
                                        <td>{course.lessons.length}</td>
                                        <td><Link href={'#'}>click here</Link></td>
                                    </tr>
                                )
                                })
                            }
                            </tbody>
                        </table>

                        <a href="#">Show All</a>

                    </div>
                    {/*End of Courses */}

                </main>
                {/*=============== End Of Main  ==================*/}






                {/*============= start of Right side*/}
                <div className="right">

                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>{firstName} {lastName} </b></p>
                        </div>

                        <div className="profile-photo">

                        </div>
                    </div>


                    {/*start of recent Updates*/}
                    <div className="recent-updates">
                        <h2>Upcoming Activities</h2>
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
                    {/*end of recent updates*/}


                    {/*============= start of Upcoming Events*/}
                    <div className="upcoming-events">
                        <h2>Upcoming Events</h2>
                        <div className="item online">
                            <div className="icon">
                                <span className="material-icons-sharp">receipt_long</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Topic: Gestalt Design</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>

                            </div>
                        </div>



                        <div className="item offline">
                            <div className="icon">
                                <span className="material-icons-sharp">local_mall</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Topic: Digital Marketing</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>


                            </div>
                        </div>

                    </div>
                    {/*============= end of Upcoming Events*/}


                </div>
                {/*============= End of left Side*/}




            </LayoutStudent>


        </>
    );
};

export default Index;
