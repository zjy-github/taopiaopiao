import React from 'react';
import PropTypes from 'prop-types';
import './TagList.css';

const TagList = ({ data, current, onClick }) => {
  const onClickTag = (value) =>{
    if(value !== current){
      onClick(value);
    }
  }

  return (
    <div className="tagList">
      {
        data.map(item => (
          <span key={item.text} className={`tagList__item ${current === item.text ? 'tagList__item--active' : ''}`}
            onClick = {() => onClickTag(item.text)}>
           {item.text} {item.count}
          </span>       
        ))
      }
    </div>
  );
};

TagList.propTypes = {
  data: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TagList;