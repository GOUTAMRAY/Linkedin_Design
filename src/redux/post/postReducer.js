import { ADD_POST_FULLFILLED, ADD_POST_PENDING, ADD_POST_REJECTED, DELETE_POST_FULLFILLED, DELETE_POST_PENDING, DELETE_POST_REJECTED, GET_POST_FULLFILLED, GET_POST_PENDING, GET_POST_REJECTED, UPDATE_POST_FULLFILLED, UPDATE_POST_PENDING, UPDATE_POST_REJECTED } from "./actionTypes";
import { initialState } from "./initialState";


// create post reducer 
const postReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_POST_PENDING:
       return {
        ...state,
        loading : true,
       };

    case GET_POST_FULLFILLED:
       return {
        ...state,
        loading : false,
        message : "Get All Students",
        posts : payload,
       };

    case GET_POST_REJECTED:
       return {
        ...state,
        loading : false,
        error : "Student get Failed"
       };
 
     // DELETE STUDENT 
     case DELETE_POST_PENDING:
      return {
       ...state,
       loading : true,
      }; 
      
      case DELETE_POST_FULLFILLED:
        return {
         ...state,
         loading : false,
         message : "Deleted  Students successful",
         posts : state.posts.filter((data) => data.id !== payload )
        }; 
        
        case DELETE_POST_REJECTED:
          return {
           ...state,
           loading : false,
           error : "Student DELETED Failed"
          };   
     
        // ADD NEW STUDENT 
        case ADD_POST_PENDING:
          return {
           ...state,
           loading : true,
          }; 
          
      case ADD_POST_FULLFILLED:
            return {
             ...state,
             loading : false,
             message : "Students created successful",
             posts : [...state.posts, payload]
            };   
        
        case ADD_POST_REJECTED:
              return {
               ...state,
               loading : false,
               error : "Student created Failed"
              }; 

       // UPDATE POST 
       case UPDATE_POST_PENDING:
        return {
         ...state,
         loading : true,
        };   

        case UPDATE_POST_FULLFILLED:
          return {
           ...state,
           loading : false,
           message : "Students UPDATED successful",
           posts : state.posts.map((item) => {
             if (item.id === payload.id) {
                return payload;
             }else{
              return item;
             }
           })
          };  

      case UPDATE_POST_REJECTED:
              return {
               ...state,
               loading : false,
               error : "Student updated Failed"
              }; 

    default:
      return state;
  }
}


// export default 
export default postReducer;














