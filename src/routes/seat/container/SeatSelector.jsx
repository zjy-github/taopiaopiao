import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from '../mock/seat';

const SEAT_WIDTH = 50;
const SEAT_HEIGHT = 50;
const ratio = window.devicePixelRatio;
const DRAW_SEAT_WIDTH = SEAT_WIDTH * ratio;
const DRAW_SEAT_HEIGHT = SEAT_HEIGHT * ratio;
const lastSeat = data[data.length - 1];
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH;
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT;
const DRAW_CANVAS_WIDTH = CANVAS_WIDTH * ratio;
const DRAW_CANVAS_HEIGHT = CANVAS_HEIGHT * ratio;
 
class SeatSelector extends Component {

  componentDidMount(){
    this.ctx = this.refs.canvas.getContext('2d');
    //先加载图片当图片加载完成后再画，防止canvas绘制时图片未加载好而未画出
    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();
    let count = 0;

    const loadCallback = () => {
      count++;
      if(count == 3){
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

  clickSeat = (e) => {
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

  }

  render() {
    return (
      <canvas onClick={this.clickSeat} width={DRAW_CANVAS_WIDTH} height={DRAW_CANVAS_HEIGHT} style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }} ref="canvas" />
    );
  }
}

SeatSelector.propTypes = {

};

export default SeatSelector;