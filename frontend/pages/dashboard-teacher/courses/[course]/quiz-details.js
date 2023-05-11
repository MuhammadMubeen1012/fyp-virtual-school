import React, {useEffect, useState} from 'react';
import LayoutTeacher from "../../../../components/Dashboard/Layout/LayoutTeacher";
import Link from "next/link";
import {Router, useRouter} from "next/router";
import {getLessons} from "../../../../components/Controllers/CourseController";
import {Button, Form, Modal} from "react-bootstrap";
import {AssignmentModal, ContentModal, EventModal, QuizModal} from "./[slug]";

const QuizDetails = () => {


    return (
        <LayoutTeacher>
            {/*=============== Start of main ================= */}
            <main>
                <h1>View Submissions</h1>
                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Student Name</th>
                                <th>Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Momin</td>
                                <td>11:00pm</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutTeacher>
    );
};

export default QuizDetails;
