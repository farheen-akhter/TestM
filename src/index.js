import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const finalStore = compose(applyMiddleware(thunk),
window.devToolsExtension?window.devToolsExtension():f=>f)(createStore);

const store = finalStore(reducer); 

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();