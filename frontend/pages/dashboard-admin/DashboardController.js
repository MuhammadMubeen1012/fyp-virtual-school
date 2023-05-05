import axios from "axios";
import Cookies from "js-cookie";

export const getClassroomsByAcademicYear = async () => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/academicYear/classrooms/6433b54f4f2a795f64ae7ce7`,
        {
            headers: {
                Authorization: `${Cookies.get('token')}`
            }
        });
    return response.data.classrooms;
}