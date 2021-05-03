import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="notfound">
            <h1>
                404 NOT FOUND
            </h1>
            
            <h3>
                Sorry the page you are looking for, does not exist.
            </h3>
            <p>
                <Link to='/'>
                Click to go back to the homepage. :)
                </Link>
            </p>
            
        </div>
    );
}
 
export default NotFound;
