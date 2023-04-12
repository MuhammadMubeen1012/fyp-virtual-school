import React from 'react';
import LayoutStudent from "../../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Nav} from "react-bootstrap";

const Unit01 = () => {
    return (
        <LayoutStudent>
            {/*=============== Start of main ================= */}

            <main>

                <h1>Overview</h1>

                <div className="" style={{border: "1px solid red"}}>
                    <div>
                        <span>Unit 1</span>
                        <h3>Speaking to the world</h3>
                    </div>

                    <div>
                        <span>Next Lesson </span>
                    </div>
                </div>

                <div className="" style={{border: "1px solid red"}}>
                    Vector Image...
                </div>


                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#">Lectures</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Live Video</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Assignments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Exercises</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Quizes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Other Section</Nav.Link>
                    </Nav.Item>


                </Nav>


                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>English</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Unit No.</th>
                                <th>Unit Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>01</th>
                                <td>Introduction</td>
                                <Link href={"/dashboard-student/courses/english/unit-01"} className="primary ">Details</Link>
                            </tr>

                            <tr>
                                <th>02</th>
                                <td>Vocabulary</td>
                                <td className="primary">Details</td>
                            </tr>
                            <tr>
                                <th>03</th>
                                <td>Grammar</td>
                                <td className="primary">Details</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
                {/* ============= End of Courses  ================== */}


            </main>

            {/*=============== End Of Main  ==================*/}
        </LayoutStudent>
    );
};

export default Unit01;
