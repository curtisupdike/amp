import { useEffect, useState } from 'react';

export default function App({ music }) {
    const [loggedIn, setLoggedIn] = useState(music.isAuthorized);

    useEffect(() => {
        music.addEventListener('authorizationStatusDidChange', () =>
            setLoggedIn(music.isAuthorized)
        );
    });

    return (
        <>
            <h1>AMP | Apple Music Player</h1>
            <button
                type="button"
                onClick={
                    loggedIn
                        ? () => music.unauthorize()
                        : () => music.authorize()
                }
            >
                {loggedIn ? 'Logout' : 'Login'}
            </button>
        </>
    );
}
