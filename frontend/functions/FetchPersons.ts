"use client";
import axiosClient from "../components/Api";

async function fetchPersons(skip = null, limit = null) {
  try {
    const response = await axiosClient.get("/persons_credentials/");
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error("fetching error:", error);
    return null;
  }
}
export default fetchPersons;
