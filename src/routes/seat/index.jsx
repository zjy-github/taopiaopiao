import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieInof from './components/MovieInfo';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './container/SeatSelector';
import './index.css';

class Seat extends Component {
  state = {
    selectSeat : [],
  }

  addSeat = () => {

  } 

  removeSeat = () => {
    
  }

  render() {
    return (
      <div className="seat">
        <div className="seat__top">
          <div className="tOperator">
            <i className="tOperator__icon tOperator__icon--blackBack"/>
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
             <SeatSelector />
            </div>
          </div>
        </div>
        <SeatSelected/>
      </div>
    );
  }
}

Seat.propTypes = {

};

export default Seat;