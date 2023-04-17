import React from "react";
import swal from '@sweetalert/with-react'
import {useRouter} from "next/router";
import Quiz from "../../pages/quiz";


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

                    <div className="form-group">
                        <select name="" id="" className="nice-select option">
                            <option className={"option nice-select"} value="">Web Engineering</option>
                            <option className={"option"}  value="">Enterprise Application Development</option>
                            <option className={"option"}  value="">Blockchain</option>
                        </select>
                    </div>


                    <button

                        type="submit"
                    >
                        Submit
                    </button>

                </form>
            </div>

        </div>
    )
}

export default TeacherForm;
