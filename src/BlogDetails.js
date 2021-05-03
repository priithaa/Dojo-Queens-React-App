import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data: blog, error, loadingM}=useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDel=()=>
    {
        fetch('http://localhost:8000/blogs/' + id,{
            method:'DELETE'
        }).then(()=>
        {
            history.push('/');
        }
        )
    }
    return ( 
        <div className="BlogDetails">
            <h1>
                Blog Details - {id}
            </h1>
            {loadingM && <div>{loadingM}</div>}
            {error && <div> {error}.</div>}
            {blog && (
                <article>
                    <h2 className='blogTitle'>
                        {blog.title}
                    </h2>
                    <p>
                        Written By {blog.author}
                    </p>
                    <h3 className='blogDesc'>
                        {blog.body}
                    </h3>
                    <button onClick={handleDel}>Delete</button>
                </article>
            )}
           
        </div>
     );
}
 
export default BlogDetails;