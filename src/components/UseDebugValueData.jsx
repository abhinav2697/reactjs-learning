import React, { useState, useEffect, useDebugValue } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data', error);
                setLoading(false);
            }
        }
        fetchData();

    }, [url]);
    useDebugValue(url);
    return { data, loading };
}

const UseDebugValueData = () => {
    const { data, loading } = useFetch('https://fakestoreapi.com/products');
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Data </h1>
            {
                data ?
                    (<div>Data:{JSON.stringify(data)}</div>) :
                    (<div>NO data available</div>)
            
            }
        </div>
    );
}

export default UseDebugValueData;