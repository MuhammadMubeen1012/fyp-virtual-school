import axios from "axios";
import Cookies from "js-cookie";


// const getCourse = async (id) => {
//     const response = await axios.get(`http://localhost:7000/api/v1/course/${id}`, {
//         headers: {
//             Authorization: `${Cookies.get('token')}`
//         }
//     })
//     console.log(response.data.course)
//     return response.data.course
// }

 const getLessons = async (id) => {
    return await(axios.get(`http://localhost:7000/api/v1/lesson/${id}`,
        {
            headers: {
                Authorization: `${Cookies.get('token')}`
            }

        })
    )
}


export {getLessons};


