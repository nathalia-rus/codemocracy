

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import reducers from './reducers';
import TopicList from './TopicList';
import { upvote, downvote, createTopic, deleteTopic } from './actions';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    }
  }

componentDidMount = () => {
  const api = 'https://private-anon-57c3f064e5-codemocracy.apiary-mock.com/topics';
  fetch(api)
    .then(result => result.json())
    .then(topics => {
      this.setState({ topics });
      console.log(this.state.topics);
    });
}


  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.createTopic}>
            <input className = "input" type="text" name="text"/>
          <button type="submit" className="createButton" > ADD TOPIC </button> 
          </form>
        <div className = "listItemContainer"> 
          <TopicList topics={this.state.topics} deleteTopic={this.props.deleteTopic} upvote={this.props.upvote} downvote={this.props.downvote} ></TopicList>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
 topics: state.topics,
 title: state.text
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  upvote: () => dispatch(upvote()),
  downvote: () => dispatch(downvote()),
  deleteTopic: () => dispatch(deleteTopic()),
  createTopic: (event) => {
    event.preventDefault();
    dispatch(createTopic(event.target.text.value));
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
