import {useState} from'react';
import BlogList from "./BlogList.js";
import useFetch from './useFetch.js';
const Home = () => {
    // This is an annonymous function.
    // let name = "Mario"
    
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = (name,e) =>
    {
      setName("Luigi")
      setAge(age+1);
    }

    const {data: blogs, error, loadingM} = useFetch('http://localhost:8000/blogs');

   

   
    return (
        <div className="home">
            {
                error && <div>{error}</div>
            }
            {loadingM && <div>Loading... :)</div> }
            <h2 className="content">Home</h2>             
            {/* <button onClick={handleClick}> Click Me </button> */}
            {/* Now if we want tp pass in some values to the given function, we can not pass it hrought the 
            brackets, that way it would be invoked, so istead of doing that we will wrp it in an annonymous function. */}
            
            {blogs && <BlogList blogs = {blogs} title={"All Blogs!"} />}
            {blogs && <BlogList blogs = {blogs.filter((blog)=>blog.author==="Mario")} title={"Marios's Blogs!"}  />}
            {/* to avoid conditional templating, we can just set blogs to {}, since {} is a logical
            mappable object :) */}

            <br/>
            <h3>
                {name} is {age} years old
            </h3>
            <button onClick={(e)=>{handleClick("kiki", e)}}>
                Click me for magic
            </button>
        </div>
); }
 
export default Home;