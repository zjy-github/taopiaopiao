import React from 'react';
import PropTypes from 'prop-types';
import './Star.css';

/**
 * desc: 星星评分组件
 * props: value 分数 / 十分制 size 星星大小
 * */

const Star = ({ value, size = 15 }) => {
    return (
        <div className="star" style={{width: size * 5, height: size}}>
            <div className="starTop" style={{ width : `${value * 10}%`}} />
        </div>
    );
};
 
Star.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default Star;
