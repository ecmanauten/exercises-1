var React = require('react');
var Quizes = require('./Quizes');
var Quiz = require('./Quiz');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, NotFoundRoute, Link, Redirect } = Router;

require('babel-core/polyfill');


// root controller
var App = React.createClass({
  render() {
    return (
      <RouteHandler />
    );
  }
});

// roots of whole web app
var routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Quizes} />
    <Route name="quiz" path="/:quiz" handler={Quiz} />
  </Route>
);

// run routing mechanism
Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.body);
});
