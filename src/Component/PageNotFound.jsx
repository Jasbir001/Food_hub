import { Link } from 'react-router-dom';
function PageNotFound(){
    return(
        <>
        <div>
            <Link to ="/" >back go to the home page </Link>
            <h1>Page Not Found</h1>
            <h1 style={{display:'flex', justifyContent:'center',alignItems:'center'}}>404 Error Not Found </h1>
        </div>
        </>
    )
}

export default PageNotFound