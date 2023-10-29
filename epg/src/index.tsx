import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { EPGProvider } from './store/EPGContext';

ReactDOM.render(
    <EPGProvider>
        <div className="container">
            <App />
        </div>
    </EPGProvider>,
    document.getElementById('root')
);
