var React = require('react');
var Router = require('react-router');
var marked = require('marked');


var Quiz = React.createClass({

  mixins: [ Router.Navigation, Router.State ],

  getInitialState() {
    var quizName = this.getParams().quiz;
    var quizGenerator = require('./quizes/' + quizName);
    var randomQuiz = quizGenerator.new();

    return {
      quizName, quizGenerator, randomQuiz
    };
  },

  handleClick() {
    var randomQuiz = this.state.quizGenerator.new();

    this.setState({ randomQuiz });
  },

  render() {
    var randomQuiz = this.state.randomQuiz;

    return (
      <div className="quiz">
        <h1><a href="/">exercises</a>{' / ' + this.state.quizName}</h1>
        <h2>Problem</h2>
        <pre>{ randomQuiz.problem }</pre>
        <h2>Solution</h2>
        <pre>{ randomQuiz.solution }</pre>

        <button className="get-lucky" onClick={this.handleClick}>Get Lucky!</button>
      </div>
    );
  }
});


module.exports = Quiz;
