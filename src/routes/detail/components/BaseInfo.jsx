import React from 'react';
import PropTypes from 'prop-types';
import './BaseInfo.css';

const BaseInfo = ({ onClick }) => {
    return (
        <div className="baseInfo">
            <div className="baseInfo__detail">
                <h3 className="baseInfo__name">唐人街探案</h3>
                <div className="baseInfo__subTitle">Detective Chinatown 2</div>
                <div className="baseInfo__other">喜剧 / 动作 / 剧情</div>
                <div className="baseInfo__other">中国大陆 | 130分钟</div>
                <div className="baseInfo__other">2018年2月大陆上映</div>
            </div>
            <div className="baseInfo__poster" onClick={onClick} style={{ backgroundImage : 'url(source/movie/asset4.jpeg)'}}/>
        </div>
    );
};
 
BaseInfo.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default BaseInfo;
