import React, {useState} from 'react';
import toast, {Toaster} from "react-hot-toast";
import axios from 'axios';
import swal from "@sweetalert/with-react";
import router, {useRouter} from "next/router";

const RegisterForm = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name : formData.username, // name: username,
            email: formData.email,  // email: email,
            password: formData.password // password: password
        };


        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

        try{
            const res = await axios.post('http://localhost:7000/api/v1/signup', data,{
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            await setFormData({
                username: "",
                email: "",
                password: "",
            });

            swal({
                title: "Registered Successfully",
                icon: "success"
            }).then((value) => {
                if(value){
                    router.push("/login");
                }
            })

        }catch (error) {
            console.log(error);
        }




    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))

    }

    return (
        <div className="register-form">
            <Toaster />
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        required type="text"
                        className="form-control"
                        placeholder="Username"
                        name={"username"}
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        required type="email"
                        className="form-control"
                        placeholder="Email"
                        name={"email"}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        required type="password"
                        className="form-control"
                        placeholder="Password"
                        name={"password"}
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterForm;
