

import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';
// import reducers from './reducers';
import TopicList from './TopicList';
const voteupsvg = require('./voteUp.png');
const votedownsvg = require('./voteDown.png');



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

  // renderTodos() {
  //   return (
  //     this.props.todos.map(todo => {
  //       return (
  //         <li key={todo.id}> {todo.text} </li>);
  //     })
  //   );
  // }


  render() {
    return (
      <div>
        <form className= "form">
            <input className = "input" type="text" name="topic"/>
          <button type="submit" className="createButton" > ADD TOPIC </button> 
          </form>

        <div className = "listItemContainer"> 
        <TopicList topics = {this.state.topics}></TopicList>
        </div> 
  
    
          {/* 
            <div className = "topicListContainer" >
      <div className="listItemContainer"> 
            < div className="content" >  <h1> Porting from Angular.js to Angular 2 </h1> 
      <small className = "date"> created on 30th July 1995</small> 
            </div >  
            <div className = "vote" >
              <img className="voteUp" src= {voteupsvg}  />
          <p> 56789 </p> 
              <img className="voteDown" src={votedownsvg}  />
            </div>
      </div>
     
      <div className="listItemContainer">
            < div className="content" >  <h1> Being on the edge' by John Middleware. </h1>
                <small className="date"> created on 30th July 1995</small>
              </div >
              <div className="vote" >
                <img className="voteUp" src={voteupsvg} />
                <p> 56789 </p>
                <img className="voteDown" src={votedownsvg} />
              </div>
              </div>

          <div className="listItemContainer">
            < div className="content" >  <h1> Porting from Angular.js to Angular 2 </h1>
              <small className="date"> created on 30th July 1995</small>
            </div >
            <div className="vote" >
              <img className="voteUp" src={voteupsvg} />
              <p> 56789 </p>
              <img className="voteDown" src={votedownsvg} />
            </div>
          </div>
                     </div>
 */}

 
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   // Map your state to props
// });

// const mapDispatchToProps = (dispatch) => ({
//   // stuff
// });



// export default connect(mapStateToProps, mapDispatchToProps)(App);
 export default App;