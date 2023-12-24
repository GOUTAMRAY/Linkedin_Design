import { Helmet } from "react-helmet"



const PageHeader = ({ title }) => {
  return (
    <Helmet>
      <title> { title } | facebook</title>
      <link rel="shortcut icon" href="https://static-00.iconduck.com/assets.00/facebook-icon-512x511-ircc9ves.png" type="image/x-icon" />
    </Helmet>
    
    
  )
}

export default PageHeader;


















