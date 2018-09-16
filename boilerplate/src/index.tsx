import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';
import { AppIndexComponent } from './components/app/AppIndexComponent';

import './scss/style.scss';

const store = configureStore();

function renderMain(App: React.ReactType) {
    return (
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <AppIndexComponent />
                </Router>
            </Provider>
        </AppContainer>
    );
}

render(renderMain(AppIndexComponent), document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./components/app/AppIndexComponent', () => {
        render(renderMain(require('./components/app/AppIndexComponent').default), document.getElementById('root'));
    });
}
