import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SeatSelected.css';

const SeatSelected = ({ data, onRemove }) => {

  if(!data.length) {
    return null
  }

  return (  
    <div className="seatSelected">
      <div>
        <ul className="seatSelected__list">
          {
            data.map(seat => (
            <li key={seat.id} className="seatSelected__item movieTicket">
              <div className="movieTicket__detail">
                <div className="movieTicket__pos">{seat.rowIndex}排{seat.colIndex}座</div>
                <div className="movieTicket__price"><i className="movieTicket__tag">卡</i> 33元</div>
              </div>
              <div className="movieTicket__close" onClick={() => onRemove(seat.id)}></div>
            </li> 
            ))
          }
        </ul>
        <div className="seatSelected__buy">{33 * data.length}元 确认选座</div>
      </div>
    </div>
  );
};

SeatSelected.propTypes = {
  data: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

//data在store中储存，使用mapStateToProps将其与store联系起来
const mapStateToProps = state => {
  return {
    data: state
  };
}

//onRemove在dispatch中，使用mapDispatchToProps将其与dispatch联系起来
const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(removeSeat(id));
    }
  }
}

//connect返回一个高阶函数，将mapStateToProps和mapDispatchToProps绑定在组件上使组件与store和dispatch关联并返回高阶函数
export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);    