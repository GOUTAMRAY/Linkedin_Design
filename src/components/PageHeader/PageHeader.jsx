import { Helmet } from "react-helmet"



const PageHeader = ({ title }) => {
  return (
    <Helmet>
      <title> { title } | Linkedin </title>
      <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" type="image/x-icon" />
    </Helmet>
    
    
  )
}

export default PageHeader;


















