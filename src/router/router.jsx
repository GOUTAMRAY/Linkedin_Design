import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";


// create router 
const router = createBrowserRouter([...publicRouter, ...privateRouter])


// export 
export default router;











