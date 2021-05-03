import { useState } from "react";
import {useHistory} from 'react-router-dom';

// useHistory is used to redirect pages to a position of -1, +1, and some other route.
// history.go(-1)
const Create = () => {

    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('Mario');
    const [isPending, setPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
        setPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-Type":"application/json" },
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("Blog Added");
            setPending(false);
            history.push('/');
        })
    }
    return (  
        <div className = "create">
            <h2>
                Add a new blog!
            </h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Blog title.
                </label>
                <input type="text" required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}>
                </textarea>
                
                <label>Blog Author: </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Edith">Edith</option>
                </select>
                {!isPending && <button>Add a Blog</button>}
                {isPending && <button disabled>Adding...</button>}
                
            </form>

        </div>
    );
}

 
export default Create;