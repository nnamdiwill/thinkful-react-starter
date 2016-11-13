require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var RepositoryList = require('./components/repository-list');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Provider store={store}>
            <RepositoryList />
        </Provider>, document.getElementById('app'));
});
