import axios from "axios";
import Cookies from "js-cookie";

// create announcement
// @output {message and success property}
export const createAnnouncement = async (data) => {
  const payLoad = data;

  const response = await axios.post(
    `http://localhost:7000/api/v1/announcement`,
    payLoad,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log(
//   "Announcement creation",
//   createAnnouncement({
//     subject: "Announcement01",
//     description: "Testing Announcement",
//     attachment: "www.drive.com",
//     announcementFor: "all",
//     isChecked: "false",
//   })
// );

// get announcements
export const getAnnouncements = async () => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/announcements`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

console.log("Announcements:", getAnnouncements());

// update announcement

// delete announcement

// get single announcement
