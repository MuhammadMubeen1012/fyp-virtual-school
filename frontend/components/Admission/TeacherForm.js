import React from "react";
import swal from '@sweetalert/with-react'
import {useRouter} from "next/router";
import Quiz from "../../pages/quiz";
import {Form} from "react-bootstrap";


const   TeacherForm = () => {

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
        <div className="mx-auto col-lg-6 col-md-12 mt-5 ">

            <div className="login-form">
                <h2>Teacher Admission</h2>

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
                        <input type="text" className="form-control" placeholder="Father Name" />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" className="form-control" placeholder="Phone Number" />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" placeholder="Age" />
                    </div>

                    <div className="form-group">
                        <label>Personal NIC Number</label>
                        <input type="number" className="form-control" placeholder="Personal NIC Number" />
                    </div>

                    <div className="form-group">
                        <label>Father NIC Number</label>
                        <input type="number" className="form-control" placeholder="Father NIC Number" />
                    </div>


                    <label style={{fontWeight:"bold"}}>Select any three courses</label>
                    <div className="">
                        <input type="checkbox" value={"English"} name="course1" id="course1"/>
                        <label htmlFor="course1">English</label><br/>

                        <input type="checkbox" value={"Urdu"} name="course2" id="course2"/>
                        <label htmlFor="course2">Urdu</label><br/>

                        <input type="checkbox" value={"Math"} name="course3" id="course3"/>
                        <label htmlFor="course3">Math</label><br/>

                        <input type="checkbox" value={"Science"} name="course4" id="course4"/>
                        <label htmlFor="course4">Science</label><br/>

                        <input type="checkbox" value={"History"} name="course5" id="course5"/>
                        <label htmlFor="course5">History</label><br/>

                        <input type="checkbox" value={"Drawing"} name="course6" id="course6"/>
                        <label htmlFor="course6">Drawing</label><br/>

                    </div><br/>


                    <div className="form-group">
                        <label>CNIC</label>
                        <input type="button" value="Upload Photo"/>
                    </div>

                    <div className="form-group">
                        <label>Last Qualification Certificate</label>
                        <input type="button" value="Upload Photo"/>
                    </div>

                    <div className="form-group">
                        <label>Passport Size Photo</label>
                        <input type="button" value="Upload Photo"/>
                    </div>



                    <button type="submit">
                        Submit
                    </button>

                </form>
            </div>

        </div>
    )
}

export default TeacherForm;
