import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../components/Dashboard/Layout/LayoutTeacher";
import axios from "axios";
import Cookies from "js-cookie";
import {main} from "@cloudinary/url-gen/qualifiers/videoCodecProfile";
import Link from "next/link";
import {getClassrooms, getCourses, getTeacher} from "../../components/Controllers/DashboardController";

function Index(effect, deps) {
    // api/v1/teacher
    // api/v1/course/courseId


    // const user = localStorage.getItem('user');
    const [user, setUser] = useState({});
    const [bForm, setBForm] = useState({});
    const [photo, setPhoto] = useState({});
    const [degreeProof, setDegreeProof] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [personalNIC, setPersonalNIC] = useState('');
    const [fatherNIC, setFatherNIC] = useState('');
    const [classroom, setClassroom] = useState([]);
    const [courses, setCourses] = useState([]);
    const [mainCourses, setMainCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [numberOfStudents, setNumberOfStudents] = useState(0);
    const getMainCourses = () => {
        getCourses(courses).then((res) => {
            setMainCourses(res.map((r) => {
                return r.data.course;
            }));
        });
    }

    const getTeacherObj = () => {
        getTeacher().then((res) => {
            const {
                bForm,
                photo,
                degreeProof,
                user,
                firstName,
                lastName,
                fatherName,
                age,
                phoneNumber,
                personalNIC,
                fatherNIC,
                classroom,
                courses: c
            } = res;
            setBForm(bForm);
            setPhoto(photo);
            setDegreeProof(degreeProof);
            setUser(user);
            setFirstName(firstName);
            setLastName(lastName);
            setFatherName(fatherName);
            setAge(age);
            setPhoneNumber(phoneNumber);
            setPersonalNIC(personalNIC);
            setFatherNIC(fatherNIC);
            setClassroom(classroom);
            setCourses(c);
            getClassroomsObjects(classroom);

        })
    }


    const getClassroomsObjects = (classrooms) => {
        getClassrooms(classrooms).then((res) => {
            setClassroom(res);
        });
    }

    useEffect(() => {
        if (classroom.length > 0) {
            console.log('Classroom ', classroom);
            if (classroom[0].students) setNumberOfStudents(classroom.map((croom) => {
                if (croom.students) {
                    return croom.students.length
                }
            }).reduce((a, b) => a + b, 0));

        }
    }, [classroom]);


    useEffect(() => {
        getTeacherObj();
        getMainCourses();
    }, []);

    useEffect(() => {
        if (courses.length > 0) {
            getMainCourses();
        }
    }, [courses]);
    useEffect(() => {
        if (mainCourses.length > 0) {
            setLoading(true);
        }
    }, [mainCourses]);

    return (
        <LayoutTeacher>

        {/*=============== Start of main ================= */}
        <main>
            <h1>Overview</h1>

            {/* ============ Start of insights ============== */}

            <div className="insights">

                {/*course completed*/}
                <div className="course-completed">
                    <span className="material-icons-sharp">person_outline</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Students</h3>
                            <h1>{numberOfStudents}</h1>
                        </div>

                    </div>

                </div>

                {/*course progress*/}
                <div className="course-progress">
                    <span className="material-icons-sharp">analytics</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Your Courses</h3>
                            <h1>{mainCourses.length}</h1>
                        </div>

                    </div>

                </div>

                {/*Certification*/}
                <div className="certification">
                    <span className="material-icons-sharp">analytics</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Your Classes</h3>
                            <h1>{classroom.length}</h1>
                        </div>

                    </div>

                </div>

            </div>

            {/*============ END of insights =================== */}


            {/* ============= start of Courses ================= */}
            <div className="courses-table">

                <h2>Courses</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Lessons</th>
                        <th>Details</th>
                    </tr>
                    </thead>

                    <tbody>

                    {loading && mainCourses.map((course, index) => {
                        console.log('000----------------', course);
                        return (<tr key={index}>
                            <td>{course.name}</td>
                            <td>{course.lessons.length}</td>
                            <td><Link href={`/dashboard-teacher/courses/${course.name.toLowerCase()}`}>click here</Link></td>
                        </tr>)
                    })}


                    </tbody>
                </table>


            </div>
            {/* ============= End of Courses  ================== */}

        </main>
        {/*=============== End Of Main  ==================*/}





    </LayoutTeacher>

    );
};

export default Index;





/*export const getCourses = (coursesLinks) => {
    return Promise.all(coursesLinks.map((course) => {
        return axios.get(`http://localhost:7000/api/v1/course/${course}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            })
    }))
}*/


/*export const getTeacher = async () => {
    const response = await axios.get(`http://localhost:7000/api/v1/teacher`, {
        headers: {
            Authorization: `${Cookies.get('token')}`
        }
    })

    return response.data.teacher
}*/

/*export const getClassrooms = async (classroomsLinks) => {
    const res = await Promise.all(classroomsLinks.map((classId) => {
        return axios.get(`http://localhost:7000/api/v1/classroom/${classId}`, {
            headers: {
                Authorization: `${Cookies.get('token')}`
            }
        })
    }))
    return res.map((r) => {
        console.log(r.data.classrooms);
        return r.data.classrooms
    })
}*/












