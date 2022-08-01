import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const [token, setToken] = useState();

    useEffect(() => {
        fetch('/api/token')
            .then(data => data.json())
            .then(({ developerToken }) => {
                setToken(developerToken);
            });
    }, []);

    if (!token) return <h1>Loading...</h1>;

    return (
        <>
            <h1>AMP | Apple Music Player</h1>
            <p>Developer token: {token}</p>
        </>
    );
}

createRoot(document.getElementById('root')).render(<App />);
