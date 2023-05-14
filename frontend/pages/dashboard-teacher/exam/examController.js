import axios from "axios";
import Cookies from "js-cookie";

// create a new exam
export const createExam = async (courseID, data) => {
    const response = await axios.post(
        `http://localhost:7000/api/v1/exam/${courseID}`,
        data,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response;
};

// add subjective exam
export const createSubjectiveExam = async (examID, data) => {
    return await axios.post(
        `http://localhost:7000/api/v1/exam/subjective/${examID}`,
        {
            parts: data
        }
        ,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
};

// add objective exam
export const createObjectiveExam = async (examID, data) => {
    return await axios.post(
        `http://localhost:7000/api/v1/exam/objective/${examID}`,
        {
            questions: data
        },
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
};

// get exam
export const getExam = async (examID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/exam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

export const getExams = async (courseId) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/exam/course/${courseId}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// get subjective exam
export const getSubjectiveExam = async (examID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/exam/subjectiveExam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// get objective exam
export const getObjectiveExam = async (examID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/exam/objectiveExam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// edit exam,
export const editExam = async (examID, data) => {
    const payLoad = data;
    const response = await axios.put(
        `http://localhost:7000/api/v1/exam/update/${examID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response;
};

// edit subjective exam
export const editSubjectiveExam = async (examID, data) => {
    const payLoad = data;
    const response = await axios.put(
        `http://localhost:7000/api/v1/exam/subjectiveExam/update/${examID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response;
};

// edit objective exam
export const editObjectiveExam = async (examID, data) => {
    const payLoad = data;
    const response = await axios.put(
        `http://localhost:7000/api/v1/exam/objectiveExam/update/${examID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response;
};

// delete exam,
export const deleteExam = async (examID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/exam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// delete subjective exam,
export const deleteSubjectiveExam = async (examID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/exam/subjectiveExam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// delete objective exam
export const deleteObjectiveExam = async (examID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/exam/objectiveExam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// get submissions
export const getSubmissions = async (examID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/submissions/exam/${examID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// get submission
export const getSubmission = async (studentID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/submission/exam/${studentID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// grade submission
export const gradeSubmission = async (studentID, data) => {
    const payLoad = data;
    const response = await axios.put(
        `http://localhost:7000/api/v1/grade/exam/${studentID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// compile exam result
export const compileExamResult = async (courseID, data) => {
    const payLoad = data;

    const response = await axios.post(
        `http://localhost:7000/api/v1/result/exam/${courseID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response;
};

// publish result
export const publishResult = async (courseID, data) => {
    const payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/result/exam/${courseID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response;
};

// get results
export const getResults = async (courseID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/results/exam/course/${courseID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// get result
export const getResult = async (studentID) => {
    const response = await axios.get(
        `http://localhost:7000/api/v1/result/exam/student/${studentID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};
