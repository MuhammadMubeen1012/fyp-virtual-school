import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Dashboard/Layout/LayoutAdmin";
import {
  blockUnblockUser,
  getClassroomsByAcademicYear,
  getCourses,
  getStudents,
  getTeachers,
} from "../DashboardController";
import { Button, Dropdown, Nav } from "react-bootstrap";
import Router, { useRouter } from "next/router";

const Slug = () => {
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [loadingTeachers, setLoadingTeachers] = useState(false);

  const [eventKey, setEventKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    getStudents(router.query.classroomID).then((res) => {
      console.log("Students", res.students);
      setStudents(res.students);
    });
  }, []);
  useEffect(() => {
    getTeachers(router.query.classroomID).then((res) => {
      console.log("Teachers", res.teachers);
      setTeachers(res.teachers);
    });
  }, []);
  useEffect(() => {
    getCourses(router.query.classroomID).then((res) => {
      console.log("Courses", res.courses);
      setCourses(res.courses);
    });
  }, []);

  useEffect(() => {
    if (students.length > 0) {
      setLoadingStudents(true);
      // console.log("AS", students);
    }
  }, [students]);

  useEffect(() => {
    if (courses.length > 0) {
      setLoadingCourses(true);
      // console.log("AS", students);
    }
  }, [courses]);

  useEffect(() => {
    if (teachers.length > 0) {
      setLoadingTeachers(true);
      // console.log("AS", students);
    }
  }, [teachers]);

  const blockStudent = (id) => {
    blockUnblockUser(id, { isBlocked: true });
    console.log("Block Student");
  };
  const blockTeacher = (id) => {
    blockUnblockUser(id, { isBlocked: true });
    console.log("Block Teacher");
  };

  return (
    <LayoutAdmin>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Overview</h1>

        {/* ============= Tabs for lesson, Live Video, Assignments, Exercises, Quizes, Other Section ================= */}
        <Nav className={"mt-5 mb-5"} fill variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#" onClick={() => setEventKey(0)}>
              Courses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => setEventKey(1)}>
              Students
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => setEventKey(2)}>
              Teacher
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* =========== Tabs End Here ================  */}

        {/* ============= Tabs running by conditional rendering ================= */}
        <div className="">
          {eventKey === 0 ? (
            <div>
              {/*Courses Tab*/}
              <div className="courses-table">
                <h2>Courses</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Code</th>
                      <th>Name</th>
                      <th>No of Lessons</th>
                    </tr>
                  </thead>

                  <tbody>
                    {courses && loadingCourses
                      ? courses.map((course, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{course.code}</td>
                              <td>{course.name}</td>
                              <td>{course.lessons.length}</td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                  <br />
                </table>
              </div>
            </div>
          ) : eventKey === 1 ? (
            <div>
              {/*Students Tab*/}
              <div className="courses-table">
                <h2>Students</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Name</th>
                      <th>Father Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {students && loadingStudents
                      ? students.map((student, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{student.firstName + student.lastName}</td>
                              <td>{student.fatherName}</td>
                              <td>
                                <Button
                                  onClick={blockStudent(student.user)}
                                  variant={"danger"}
                                >
                                  Block
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                  <br />
                </table>
              </div>
            </div>
          ) : eventKey === 2 ? (
            <div>
              {/*Teachers Tab*/}
              <div className="courses-table">
                <h2>Teachers</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Name</th>
                      <th>Father Name</th>
                      <th>No of Courses</th>
                    </tr>
                  </thead>

                  <tbody>
                    {teachers && loadingTeachers
                      ? teachers.map((teacher, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{teacher.firstName + teacher.lastName}</td>
                              <td>{teacher.fatherName}</td>
                              <td>
                                <Button
                                  onClick={blockTeacher(teacher.user)}
                                  variant={"danger"}
                                >
                                  Block
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                  <br />
                </table>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* =============      Tabs running code Ends here       ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}

      {/*============= start of Right side*/}
      <div className="right">
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Admin </b>
            </p>
          </div>

          <div className="profile-photo"></div>
        </div>

        {/*start of recent Updates*/}
        <div className="recent-updates">
          <h2>Results</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <h3>- A</h3>
              </div>

              <div className="message">
                <p>Admission Result</p>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <h3>- C</h3>
              </div>

              <div className="message">
                <p>Classroom results</p>
              </div>
            </div>

            <div className="update">
              <div className="profile-photo">
                <h3>- E</h3>
              </div>

              <div className="message">
                <p>Exam Results</p>
              </div>
            </div>
          </div>
        </div>
        {/*end of recent updates*/}

        {/*============= start of Upcoming Events ==================*/}
        <div className="upcoming-events">
          <h2>Notice Board</h2>
          <div className="item online">
            <div className="icon">
              <span className="material-icons-sharp">receipt_long</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>Notice 01</h3>
                <small className="text-muted">24 Hours ago</small>
              </div>
            </div>
          </div>

          <div className="item offline">
            <div className="icon">
              <span className="material-icons-sharp">local_mall</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>Notice 02</h3>
                <small className="text-muted">24 Hours ago</small>
              </div>
            </div>
          </div>
        </div>
        {/*============= end of Upcoming Events*/}
      </div>
      {/*============= End of left Side*/}
    </LayoutAdmin>
  );
};

export default Slug;

// export function CourseData() {
//   return (
//     <div>
//       <div className="courses-table">
//         <h2>Courses</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Serial No.</th>
//               <th>Code</th>
//               <th>Name</th>
//               <th>No of Lessons</th>
//               <th>Teacher</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>123</td>
//               <td>English</td>
//               <td>8</td>
//               <td>John</td>
//             </tr>
//           </tbody>
//           <br />
//         </table>
//       </div>
//     </div>
//   );
// }

// export function StudentData() {
//   return (
//     <div>
//       <div className="courses-table">
//         <h2>Students</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Serial No.</th>
//               <th>Name</th>
//               <th>Father Name</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Ali</td>
//               <td>Ahmed</td>
//               <td>
//                 <Button variant={"danger"}>Block</Button>
//               </td>
//             </tr>
//           </tbody>
//           <br />
//         </table>
//       </div>
//     </div>
//   );
// }

// export function TeacherData() {
//   return (
//     <div>
//       <div className="courses-table">
//         <h2>Teachers</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Serial No.</th>
//               <th>Name</th>
//               <th>Father Name</th>
//               <th>No of Courses</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Kamran</td>
//               <td>Ahmed</td>
//               <td>5</td>
//               <td>
//                 <Button variant={"danger"}>Block</Button>
//               </td>
//             </tr>
//           </tbody>
//           <br />
//         </table>
//       </div>
//     </div>
//   );
// }
