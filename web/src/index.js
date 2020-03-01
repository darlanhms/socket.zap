import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserApp } from "@react-navigation/web";
import AppNavigator from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

setGlobal({
    currentUser: '',
});

const App = createBrowserApp(AppNavigator)

ReactDOM.render(<App />, document.getElementById('root'));
