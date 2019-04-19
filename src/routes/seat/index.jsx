import React, { Component } from 'react';
import MovieInof from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './container/SeatSelector';
import { Link } from 'react-router-dom';
import './index.css';

class Seat extends Component {
  state = {
    selectSeat : [],
  }

  addSeat = (seat) => {
    this.setState(prevSeat => ({
      selectSeat: [...prevSeat.selectSeat, seat]
    }));
  } 

  removeSeat = (id) => {
    this.setState({
      selectSeat: this.state.selectSeat.filter(item => item.id !== id)
    });
  }

  render() {
    return (
      <div className="seat">
        <div className="seat__top">
          <div className="tOperator">
            <Link to={"/detail"} className="tOperator__icon tOperator__icon--blackBack"/>
            万达影城
            <i className="tOperator__icon tOperator__icon--blackShare"/>
          </div>
        </div>
        <MovieInof/>
        <div className="seat__main">
          <div className="seat__tip"/>
          <div className="seat__graph">
            <div className="seat__screen">B13屏幕</div>
            <div className="seat__map">
             <SeatSelector selectSeat={ this.state.selectSeat } onAdd={ this.addSeat } onRemove={ this.removeSeat }/>
            </div>
          </div>
        </div>
        <SeatSelected data={ this.state.selectSeat } onRemove={ this.removeSeat }/>
      </div>
    );
  }
}

Seat.propTypes = {

};

export default Seat;