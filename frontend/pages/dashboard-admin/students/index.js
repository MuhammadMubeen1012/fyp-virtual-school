import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import LayoutAdmin from "../../../components/Dashboard/Layout/LayoutAdmin";
import {
  getAcademicYears,
  getClassroomsByAcademicYear,
  getStudents,
} from "../DashboardController";

const Students = () => {
  const [academicYear, setAcademicYear] = useState([]);
  const [loadingAcademicYear, setLoadingAcademicYear] = useState(false);
  const [classrooms, setClassrooms] = useState([]);
  const [loadingClassroom, setLoadingClassroom] = useState(false);
  const [students, setStudents] = useState([]);
  const [loadingStudents, setLoadingStudents] = useState(false);

  useEffect(() => {
    getAcademicYears().then((res) => {
      //   console.log(res.academicYears);
      setAcademicYear(res.academicYears);
    });
  }, []);

  useEffect(() => {
    getClassroomsByAcademicYear().then((res) => {
      //   console.log(res);
      setClassrooms(res);
    });
  }, []);

  const fetchStudent = async () => {
    const allStudents = [];

    if (classrooms) {
      for (const classroom of classrooms) {
        // console.log("Class", classroom);
        const res = await getStudents(classroom._id);
        // console.log(res);
        allStudents.push(...res.students);
      }
    }

    return allStudents;
    // console.log("Students" , students)
  };

  useEffect(() => {
    if (classrooms.length > 0) {
      fetchStudent().then((res) => {
        setStudents(res);
      });
    }
  }, [classrooms]);

  useEffect(() => {
    if (students.length > 0) {
      setLoadingStudents(true);
      console.log("AS", students);
    }
  }, [students]);

  return (
    <LayoutAdmin>
      <main>
        <div className="courses-table">
          <h2>All Students</h2>
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Full Name</th>
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
                      </tr>
                    );
                  })
                : ""}
            </tbody>
            <br />
          </table>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Students;
