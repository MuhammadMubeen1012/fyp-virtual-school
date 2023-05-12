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
// @output [announcements]
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

// console.log("Announcements:", getAnnouncements());

// update announcement
// @output {success property}
export const updateAnnouncement = async (id, data) => {
  const payLoad = data;
  const response = await axios.put(
    `http://localhost:7000/api/v1/update/announcement/${id}`,
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
//   "Updating Announcement",
//   updateAnnouncement("645d0a8796394eb8c03a37ea", {
//     subject: "Announcement: Public Holiday",
//     description: "Tomorrow is the holiday in regard of Qauid's Birthday",
//     attachment: "Holiday_Notice.pdf",
//     announcementFor: "all",
//   })
// );

// delete announcement
// @output {deleted announcement and success property}
export const deleteAnnouncement = async (id) => {
  const response = await axios.delete(
    `http://localhost:7000/api/v1/delete/announcement/${id}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log(
//   "Deletinng Announcement",
//   deleteAnnouncement("645d0a8796394eb8c03a37ea")
// );

// get single announcement
// @output {announcement and success property}
export const getAnnouncement = async (id) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/announcement/${id}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log("Single Announcement", getAnnouncement("645e4ca8f26332cd13d9cc2d"));
