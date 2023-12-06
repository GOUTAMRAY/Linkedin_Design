import { toast } from "react-toastify"


export const createToast = (msg, type ="error") => {
   return toast[type](msg);
}













