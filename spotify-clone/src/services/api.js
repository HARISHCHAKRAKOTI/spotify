import axios from "axios";

const api = axios.create({
  baseURL: "https://cms.samespace.com/items/songs", // Replace with your API endpoint
});

export default {
  getSongs: async () => {
    const response = await api.get("/songs"); // Replace with your API endpoint
    return response.data;
  },
  // Add other API functions as needed
};