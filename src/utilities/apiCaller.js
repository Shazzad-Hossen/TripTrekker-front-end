import axios from "axios";
const baseUrl='http://localhost:4000'
const config = {
    headers: {
      // "Content-Type": "application/json",
    },
    withCredentials: true,
  };
export const publicPost=async(endPoint,data)=>{
    const res= await axios.post(`${baseUrl+endPoint}`,data,config);
    return res;
}
export const publicGet=async(endPoint)=>{
    const res= await axios.get(`${baseUrl+endPoint}`);
    return res;
}