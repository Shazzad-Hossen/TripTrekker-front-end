import axios from "axios";
const baseUrl = "http://localhost:4000";
const config = {
  headers: {
    // "Content-Type": "application/json",
  },
  withCredentials: true,
};
export const publicGet = async (endPoint) => {
  try {
    const res = await axios.get(`${baseUrl + endPoint}`,config);
  return res;
    
  } catch (error) {
    console.log(error);
    return error.response;
    
  }
};
export const publicPost = async (endPoint, data) => {
  try {
    const res = await axios.post(`${baseUrl + endPoint}`, data, config);
  return res;
    
  } catch (error) {
    console.log(error);
    return error.response;
    
  }
};

export const privatePatch = async (endPoint, data) => {
  try {
    const res = await axios.patch(`${baseUrl + endPoint}`, data, config);
  return res;
    
  } catch (error) {
    console.log(error);
    return error.response;
    
  }
};

export const publicDelete = async (endPoint) => {
  try {
    const res = await axios.delete(`${baseUrl + endPoint}`,config);
  return res;
    
  } catch (error) {
    console.log(error);
    return error.response;
    
  }
};

