import React, { Component } from 'react';
import './Board.css'
import { connect } from 'react-redux';


const mapReduxStateToProps = (reduxState) => ({reduxState})

class Board extends Component {
  state = {
    clicked: false,
    counter: 0,
  }
  

  imageDisplay= () => {
    if(!this.state.clicked){
      //return this.props.id
      return <img key={this.props.id} src='images/Frog-1.png' alt='Not Clicked'/>
    } else {
      return this.state.counter;
    }
  }

  showNumber= () => {
    let Xcounter = 0;
    console.log(this.props.keys)
    console.log(this.props.reduxState.reducer.board[this.props.keys]) 
    if(this.props.keys% 8 ===0){
        if(this.props.reduxState.reducer.board[this.props.keys +1] === 'X'){
          Xcounter++
        }
      }
    if(this.props.keys% 8 ===7){
        if(this.props.reduxState.reducer.board[this.props.keys -1] === 'X'){
          Xcounter++
        }
      }
    if(this.props.keys/8 <1){
      if(this.props.reduxState.reducer.board[this.props.keys +8] === 'X'){
        Xcounter++
      }
    }
    if(this.props.keys/8 >=7){
      if(this.props.reduxState.reducer.board[this.props.keys -8] === 'X'){
        Xcounter++
      }
    }
    if(this.props.keys % 8 !== 0 && this.props.keys % 8 !== 7){
      if(this.props.reduxState.reducer.board[this.props.keys +1] === 'X'){
        Xcounter++
    
      }
      if(this.props.reduxState.reducer.board[this.props.keys -1]=== 'X'){
        Xcounter++
      }

    }
    if(Math.floor(this.props.keys)/8 > 0 && Math.floor(this.props.keys)/ 8 < 7){
      if(this.props.reduxState.reducer.board[this.props.keys +8] === 'X'){
        Xcounter++
    
      }
      if(this.props.reduxState.reducer.board[this.props.keys -8]=== 'X'){
        Xcounter++
      }
    }
    if(this.props.id === 'X'){
      this.setState({...this.state, clicked: true, counter: 'X'})
      return this.state.counter;
    }
    this.setState({...this.state, clicked: true, counter: Xcounter})
    return this.state.counter;
  }

  // checkSquare= () => { 
  //   this.showNumber();
  // }

  render() {
    return (
      <div className="App">
          <div onClick={this.showNumber}className='square'>{this.imageDisplay()}</div>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Board);