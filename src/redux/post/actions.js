import axios from "axios"
import { ADD_POST_FULLFILLED, ADD_POST_PENDING, ADD_POST_REJECTED, DELETE_POST_FULLFILLED, DELETE_POST_PENDING, DELETE_POST_REJECTED, GET_POST_FULLFILLED, GET_POST_PENDING, GET_POST_REJECTED, UPDATE_POST_FULLFILLED, UPDATE_POST_PENDING, UPDATE_POST_REJECTED } from "./actionTypes";

// get all student 
export const getAllPosts = () => async(dispatch) => {
   try {
    dispatch({ type : GET_POST_PENDING})
     const response = await  axios.get("http://localhost:5000/students");
     dispatch({ type : GET_POST_FULLFILLED, payload : response.data})
   } catch (error) {
     dispatch({ type : GET_POST_REJECTED})
   }
};

// get all student 
export const deletePosts = (id) => async(dispatch) => {
   try {
    dispatch({ type : DELETE_POST_PENDING})
     await  axios.delete(`http://localhost:5000/students/${id}`);
     dispatch({ type : DELETE_POST_FULLFILLED, payload : id})
   } catch (error) {
     dispatch({ type : DELETE_POST_REJECTED})
   }
};

// get all student 
export const addNewPosts = (data) => async(dispatch) => {
   try {
    dispatch({ type : ADD_POST_PENDING})
     const response = await  axios.post(`http://localhost:5000/students`, data );
     dispatch({ type : ADD_POST_FULLFILLED, payload : response.data})
   } catch (error) {
     dispatch({ type : ADD_POST_REJECTED })
   }
};

// get all student 
export const updatePosts = (data) => async(dispatch) => {
   try {
    dispatch({ type : UPDATE_POST_PENDING})
     await  axios.patch(`http://localhost:5000/students/${data.id}`, data );
     dispatch({ type : UPDATE_POST_FULLFILLED, payload : data})
   } catch (error) {
     dispatch({ type : UPDATE_POST_REJECTED })
   }
};











