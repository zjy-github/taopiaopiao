import React, { Component } from 'react';
import MovieInof from './components/MovieInfo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import seatSelect from './reducers/reducer';
import SeatSelected from './components/SeatSelected';
import SeatSelector from './container/SeatSelector';
import { Link } from 'react-router-dom';
import './index.css';

//创建store
let store = createStore(seatSelect);

class Seat extends Component {
  // state = {
  //   selectSeat : [],
  // }

  // addSeat = (seat) => {
  //   this.setState(prevSeat => ({
  //     selectSeat: [...prevSeat.selectSeat, seat]
  //   }));
  // } 

  // removeSeat = (id) => {
  //   this.setState({
  //     selectSeat: this.state.selectSeat.filter(item => item.id !== id)
  //   });
  // }

  render() {
    return (
      //将需要数据传递的组件用Provider包裹，并将store挂载到组件上，其中的组件即可使用store，
      <Provider store={store}>
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
              <SeatSelector/>
              </div>
            </div>
          </div>
          <SeatSelected/>
        </div>
      </Provider>
    );
  }
}

Seat.propTypes = {

};

export default Seat;