import React, { Component } from 'react';
import './Board.css'
import { connect } from 'react-redux';


const mapReduxStateToProps = (reduxState) => ({reduxState})

class Board extends Component {
  state = {
    clicked: false,
    displayFlag: false,
    counter: 0,
  }

  componentWillReceiveProps() {
    this.setState({
      clicked: false,
      displayFlag: false,
      counter: 0,
    })
  }
  

  imageDisplay= () => {
    if(!this.state.clicked && !this.state.displayFlag){
      return <img key={this.props.id} src='images/Frog-1.png' alt='Not Clicked'/>
    } else if(this.state.displayFlag){
      return <img src='images/Yellow.png' alt='None' />
    } else {
      return this.state.counter;
    }
  }

  handleMouseDown =  e => {
    document.oncontextmenu = function() {
      return false;
  }
    e = e || window.event;
    //console.log(e.which)
    console.log(this.state)
    switch(e.which) {
      case 1 : this.showNumber(); break;
      case 2 : break;
      case 3 : this.displayFlag(); return false;
      default: break;  
    }
  }

  displayFlag= () => {
    console.log('running')
    this.setState({...this.state, displayFlag : !this.state.displayFlag })
    return this.state.displayFlag;
  }

  showNumber= () => {
    console.log('run')
    let Xcounter = 0;
    let edge = Math.sqrt(this.props.reduxState.reducer.board.length)
    console.log(edge)
    let keys = this.props.keys
    let board = this.props.reduxState.reducer.board
    let minX = keys%edge === 0 ? 0 : -1;
    let maxX = keys%edge === (edge-1) ? 0 : 1;
    let minY = Math.floor(keys/edge) == 0 ? 0 : -1;
    let maxY = Math.floor(keys/edge) == (edge-1) ? 0 : 1;
    for(let x = minX; x <= maxX; x++){
      for(let y = minY; y<=maxY; y++){
        if(board[keys+x+(y*edge)]=== 'X'){
          Xcounter++
          
        }
      }
    }
    if(this.props.id === 'X'){
      this.setState({...this.state, clicked: true, counter: 'X'})
      return this.state.counter;
    }
    this.setState({...this.state, clicked: true, counter: Xcounter})
    return this.state.counter;
  }

  

  render() {
    return (
      <div className="App">
          <div onMouseDown={()=>this.handleMouseDown()} className='square'>{this.imageDisplay()}</div>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Board);