import React, {useState} from 'react';
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import LoginForm from "../components/ProfileAuthentication/LoginForm";
import Footer from "../components/_App/Footer";
import {Nav} from "react-bootstrap";
import Link from "next/link";
import TeacherForm from "../components/Admission/TeacherForm";
import StudentForm from "../components/Admission/StudentForm";

const Admission = () => {

    const [tabSelection, setTabSelection] = useState(0);

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Admission"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Admission"
            />

            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">

                        <Nav fill variant="tabs" defaultActiveKey="link-0">
                            <Nav.Item onClick={() => setTabSelection(0)}>
                                <Nav.Link eventKey="link-0">Teacher</Nav.Link>

                            </Nav.Item>
                            <Nav.Item onClick={() => setTabSelection(1)}>
                                <Nav.Link eventKey="link-1">Student</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {

                            tabSelection === 0 ?
                                // for teacher
                                <TeacherForm />
                                :
                                // for student
                                <StudentForm />

                        }


                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Admission;
