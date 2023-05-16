import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import LayoutAdmin from "../../../components/Dashboard/Layout/LayoutAdmin";
import {
  getTeachers,
  getClassroomsByAcademicYear,
} from "../DashboardController";

const Teachers = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [loadingClassroom, setLoadingClassroom] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [loadingTeachers, setLoadingTeachers] = useState(false);

  useEffect(() => {
    getClassroomsByAcademicYear().then((res) => {
      //   console.log(res);
      setClassrooms(res);
    });
  }, []);

  const fetchTeacher = async () => {
    const allTeachers = [];

    if (classrooms) {
      console.log(classrooms);
      for (const classroom of classrooms) {
        console.log("Class", classroom._id);
        const res = await getTeachers(classroom._id);
        // console.log(res);
        allTeachers.push(...res.teachers);
      }
    }

    return allTeachers;
    // console.log("Students" , students)
  };

  useEffect(() => {
    if (classrooms.length > 0) {
      fetchTeacher().then((res) => {
        setTeachers(res);
      });
    }
  }, [classrooms]);

  useEffect(() => {
    if (teachers.length > 0) {
      setLoadingTeachers(true);
      console.log("AS", teachers);
    }
  }, [teachers]);

  return (
    <LayoutAdmin>
      <main>
        <div className="courses-table">
          <h2>All Teachers</h2>
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th>Father Name</th>
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

export default Teachers;
