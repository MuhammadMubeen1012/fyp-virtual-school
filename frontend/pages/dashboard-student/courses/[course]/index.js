import React, { useState, useEffect } from "react";
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import { getLessons } from "../../controllers/coursesController";
import { useRouter } from "next/router";

const English = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (lessons.length === 0) {
      getLessons(router.query.courseId).then((res) => {
        console.log("List --- ", res);
        setLessons(res.data.lessons);
      });
    }
  }, []);

  useEffect(() => {
    if (lessons.length !== 0 && !loading) {
      setLoading(true);
    }
  }, [lessons]);

  return (
    <LayoutStudent>
      {/*=============== Start of main ================= */}
      <main>
        <h1>Overview</h1>

        {/* ============= Start of Courses ================= */}
        <div className="courses-table">
          <h2>English</h2>
          <table>
            <thead>
              <tr>
                <th>Unit No.</th>
                <th>Unit Name</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {loading
                ? lessons?.map((lesson, index) => {
                    // const course = res.data.course;
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{lesson.name}</td>
                        <td>
                          <Link
                            href={{
                              pathname: `/dashboard-student/courses/english/unit-01`,
                              query: {
                                lessonID: lesson._id,
                                lessonName: lesson.name,
                              },
                            }}
                          >
                            click
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
        {/* ============= End of Courses  ================== */}
      </main>
      {/*=============== End Of Main  ==================*/}
    </LayoutStudent>
  );
};

export default English;
