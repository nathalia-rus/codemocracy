import React, { Component } from 'react';
import './App.css';
import TopicListItem from './TopicListItem';


class TopicList extends Component {


render() {
    return this.props.topics.map(topic => {
      return (
       <div className="topicListContainer" >  
          <TopicListItem topic={topic} topics={this.props.topics} deleteTopic={this.props.deleteTopic} upvote={this.props.upvote} downvote={this.props.downvote}  />
   </div >
      )
    })
  }
}
 

export default TopicList;


