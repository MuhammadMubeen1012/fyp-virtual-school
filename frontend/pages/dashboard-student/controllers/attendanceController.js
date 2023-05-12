import axios from "axios";
import Cookies from "js-cookie";

// get student Attendance to show dates and status
// @output
export const getAttendance = async (courseID, studentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/attendance/${courseID}/${studentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};
