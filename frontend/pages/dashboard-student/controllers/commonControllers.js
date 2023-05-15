import axios from "axios";
import Cookies from "js-cookie";


export const getCourses = async () => {
    const student = await getStudent();
    // console.log(student.student.classroom);
    const classroom = student.student.classroom;
    // console.log("Classroom", classroom);

    const response = await axios.get(
        `http://localhost:7000/api/v1/courses/${classroom}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );

    return response.data;
};



export const getStudent = async () => {
    const response = await axios.get(`http://localhost:7000/api/v1/student`, {
        headers: {
            Authorization: `${Cookies.get("token")}`,
        },
    });

    return response.data;
};








