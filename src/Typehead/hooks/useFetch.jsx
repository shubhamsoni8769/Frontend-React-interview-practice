import { useEffect, useState } from "react"

const useFetch = (fetchApi, query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async() => {
            if(!query){
                return;
            }
            setIsLoading(true)
            try{
                const result = await fetchApi(query,signal);
                if(isMounted){
                    setData(result)
                }
            } catch(e) {
                if(isMounted){
                    setError(e)
                }
            }finally {
                setIsLoading(false)
            }
        }
        fetchData();
        return () => {
            isMounted = false;
            controller.abort()
        }
    },[fetchApi, query])
    return [data, isLoading, error]

}
export default useFetch