import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import swal from "@sweetalert/with-react";

const StudentForm = () => {

    const router = useRouter();

    const handleSubmit = (e) => {

        e.preventDefault();

        swal({
            text: "Teacher's Admission Test",
            buttons: {
                test: {
                    text: "Take Test",
                    value: "test",
                }
            },
            content: (
                <div>
                    test details will be here...
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

                <form onSubmit={handleSubmit}>
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

                    <select name="" id="" className="nice-select option">
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
                    </select>

                    <button type="submit">Log In</button>

                    <div className={"mx-auto pt-3"}>Don't have an account?
                        <a style={{
                            color: "#fe4a55",
                            paddingLeft: "0.5rem",
                        }} href="/register">Sign up</a>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default StudentForm;
