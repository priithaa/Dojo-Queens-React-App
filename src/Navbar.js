import {Link} from 'react-router-dom';


const Navbar = () => {
    const f ={
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
            }
    return ( 
        <nav className="navbar">
            <h1> Hi Dojo Queens </h1>
            <Link to="/" style={f}> Home </Link>
            <Link to="/create" style= {f}> New blog create </Link>
            {/* Clicking these anchor tags, is making the react page ask server for stuff, we dont want that
            we want toroute.  */}
            {/* Using Link we can route the requests to the javascript packet and avoid, server interruption,
            this makes it fast. However the ongoing fetching of data from, the useFetch hook, makes things
            a little complicated. */}
        </nav>
        
     );
}
 
export default Navbar;