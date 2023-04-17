import React from 'react';

import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name : username, // name: username,
            email,  // email: email,
            password, // password: password
        };
        console.log(data);

        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';

        axios.post('http://localhost:7000/api/v1/signup', data,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            console.log(response);
//             //token
//             if(response.data.success){
//                 const token = response.data.token;
//                 let user = response.data.user;
// +
//                 //set token to local storage
//                 localStorage.setItem('token', token);
//                 localStorage.setItem('user', JSON.stringify(user));

//                  user = JSON.parse(localStorage.getItem('user'));

//                 if (user.role === 'admin') {
//                     window.location.href = '/admin/dashboard'; //redirect to admin dashboard
                    
//                 } else if (user.role === 'user') {
//                     window.location.href = '/user/dashboard'; //redirect to user dashboard
                    
//                 }
//             }
            
        }).catch(error => {
            console.log('sdfgdsgsegdsgds',error);
        });


    }
    return (
        <div className="register-form">
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={
                        (e) => setUsername(e.target.value)
                    } />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="email" onChange={
                        (e) => setEmail(e.target.value)
                    } />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  className="form-control" placeholder="Password"
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
