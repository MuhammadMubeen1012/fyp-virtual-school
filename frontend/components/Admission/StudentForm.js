import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import swal from "@sweetalert/with-react";
import {Form} from "react-bootstrap";
import axios from "axios";
import {image} from "@cloudinary/url-gen/qualifiers/source";
import Cookies from "js-cookie";
import toast, {Toaster} from "react-hot-toast";

const StudentForm = () => {
    const router = useRouter();

    const [imageOne, setImageOne] = useState();
    const [imageTwo, setImageTwo] = useState();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        age: '',
        phoneNumber: '',
        fatherNIC: '',
        class: '',
    });


    useEffect(() => {
        // console.log(formData)
    }, [formData, imageOne, imageTwo]);



    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData)
        console.log("Image One" + imageOne);
        console.log("Image Two" +  imageTwo);

        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';


        const {_id} = JSON.parse( localStorage.getItem('user') );

        const dummyData = {
            "user": _id,
            "firstName": "Sheeraaz",
            "lastName": "Ahmed",
            "fatherName": "Raees",
            "age": 28,
            "phoneNumber": 93151515115,
            "fatherNIC": 4550400000000,
            "classroom": "6433b73ed47c769ed165ca0d",
            "bForm": {
                "public_id": "products/dsvbpny402gelwugv2le",
                "url": "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg"
            },
            "photo": {
                "public_id": "products/dsvbpny402gelwugv2le",
                "url": "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg"
            }
        }

        const data = {
            "user": _id,
            "firstName": formData.firstName,
            "lastName": formData.lastName,
            "fatherName": formData.fatherName,
            "age": formData.age,
            "phoneNumber": formData.phoneNumber,
            "fatherNIC": formData.fatherNIC,
            "class": formData.class,
            "bForm": imageOne,
            "photo": imageTwo,

        }

        try {
            const res = axios.post('http://localhost:7000/api/v1/admission/student/data',dummyData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `${Cookies.get('token')}`
                }
            }).then((res) => {
                console.log(res);
                console.log("Registered Successfully");
                toast.success("Registered Successfully");
            })


        } catch (error) {
            let cookie = Cookies.get('token');
            console.log("Errror ", cookie);
            console.log(error);
        }


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
                        router.push("/quiz-student");
                        break;

                    default:
                        swal.close();

                }
            })

    }


    const handleInputField = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))

    }


    return (
        <div className="mx-auto col-lg-6 col-md-12 mt-5">
            <div className="login-form">
                <Toaster />
                <h2>Student Admission</h2>

                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                               onChange={handleInputField}
                               name={"firstName"}
                               value={formData.firstName}
                               className="form-control" placeholder="First Name" />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                               onChange={handleInputField}
                               name={"lastName"}
                               value={formData.lastName}
                               className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="form-group">
                        <label>Father Name</label>
                        <input type="text"
                               onChange={handleInputField}
                               name={"fatherName"}
                               value={formData.fatherName}
                               className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number"
                               onChange={handleInputField}
                               name={"age"}
                               value={formData.age}
                               className="form-control" placeholder="Age" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text"
                               onChange={handleInputField}
                               name={"phoneNumber"}
                               value={formData.phoneNumber}
                               className="form-control" placeholder="Phone Number" />
                    </div>

                    <div className="form-group">
                        <label>Father NIC</label>
                        <input type="text"
                               onChange={handleInputField}
                               name={"fatherNIC"}
                               value={formData.fatherNIC}
                               className="form-control" placeholder="Father NIC" />
                    </div>

                    <Form.Select
                        onChange={handleInputField}
                        name="class"
                        value={formData.class}
                        className="nice-select option">
                        <option className={"option nice-select"} value="">___Select Class___</option>
                        <option className={"option"} value="1">Class 1</option>
                        <option className={"option"} value="2">Class 2</option>
                        <option className={"option"} value="3">Class 3</option>
                        <option className={"option"} value="4">Class 4</option>
                        <option className={"option"} value="5">Class 5</option>
                        <option className={"option"} value="6">Class 6</option>
                        <option className={"option"} value="7">Class 7</option>
                        <option className={"option"} value="8">Class 8</option>
                        <option className={"option"} value="9">Class 9</option>
                        <option className={"option"} value="10">Class 10</option>
                    </Form.Select><br/>


                    <div className="form-group">
                        <label>B-Form</label>
                        <input
                            type="file"
                            accept={"image/*"}
                            name={"bForm"} id={"bForm"}
                            onChange={async (event) => {
                                const image = event.target.files[0];
                                const formData = new FormData();

                                formData.append("file", image);
                                formData.append("upload_preset", "testing");
                                formData.append("cloud_name", "dwb6ne3uj");

                                try{
                                    const res = await axios.post('https://api.cloudinary.com/v1_1/dwb6ne3uj/image/upload', formData);

                                    let {public_id, url} = res.data;
                                    console.log({public_id, url})
                                    setImageOne({
                                        public_id,
                                        url
                                    })



                                }catch(error) {
                                    console.log(error);
                                }

                            }}
                        />
                    </div>


                    <div className="form-group">
                        <label>Passport Size Photo</label>
                        <input
                            type="file"
                            accept={"image/*"}
                            name={"passport"} id={"passport"}
                            onChange={async (event) => {
                                const image = event.target.files[0];
                                const formData = new FormData();
                                formData.append("file", image);
                                formData.append("upload_preset", "testing");
                                formData.append("cloud_name", "dwb6ne3uj");

                                try {
                                    const res = await axios.post("https://api.cloudinary.com/v1_1/dwb6ne3uj/image/upload", formData);

                                    const {public_id, url} = res.data;
                                    console.log({public_id, url})
                                    setImageTwo({public_id, url})

                                }catch (e) {
                                    console.log(e);
                                }

                            }}
                        />
                    </div>

                    <button type="submit">Submit</button>



                </Form>

            </div>

        </div>

    )
}

export default StudentForm;
