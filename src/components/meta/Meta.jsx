import { Helmet } from "react-helmet";



const Meta = ({ title }) => {
  return (
    <>
    <Helmet >
       <title> {title}</title>
       <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png" type="image/x-icon" />
     </Helmet>
      
    </>
  )
}

export default Meta;
















