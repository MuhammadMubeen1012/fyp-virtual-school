import React from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Form} from "react-bootstrap";

const SubjectiveExam = () => {
    return (
        <LayoutStudent>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Exam</h1>


                {/* ============= Start of Courses ================= */}
                <div className="courses-table">

                    <h2>Subjective Exam</h2>
                    <br/>

                    <Questions />

                </div>
                {/* ============= End of Courses  ================== */}

            </main>
            {/*=============== End Of Main  ==================*/}


        </LayoutStudent>
    );
};

export default SubjectiveExam;





const Questions = () => {



    return(
        <>
            <Form>
                <Form.Label>
                    Question
                </Form.Label>

                <Form.Control
                    as="textarea"
                    placeholder="Type answer here..."
                    style={{ height: '100px', resize: "none" }}
                />



                <br/>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button type={"submit"}>Submit</Button>
                </div>
            </Form>
        </>
    )
}


