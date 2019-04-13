import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = ({ data }) => {
    return ( 
        <Link to={"/detail"} className="movieItem">
            <div className="movieItem__poster">
                <img src={data.poster} alt=""/>
            </div>
            <div className="movieItem__detail">
                <div className="movieItem__name">{data.name}</div>
                <div className="movieItem__score">观众评分 <span>{data.score}</span></div>
                <div className="movieItem__director">{data.director}</div>
                <div className="movieItem__actor">{data.actor}</div>
                <div className="movieItem__tag">
                    {
                        data.tags.map((tag, i) => {
                            if(i%2){
                                return <span key={tag} className="tTag tTag--red">{tag}</span>;
                            }
                            return <span key={tag} className="tTag tTag--blue">{tag}</span>;
                        })
                    }
                </div>
            </div>
            <div className="movieItem__btn">
                <button className="tBtn">购票</button>
                <span className="movieItem__price">9.9元起</span>
            </div>

        </Link>
    );
};

MovieItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MovieItem;
