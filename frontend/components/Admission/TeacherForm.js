import React, {useEffect, useState} from "react";
import swal from '@sweetalert/with-react'
import {useRouter} from "next/router";
import QuizTeacher from "../../pages/quiz-teacher";
import {Form} from "react-bootstrap";
import {fetch} from "@cloudinary/url-gen/qualifiers/source";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";


const TeacherForm = () => {

    const [formData, setFormData] = useState({
        user: '642f9b80bfd5ce948e4c2006',
        firstName: '',
        lastName: '',
        fatherName: '',
        age: '',
        phoneNumber: '',
        personalNIC: '',
        fatherNIC: '',
        class: '',
        course: '',
        bForm: {
            public_id: '',
            url: '',
        },
        photo: {
            public_id: '',
            url: '',
        },
        degreeProof: {
            public_id: '',
            url: '',
        }
    });
    const [addCourses, setAddCourses] = useState([]);

    const [image, setImage] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const [imageThree, setImageThree] = useState('');
    const [allImages, setAllImages] = useState({
        bForm: {
            public_id: '',
            url: '',
        },
        photo: {
            public_id: '',
            url: '',
        },
        degreeProof: {
            public_id: '',
            url: '',
        }
    });
    const [imgData, setImgData] = useState({
        public_id: '',
        url: '',
    });

    const [imageArray, setImageArray] = useState([]);
    const [newForm, setNewForm] = useState(null);

    const router = useRouter();



    useEffect(() => {

        const {bForm, photo, degreeProof} = allImages;

        setFormData(prevState => ({
            ...prevState,
            course: addCourses,
            bForm,
            photo,
            degreeProof
        }))

        // console.log(formData)

    }, [addCourses, imgData, imageArray, allImages]);

    useEffect( () => {
        // console.log(imgData);
        if (imgData.url !== ""){
            setImageArray([...imageArray,imgData])
        }
    }, [ imgData ]);

    useEffect(() => {
        // console.log(imageArray)

        setAllImages(prevState => ({
            ...prevState,
            bForm: imageArray[0],
            photo: imageArray[1],
            degreeProof: imageArray[2],
        }))


    }, [imageArray]);

    useEffect(() => {


    }, [formData]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        // await uploadImage(image);
        // await uploadImage(imageTwo);
        // await uploadImage(imageThree);
        //
        //
        // await console.log("Inside handle Submit " + formData.firstName);
        // await console.log("Inside handle Submit " + formData);
        // await console.log("Inside handle Submit " + newForm);

        //
        //
        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

        const data = {
            "user": "642f9b80bfd5ce948e4c2006",
            "firstName": "Muhammad",
            "lastName": "Mubeen",
            "fatherName": "Yaseen",
            "age": 28,
            "phoneNumber": 93151515115,
            "personalNIC": 4550400000000,
            "fatherNIC": 4550400000000,
            "class": 1,
            "course": ["English", "Urdu", "Pakistan Studies"],
            "bForm": {
                "public_id": "products/dsvbpny402gelwugv2le",
                "url": "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg"
            },
            "photo": {
                "public_id": "products/dsvbpny402gelwugv2le",
                "url": "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg"
            },
            "degreeProof": {
                "public_id": "products/dsvbpny402gelwugv2le",
                "url": "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg"
            }
        }

        // const newData = JSON.parse(data);
        // console.log(newData);

        try{
            const res = await axios.post('http://localhost:7000/api/v1/admission/teacher/data', data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            console.log(res);
            console.log("Registered Successfully");
            toast.success("Registered Successfully");

        }catch (error) {
            console.log(error);
        }



        // swal({
        //     text: "Teacher's Admission Test",
        //     buttons: {
        //         test: {
        //             text: "Take Test",
        //             value: "test",
        //         }
        //     },
        //     content: (
        //         <div>
        //             <ol style={{textAlign: "left"}}>
        //                 <li>You will have 15 mins for the quiz.</li>
        //                 <li>You can't exit from Quiz while you're playing.</li>
        //                 <li>Each Question carry equal marks.</li>
        //             </ol>
        //
        //
        //
        //         </div>
        //     )
        // })
        //     .then(value => {
        //         switch(value){
        //             case "test":
        //                 router.push("/quiz");
        //                 break;
        //
        //             default:
        //                 swal.close();
        //
        //         }
        //     })



    }



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
    }
    const handleCheckbox = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        // console.log(value, checked);

        if (checked){
            // jo checked hain un ko array me store karna hai
            setAddCourses([
                ...addCourses,
                value
            ]);
        }else{
            // unchecked values k elawa sub return karna [checked ones]
            setAddCourses(addCourses.filter((course) => course !== value ))  // return all checked values
        }


    }
    const handleDropdownChange = (e) => {
        const selectedClass = e.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            class: selectedClass
        }))

    }

    const handleImageOne = async (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }

    const handleImageTwo = async (e) => {
        console.log(e.target.files);
        setImageTwo(e.target.files[0]);
    }

    const handleImageThree = (e) => {
        console.log(e.target.files);
        setImageThree(e.target.files[0]);
    }


    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ek-school");
        formData.append("cloud_name", "dwb6ne3uj");


        try{
            const res = await axios.post('https://api.cloudinary.com/v1_1/dwb6ne3uj/image/upload', formData);
            const data = await res.data;
            const {public_id, url} = data;

            // console.log("full object" + data);
            // console.log( "img id" +  data.public_id)
            // console.log("url" + data.url);

            setImgData(prev => ({
                ...prev,
                public_id,
                url
            }))

        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <div className="mx-auto col-lg-6 col-md-12 mt-5 ">

            {JSON.stringify(formData)}

            <Toaster />
            <div className="login-form">
                <h2>Teacher Admission</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                               onChange={handleChange}
                               name={"firstName"}
                               value={formData.firstName}
                               className="form-control" placeholder="First Name" />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                               onChange={handleChange}
                               name={"lastName"}
                               value={formData.lastName}
                               className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="form-group">
                        <label>Father Name</label>
                        <input type="text"
                               onChange={handleChange}
                               name={"fatherName"}
                               value={formData.fatherName}
                               className="form-control" placeholder="Father Name" />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text"
                               onChange={handleChange}
                               name={"phoneNumber"}
                               value={formData.phoneNumber}
                               className="form-control" placeholder="Phone Number" />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number"
                               onChange={handleChange}
                               name={"age"}
                               value={formData.age}
                               className="form-control" placeholder="Age" />
                    </div>

                    <div className="form-group">
                        <label>Personal NIC Number</label>
                        <input type="text"
                               onChange={handleChange}
                               name={"personalNIC"}
                               value={formData.personalNIC}
                               className="form-control" placeholder="Personal NIC Number" />
                    </div>

                    <div className="form-group">
                        <label>Father NIC Number</label>
                        <input type="text"
                               onChange={handleChange}
                               name={"fatherNIC"}
                               value={formData.fatherNIC}
                               className="form-control" placeholder="Father NIC Number" />
                    </div>


                    <label style={{fontWeight:"bold"}}>Select any three courses</label>
                    <div className="">
                        <input type="checkbox"
                               onChange={handleCheckbox}
                               value={"English"} name="courses" id="course1"/>
                        <label htmlFor="course1">English</label><br/>

                        <input type="checkbox"
                               onChange={handleCheckbox}
                               value={"Urdu"} name="courses" id="course2"/>
                        <label htmlFor="course2">Urdu</label><br/>

                        <input type="checkbox"
                               onChange={handleCheckbox}
                               value={"Math"} name="courses" id="course3"/>
                        <label htmlFor="course3">Math</label><br/>

                        <input type="checkbox"
                               onChange={handleCheckbox}
                               value={"Science"} name="courses" id="course4"/>
                        <label htmlFor="course4">Science</label><br/>

                        <input type="checkbox"
                               onChange={handleCheckbox}
                               value={"History"} name="courses" id="course5"/>
                        <label htmlFor="course5">History</label><br/>

                        <input type="checkbox"
                               onChange={handleCheckbox}
                               value={"Drawing"} name="courses" id="course6"/>
                        <label htmlFor="course6">Drawing</label><br/>

                    </div><br/>

                    <Form.Select
                        value={formData.class}
                        onChange={handleDropdownChange}
                        name="" id="" className="nice-select option">
                        <option className={"option nice-select"} value="">___Select Class___</option>
                        <option className={"option"}  value="1">Class 1</option>
                        <option className={"option"}  value="2">Class 2</option>
                        <option className={"option"}  value="3">Class 3</option>
                        <option className={"option"}  value="4">Class 4</option>
                        <option className={"option"}  value="5">Class 5</option>
                        <option className={"option"}  value="6">Class 6</option>
                        <option className={"option"}  value="7">Class 7</option>
                        <option className={"option"}  value="8">Class 8</option>
                        <option className={"option"}  value="9">Class 9</option>
                        <option className={"option"}  value="10">Class 10</option>
                    </Form.Select><br/>


                    <div className="form-group">
                        <label>CNIC</label>
                        <input type="file"
                               onChange={handleImageOne}
                               accept={"image/*"}
                               name="cnic" id={"cnic"} />
                    </div>

                    <div className="form-group">
                        <label>Last Qualification Certificate</label>
                        <input type="file"
                               onChange={handleImageTwo}
                               accept={"image/*"}
                               name={"last-qualification"} id={"last-qualification"} />
                    </div>

                    <div className="form-group">
                        <label>Passport Size Photo</label>
                        <input type="file"
                               onChange={handleImageThree}
                               accept={"image/*"}
                               name={"passport-photo"} id={"passport-photo"} />
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
