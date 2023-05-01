import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();



    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        };

        axios.defaults.baseURL = 'http://localhost:3000';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
        axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';


        try {

            axios.get('http://localhost:7000/api/v1/signin', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => {
                console.log(response);
                router.push("/admission")
                //token
                if (response.data.success) {
                    const token = response.data.token;
                    let user = response.data.user;

                    //set token to local storage
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));

                    user = JSON.parse(localStorage.getItem('user'));

                    if (user.role === 'admin') {
                        router.push("/admin/dashboard"); //redirect to admin dashboard
                    } else if (user.role === 'user') {
                        router.push("/user/dashboard")
                    }
                    else if (user.role === "teacher"){
                        router.push("/teacher/dashboard")
                    }
                    else if (user.role === 'user'){
                        router.push('/admission')
                    }
                }

            })

        } catch (e) {
            console.log(e, "error");
        }



        // console.log(data);
        // axios.post('/api/login', data)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }
    return (
        <div className="login-form">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username or email</label>
                    <input type="text" className="form-control" placeholder="Username or email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                            <input type="checkbox" id="test2" />
                            <label htmlFor="test2">Remember me</label>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <Link href="#">
                            <a className="lost-your-password">Lost your password?</a>
                        </Link>
                    </div>
                </div>

                <button type="submit">Log In</button>

                <div className={"mx-auto pt-3"}>Don't have an account?
                    <a style={{
                        color: "#fe4a55",
                        paddingLeft: "0.5rem",
                    }} href="/register">Sign up</a> </div>
            </form>
        </div>
    )
}

export default LoginForm;
