
import Layout from "../components/Layouts/Layout";
import Video from "../pages/Video/Video";
import Auth from "../pages/auth/Auth"
import Game from "../pages/game/Game";
import Group from "../pages/group/Group";
import Home from "../pages/home/Home"
import MarketPlace from "../pages/marketPlace/MarketPlace";

// create public router
const publicRouter = [
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/auth",
        element : <Auth />
      },
      {
        path : "/video",
        element : <Video /> 
      },
      {
        path : "/game",
        element : <Game />
        
      },
      {
        path : "/marketPlace",
        element: <MarketPlace />
    
      },
      {
        path : "/group",
        element : <Group />
    
      }
    
    ]
  }
  

];


// export 
export default publicRouter;


















