import React, {useState} from 'react';
import toast, {Toaster} from "react-hot-toast";
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name : username, // name: username,
            email,  // email: email,
            password, // password: password
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

            console.log(res);
            console.log(data);
            setUsername('');
            setEmail('');
            setPassword('');
            toast.success("Registered Successfully");

        }catch (error) {
            console.log(error);
        }




    }
    return (
        <div className="register-form">
            <Toaster />
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input required type="text" className="form-control" placeholder="Username" onChange={
                        (e) => setUsername(e.target.value)
                    } />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input required type="email" className="form-control" placeholder="email" onChange={
                        (e) => setEmail(e.target.value)
                    } />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input required type="password"  className="form-control" placeholder="Password"
                     onChange={(e) =>{
                            setPassword(e.target.value)}
                    } />
                </div>

                <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
