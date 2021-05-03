import {useState, useEffect} from 'react';


const useFetch = (url) =>{

   
    const abortConst = new AbortController();
    const [data, setData] = useState(null);
    const[error, setError] = useState(null);
    const [loadingM,setLoading] = useState(true);


     useEffect(()=>
    {
        setTimeout(() => {
            fetch(url, {signal : abortConst.signal})
            .then(res=>
                {
                    if(!res.ok)
                    {
                        throw Error('Could not fetch it Okily!')
                    }
                    return res.json();
                })
            .then(data=>
                {
                    setData(data);
                    setError(null);
                    setLoading(false);
                }
            )
            .catch(err=>
                {
                    if(err.name === 'AbortError')
                    {
                        console.log("Fetch aborted");
                    }
                    else
                    {
                        setError(err.message);
                        setLoading(false);
                    }
                }
            )
        }, 1000);

       return ()=> abortConst.abort();

    },[abortConst, url])

    return {data, error, loadingM};

}


export default useFetch;