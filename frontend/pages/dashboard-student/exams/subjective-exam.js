import React from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";

const Courses = () => {
    return (
        <LayoutStudent>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Exam</h1>


                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>Subjective Exam</h2>

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutStudent>
    );
};

export default Courses;
