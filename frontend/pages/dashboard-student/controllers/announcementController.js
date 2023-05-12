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
