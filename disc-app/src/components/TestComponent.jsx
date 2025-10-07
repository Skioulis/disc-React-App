// import { useEffect, useState } from 'react';
// import { fetchData } from '../API calls/api';
//
// function TestComponent() {
//     const [response, setResponse] = useState();
//
//     useEffect(() => {
//         const data = await fetchData();
//         setResponse(data?.body?? 'No data');
//         console.log(data);
//         console.log(response)
//     })
//
//
//     return (
//         <>
//             <h1>Test Component</h1>
//
//         </>
//     )
// }
//
// export default TestComponent;

import { useEffect, useState } from 'react';
import { fetchData } from '../API calls/api';

function TestComponent() {
    const [response, setResponse] = useState();

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchData();
                setResponse(data?.body ?? 'No data');
                console.log(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        loadData();
    }, []);

    return (
        <>
            <h1>Test Component</h1>
            <p>{response}</p>
        </>
    )
}

export default TestComponent;