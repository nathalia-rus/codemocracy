import React, { Component } from 'react';
import './App.css';
import TopicListItem from './TopicListItem';
const voteupsvg = require('./voteUp.png');
const votedownsvg = require('./voteDown.png');

class TopicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };


render() {
    return this.props.topics.map(topic => {
      return (
       <div className="topicListContainer" >  

          <TopicListItem topic={topic} topics={this.props.topics}/>

   </div >
      )
    })
  }
}
 

export default TopicList;


// <div className="topicListContainer" >
//   <div className="listItemContainer">
//     < div className="content" >  <h1> Porting from Angular.js to Angular 2 </h1>
//       <small className="date"> created on 30th July 1995</small>
//     </div >
//     <div className="vote" >
//       <img className="voteUp" src={voteupsvg} />
//       <p> 56789 </p>
//       <img className="voteDown" src={votedownsvg} />
//     </div>
//   </div>
// </div>