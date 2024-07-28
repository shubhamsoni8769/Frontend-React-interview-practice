import { useEffect, useState } from "react"

const useDebounce = (query, debounceTime) => {
    const [debounceQuery, setDebounceQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceQuery(query)
        },debounceTime)

        return () => {
            clearTimeout(timer)
        }

    }, [query, setDebounceQuery, debounceTime])
    return debounceQuery

}

export default useDebounce