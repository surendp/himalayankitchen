import Axios from "axios";

export default function() {
 return Axios.create({
   baseURL: 'https://secret-castle-23220.herokuapp.com' 
 })
}