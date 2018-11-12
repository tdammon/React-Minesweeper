import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board'
import {connect} from 'react-redux'

const mapReduxStateToProps= (reduxState) => ({
  reduxState
})

class App extends Component {
  state = {
    squareArray : []
  }

  //This function makes a an array of numbers with 1/4 'X's and 3/4 'O's
  boardMaker = (number) => {
    this.setState({squareArray:[]});
    let size = number*number;
    let placeHolderArray = []

    for(let i=0; i<size; i++){
      placeHolderArray.push('O')
    }
    for(let j=0; j<size/4;j++){
      placeHolderArray[Math.floor(Math.random()*size)] = 'X'
    }

    this.setState({squareArray: placeHolderArray})
    console.log(placeHolderArray)
    console.log(this.state.squareArray);
    this.props.dispatch({type:'MAKE_BOARD', payload: placeHolderArray})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <button onClick={()=>this.boardMaker(8)}>8x8</button>

          <div className='board'>

            {/* {this.state.squareArray.map(space => {
              return(
                <div className='square'>{space}</div>
              )
            })} */}
            {this.state.squareArray.map((space,index) => 
              <Board keys={index} id={space}/>
            )
            }
          </div>

        </header>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
