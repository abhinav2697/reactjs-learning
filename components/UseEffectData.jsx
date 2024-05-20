import React, { useState, useEffect } from 'react';

const UseEffectData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((result) => setData(result.data))
        .catch((error) => console.log(error));
        
    }, [])
    return (
        <div>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default UseEffectData;