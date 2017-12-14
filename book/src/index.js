import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import './styles.less';*/
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
