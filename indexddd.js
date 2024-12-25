import react from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FacebookemojiCounter from './Facebookemoji';
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FacebookemojiCounter type="like"/>
        <FacebookemojiCounter type="Love"/>
        <FacebookemojiCounter type="happy"/>
    </React.StrictMode>
);
reportWebVitals();