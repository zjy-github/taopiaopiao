import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { data } from '../mock/seat';

const SEAT_WIDTH = 50;//座位宽
const SEAT_HEIGHT = 50;//座位高
const ratio = window.devicePixelRatio;//实际像素与屏幕像素的比例
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
const lastSeat = data[data.length - 1];//最后一个座位
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;//canvas宽
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;//canvas高
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;//画布宽
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;//画布高
 
class SeatSelector extends Component {

  componentDidMount(){
    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.font = `${10 * ratio}px Arial`;
    this.ctx.fillStyle = '#fff';
    this.ctx.textAlign = 'center';
    //先加载图片当图片加载完成后再画，防止canvas绘制时图片未加载好而未画出
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;

    const loadCallback = () => {
      count++;
      if(count === 3){
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawSeat();
      }
    }

    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = './source/seat-empty.png';
    selectImage.src = './source/seat-selected.png';
    soldImage.src = './source/seat-sold.png';
  }

  componentDidUpdate() {
    this.ctx.clearRect(0, 0, DRAW_CANVAS_WIDTH, DRAW_CANVAS_HEIGHT);
    this.drawSeat();
    this.drawSelectSeat();
  }

  drawSeat = () => {
    const seatData = data;

    for(let i = 0; i < seatData.length; i++){
      const {isSold, xPos, yPos} = seatData[i];
      const offseatLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offseatTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
      if(isSold){
        //绘制已售样式
        this.ctx.drawImage(this.soldImage, offseatLeft, offseatTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      }else{
        //绘制已售样式
        this.ctx.drawImage(this.emptyImage, offseatLeft, offseatTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
      }
    }
  }

  drawSelectSeat = () => {
    const seatData = this.props.selectSeat;

    for(let i = 0; i < seatData.length; i++){
      const {xPos, yPos, rowIndex, colIndex} = seatData[i];
      const offseatLeft = (xPos - 1) * DRAW_SEAT_WIDTH;
      const offseatTop = (yPos - 1) * DRAW_SEAT_HEIGHT;
        this.ctx.drawImage(this.selectImage, offseatLeft, offseatTop, DRAW_SEAT_WIDTH, DRAW_SEAT_HEIGHT);
        this.ctx.fillText(`${rowIndex}排`, offseatLeft + DRAW_SEAT_WIDTH / 2, offseatTop + DRAW_SEAT_WIDTH / 2.5)
        this.ctx.fillText(`${colIndex}座`, offseatLeft + DRAW_SEAT_WIDTH / 2, offseatTop + DRAW_SEAT_WIDTH * 2 / 3)
    }

  }

  clickSeat = (e) => {
    //获取点击位置信息
    const offset = this.refs.canvas.getBoundingClientRect();
    const clickX = e.pageX - offset.left;
    const clickY = e.pageY - offset.top;
    const xPos = Math.ceil(clickX / SEAT_WIDTH);
    const yPos = Math.ceil(clickY / SEAT_HEIGHT);
    // console.log(xPos + ' ' + yPos)

    const seat = data.find(seat => seat.xPos === xPos && seat.yPos === yPos);

    // 如果当前座位已售，则不响应
    // 如果已经选择了，需要取消选择，反之选择
    // 如果已经选择四个座位，则不能再选
    if(!seat || seat.isSold){
      return;
    }
    const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);

    if(seatIndex > -1){
      this.props.onRemove(seat.id);
    }else{
      if(this.props.selectSeat.length === 4){
        alert('不能超过四个座位')
      }else{
        this.props.onAdd(seat);
      }
    }

  }

  /*
    将大画布放在小相框里，使图片显示更细腻
  */
  render() {
    return (
      <canvas onClick={this.clickSeat} width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT} style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} ref="canvas" />
    );
  }
}

SeatSelector.propTypes = {
  selectSeat: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    selectSeat: state,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: seat => {
     dispatch(addSeat(seat))
    },
    onRemove: id => {
      dispatch(removeSeat(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatSelector);