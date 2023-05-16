import React, { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import { useRouter } from "next/router";
import QuizTeacher from "../../pages/quiz-teacher";
import { Form } from "react-bootstrap";
import { fetch } from "@cloudinary/url-gen/qualifiers/source";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const TeacherForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalNIC, setPersonalNIC] = useState("");
  const [fatherNIC, setFatherNIC] = useState("");
  const [courses, setCourses] = useState([]);
  const [classroom, setClassroom] = useState("");
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const router = useRouter();

  useEffect(() => {}, [image1, image2, image3, courses]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Image One" + image1);
    console.log("Image Two" + image2);

    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-With, Content-Type, Accept";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] =
      "GET, POST, PUT, DELETE, OPTIONS";

    const { _id } = JSON.parse(localStorage.getItem("user"));

    const dummyData = {
      user: _id,
      firstName: "Muhammad",
      lastName: "Mubeen",
      fatherName: "Yaseen",
      age: 28,
      phoneNumber: 93151515115,
      personalNIC: 4550400000000,
      fatherNIC: 4550400000000,
      class: 1,
      course: ["English", "Urdu", "Pakistan Studies"],
      bForm: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
      photo: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
      degreeProof: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
    };
    const data = {
      user: _id,
      firstName: firstName,
      lastName: lastName,
      fatherName: fatherName,
      age: age,
      phoneNumber: phoneNumber,
      personalNIC: personalNIC,
      fatherNIC: fatherNIC,
      course: courses,
      class: classroom,
      bForm: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
      photo: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
      degreeProof: {
        public_id: "products/dsvbpny402gelwugv2le",
        url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
      },
    };

    try {
      const res = axios
        .post(
          "http://localhost:7000/api/v1/admission/teacher/data",
          dummyData,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `${Cookies.get("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          console.log("Registered Successfully");
          toast.success("Registered Successfully");
        });
    } catch (error) {
      let cookie = Cookies.get("token");
      console.log("Errror ", cookie);
      console.log(error);
    }

    swal({
      text: "Teacher's Admission Test",
      buttons: {
        test: {
          text: "Take Test",
          value: "test",
        },
      },
      content: (
        <div>
          <ol style={{ textAlign: "left" }}>
            <li>You will have 15 mins for the quiz.</li>
            <li>You can't exit from Quiz while you're playing.</li>
            <li>Each Question carry equal marks.</li>
          </ol>
        </div>
      ),
    }).then((value) => {
      switch (value) {
        case "test":
          router.push("/quiz");
          break;

        default:
          swal.close();
      }
    });
  };

  const handleCheckbox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter((course) => course !== value));
    }
  };
  const handleDropdownChange = (e) => {
    const selectedClass = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      class: selectedClass,
    }));
  };

  return (
    <div className="mx-auto col-lg-6 col-md-12 mt-5 ">
      <Toaster />
      <div className="login-form">
        <h2>Teacher Admission</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              name={"firstName"}
              value={firstName}
              className="form-control"
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name={"lastName"}
              value={lastName}
              className="form-control"
              placeholder="Last Name"
            />
          </div>

          <div className="form-group">
            <label>Father Name</label>
            <input
              type="text"
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
              name={"fatherName"}
              value={fatherName}
              className="form-control"
              placeholder="Father Name"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              name={"phoneNumber"}
              value={phoneNumber}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              name={"age"}
              value={age}
              className="form-control"
              placeholder="Age"
            />
          </div>

          <div className="form-group">
            <label>Personal NIC Number</label>
            <input
              type="text"
              onChange={(e) => {
                setPersonalNIC(e.target.value);
              }}
              name={"personalNIC"}
              value={personalNIC}
              className="form-control"
              placeholder="Personal NIC Number"
            />
          </div>

          <div className="form-group">
            <label>Father NIC Number</label>
            <input
              type="text"
              onChange={(e) => {
                setFatherNIC(e.target.value);
              }}
              name={"fatherNIC"}
              value={fatherNIC}
              className="form-control"
              placeholder="Father NIC Number"
            />
          </div>

          <label style={{ fontWeight: "bold" }}>Select any three courses</label>
          <div className="">
            <input
              type="checkbox"
              onChange={handleCheckbox}
              value={"English"}
              name="courses"
              id="course1"
            />
            <label htmlFor="course1">English</label>
            <br />

            <input
              type="checkbox"
              onChange={handleCheckbox}
              value={"Urdu"}
              name="courses"
              id="course2"
            />
            <label htmlFor="course2">Urdu</label>
            <br />

            <input
              type="checkbox"
              onChange={handleCheckbox}
              value={"Math"}
              name="courses"
              id="course3"
            />
            <label htmlFor="course3">Math</label>
            <br />

            <input
              type="checkbox"
              onChange={handleCheckbox}
              value={"Science"}
              name="courses"
              id="course4"
            />
            <label htmlFor="course4">Science</label>
            <br />

            <input
              type="checkbox"
              onChange={handleCheckbox}
              value={"History"}
              name="courses"
              id="course5"
            />
            <label htmlFor="course5">History</label>
            <br />

            <input
              type="checkbox"
              onChange={handleCheckbox}
              value={"Drawing"}
              name="courses"
              id="course6"
            />
            <label htmlFor="course6">Drawing</label>
            <br />
          </div>
          <br />
          <Form.Select
            value={classroom}
            onChange={(e) => {
              setClassroom(e.target.value);
            }}
            name="classroom"
            id=""
            className="nice-select option"
          >
            <option className={"option nice-select"} value="">
              ___Select Class___
            </option>
            <option className={"option"} value="1">
              Class 1
            </option>
            <option className={"option"} value="2">
              Class 2
            </option>
            <option className={"option"} value="3">
              Class 3
            </option>
            <option className={"option"} value="4">
              Class 4
            </option>
            <option className={"option"} value="5">
              Class 5
            </option>
            <option className={"option"} value="6">
              Class 6
            </option>
            <option className={"option"} value="7">
              Class 7
            </option>
            <option className={"option"} value="8">
              Class 8
            </option>
            <option className={"option"} value="9">
              Class 9
            </option>
            <option className={"option"} value="10">
              Class 10
            </option>
          </Form.Select>
          <br />

          <div className="form-group">
            <label>CNIC</label>
            <input
              type="file"
              onChange={(e) => {
                const image = e.target.files[0];
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "testing");
                formData.append("cloud_name", "dwb6ne3uj");
                try {
                  axios
                    .post(
                      "https://api.cloudinary.com/v1_1/dwb6ne3uj/image/upload",
                      formData
                    )
                    .then((res) => {
                      setImage1({
                        public_id: res.data.public_id,
                        url: res.data.url,
                      });

                      console.log(res);
                    });
                } catch (error) {
                  console.log(error);
                }
              }}
              accept={"image/*"}
              name="cnic"
              id={"cnic"}
            />
          </div>

          <div className="form-group">
            <label>Last Qualification Certificate</label>
            <input
              type="file"
              onChange={(e) => {
                const image = e.target.files[0];
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "testing");
                formData.append("cloud_name", "dwb6ne3uj");
                try {
                  axios
                    .post(
                      "https://api.cloudinary.com/v1_1/dwb6ne3uj/image/upload",
                      formData
                    )
                    .then((res) => {
                      setImage2({
                        public_id: res.data.public_id,
                        url: res.data.url,
                      });

                      console.log(res);
                    });
                } catch (error) {
                  console.log(error);
                }
              }}
              accept={"image/*"}
              name={"last-qualification"}
              id={"last-qualification"}
            />
          </div>

          <div className="form-group">
            <label>Passport Size Photo</label>
            <input
              type="file"
              onChange={(e) => {
                const image = e.target.files[0];
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "testing");
                formData.append("cloud_name", "dwb6ne3uj");
                try {
                  axios
                    .post(
                      "https://api.cloudinary.com/v1_1/dwb6ne3uj/image/upload",
                      formData
                    )
                    .then((res) => {
                      setImage3({
                        public_id: res.data.public_id,
                        url: res.data.url,
                      });

                      console.log(res);
                    });
                } catch (error) {
                  console.log(error);
                }
              }}
              accept={"image/*"}
              name={"passport-photo"}
              id={"passport-photo"}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherForm;
