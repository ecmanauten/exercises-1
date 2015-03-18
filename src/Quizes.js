var React = require('react');
var quizesList = require('./quizes-list');

require('./style.less');


var Quizes = React.createClass({
  render() {
    return (
      <ul>

        {quizesList.map(function(quiz) {
          if (typeof quiz !== 'string') {
            return <li><a href={quiz.url}>{quiz.title}</a></li>;
          } else {
            return <li>{quiz}</li>;
          }
        })}

      </ul>
    );
  }
});

module.exports = Quizes;
