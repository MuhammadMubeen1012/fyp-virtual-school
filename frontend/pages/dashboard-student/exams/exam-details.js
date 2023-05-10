import React from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card} from "react-bootstrap";

const Courses = () => {
    return (
        <LayoutStudent>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Exam</h1>


                <br/><br/>
                <Card>
                    <Card.Header>Title</Card.Header>
                    <Card.Body>
                        <Card.Text>Description</Card.Text>
                        <Button variant="primary" href={"/dashboard-student/exams/objective-exam"}>Give Exam</Button>
                        <Button variant="primary" className={"m-1"}>View</Button>
                    </Card.Body>
                </Card>

            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutStudent>
    );
};

export default Courses;
