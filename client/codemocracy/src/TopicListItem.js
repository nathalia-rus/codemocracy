import React, { Component } from 'react';
import './App.css';
const voteupsvg = require('./voteUp.png');
const votedownsvg = require('./voteDown.png');

class TopicListItem extends Component {

    render() {
        return (
          <div> 
            <a href="#" onClick={this.props.deleteTopic} className="bin">❌ </a> 
              <div className="content" >  
              <h1> {this.props.topic.title} </h1>
              <small className="date"> {this.props.topic.published_at}</small>
            </div>

    <div className="vote" >
            
       <a href="#" onClick={this.props.upvote}> <img className = "voteUp" src = {voteupsvg}/> </a>
      <p className = "score"> {this.props.topic.score} </p>
              <a href="#" onClick={this.props.downvote}> <img className="voteDown" src={votedownsvg} /> </a>
    </div>
    </div>
        );
    }
}

export default TopicListItem;

