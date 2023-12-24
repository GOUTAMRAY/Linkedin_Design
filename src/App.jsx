
import { RouterProvider } from 'react-router-dom';
import './App.scss'
import router from './router/router';
import { ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(100)

  return (
  
    <>
      
       <LoadingBar
        color='#f54408'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{padding:"3px 0px"}}
       />

      <RouterProvider  router={router}/>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       />
  
    </>
  )
}

export default App;
