import React, { Component } from 'react';
import './App.css';
const voteupsvg = require('./voteUp.png');
const votedownsvg = require('./voteDown.png');



class TopicListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    static defaultProps = {
    }


    render() {
        return (
          <div> 
              <div className="content" >  
              <h1> {this.props.topic.title} </h1>
              <small className="date"> {this.props.topic.published_at}</small>
            </div>
    <div className="vote" >
      <img className="voteUp" src={voteupsvg} />
      <p className = "score"> {this.props.topic.score} </p>
      <img className="voteDown" src={votedownsvg} />
    </div>

    </div>

        );
    }

}

export default TopicListItem;


{/* <div>
  <div className="content" >
    <h1> Porting from Angular.js to Angular 2 </h1>
    <small className="date"> created on 30th July 1995</small>
  </div>
  <div className="vote" >
    <img className="voteUp" src={voteupsvg} />
    <p> 56789 </p>
    <img className="voteDown" src={votedownsvg} />
  </div>

</div>
 */}

