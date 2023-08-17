import axios from "axios";
const baseUrl='http://localhost:5000'
const headers={
    "Content-Type": "application/json",
}
export const publicPost=async(endPoint,data)=>{
    const res= await axios.post(`${baseUrl+endPoint}`,data,{headers});
    return res;
}
export const publicGet=async(endPoint)=>{
    const res= await axios.get(`${baseUrl+endPoint}`);
    return res;
}