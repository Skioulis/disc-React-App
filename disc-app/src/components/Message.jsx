// JavaScript
import { useEffect, useState } from 'react';

export default function Message() {
    const [message, setMessage] = useState('Loading...');
    const [messageBody, setMessageBody] = useState('Loading body...');

    useEffect(() => {
        let isMounted = true;

        async function fetchMessage() {
            try {
                const res = await fetch('http://localhost:3000/');
                const data = await res.json();
                console.log(data.body.name);
                if (isMounted) {
                    setMessage(data?.message ?? 'No message');
                    setMessageBody(data?.body ?? 'No message body');
                }
            } catch (e) {
                if (isMounted) {
                    setMessage('Failed to load message');
                    setMessageBody('Failed to load message body');
                }
                console.warn(e);
            }
        }

        fetchMessage();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>

            <h2>{messageBody.name}</h2>
        </>
    );
}

