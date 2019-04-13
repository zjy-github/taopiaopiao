import React from 'react';
import PropTypes from 'prop-types';
import CollapsibleText from '../../../components/CollapsibleText';
import Star from '../../../components/Star';
import './CommentList.css';

const CommentList = ({ data }) => {
  return (
    <ul className="commentList">
    {
      data.map(item => (
        <li key={item.id}>
          <div className="commentItem">
            <div className="commentUser">
              <div className="commentUser__avatar" style={{ backgroundImage : "url()" }} />
              <div className="commentUser__detail">
                <div className="commentUser__name">{item.name}</div>
                <div className="commentUser__score"><Star value={item.score} size={12} /><span className="commentUser__value">{item.score}</span></div>
              </div> 
            </div>
            <CollapsibleText>
              {item.content}
            </CollapsibleText>
            <div className="commentItem__detail">
              <div className="commentItem__time">{item.time}</div>
              <div className="commentItem__zan">
                <i/> {item.zan}
              </div>
            </div>        
          </div> 
        </li>
      ))
    }

    </ul>
  );
};

CommentList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CommentList;