import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let abortController = new AbortController();

        fetch(url, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 586deb1653b498099d33a244bd7c0c60ad020823',
            },
            signal: abortController.signal
        })
        .then(resp => {
            if(!resp.ok) {
                throw Error('could not fetch');
            }
            return resp.json()
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(error => {
            if(error.name === 'ErrorAbort') {
                setIsPending(false);
                setError(error.message)
            }
        });

        return () => abortController.abort();

    }, [url]);
    return {data, isPending, error}
}
export default useFetch;