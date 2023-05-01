import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import swal from "@sweetalert/with-react";
import {Form} from "react-bootstrap";

const StudentForm = () => {

    const router = useRouter();

    const handleSubmit = (e) => {

        e.preventDefault();

        swal({
            text: "Student's Admission Test",
            buttons: {
                test: {
                    text: "Take Test",
                    value: "test",
                }
            },
            content: (
                <div>
                    <ol style={{textAlign: "left"}}>
                        <li>You will have 15 mins for the quiz.</li>
                        <li>You can't exit from Quiz while you're playing.</li>
                        <li>Each Question carry equal marks.</li>
                    </ol>



                </div>
            )
        })
            .then(value => {
                switch(value){
                    case "test":
                        router.push("/quiz");
                        break;

                    default:
                        swal.close();

                }
            })

    }


    return (
        <div className="mx-auto col-lg-6 col-md-12 mt-5">
            <div className="login-form">
                <h2>Student Admission</h2>

                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="form-group">
                        <label>Father Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" placeholder="Age" />
                    </div>

                    <div className="form-group">
                        <label>Father NIC</label>
                        <input type="number" className="form-control" placeholder="Father NIC" />
                    </div>

                    <div className="form-group">
                        <label>Father NIC</label>
                        <input type="number" className="form-control" placeholder="Father NIC" />
                    </div>

                    <Form.Select name="" id="" className="nice-select option">
                        <option className={"option nice-select"} value="">Class 1</option>
                        <option className={"option"}  value="">Class 2</option>
                        <option className={"option"}  value="">Class 3</option>
                        <option className={"option"}  value="">Class 4</option>
                        <option className={"option"}  value="">Class 5</option>
                        <option className={"option"}  value="">Class 6</option>
                        <option className={"option"}  value="">Class 7</option>
                        <option className={"option"}  value="">Class 8</option>
                        <option className={"option"}  value="">Class 9</option>
                        <option className={"option"}  value="">Class 10</option>
                    </Form.Select><br/>


                    <div className="form-group">
                        <label>B-Form</label>
                        <input type="button" value="Upload Photo"/>
                    </div>

                    <div className="form-group">
                        <label>Father CNIC</label>
                        <input type="button" value="Upload Photo"/>
                    </div>

                    <div className="form-group">
                        <label>Passport Size Photo</label>
                        <input type="button" value="Upload Photo"/>
                    </div>

                    <button type="submit">Submit</button>



                </Form>

            </div>

        </div>

    )
}

export default StudentForm;
