import { createRoot } from 'react-dom/client';
import App from './app.js';

const root = createRoot(document.getElementById('root'));

document.addEventListener('musickitloaded', async function () {
    try {
        const response = await fetch('/api/token');
        const { developerToken } = await response.json();
        let music = await MusicKit.configure({
            developerToken,
            app: {
                name: 'AMP',
                build: '0.1',
            },
        });
        root.render(<App music={music} />);
    } catch (err) {
        console.log(err);
    }
});
