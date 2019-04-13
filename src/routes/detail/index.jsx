import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import BaseInfo from './components/BaseInfo';
import ScoreSummary from './components/ScoreSummary';
import { Link } from 'react-router-dom';
import CollapsibleText from '../../components/CollapsibleText';
import Artist from './components/Artist';
import Comment from './container/Comment';
import request from '../../helpers/request';
import LineLick from '../../components/LineLink';
import ImageSlider from './container/ImageSlider';
import './index.css';
 

class Detail extends Component {
    state = {
      artist: [],
      showImage: false
    }
  
    componentDidMount() {
      this.getArtist();
    }
  
    getArtist = async () => {
      const data = await request("artist");
  
      this.setState({
          artist: data
      })
    }

    toggleImage = () => {
        this.setState({
            showImage: !this.state.showImage
        })
    }
  
    render() {
        const { artist } = this.state;

        return (
            <div className="detail">
                <div className="detail__top">
                    <div className="tOperator">
                        <Link to={"/"} className="tOperator__icon tOperator__icon--back"/>
                        <div className="tOperator__icon tOperator__icon--share"/>
                    </div>
                    <BaseInfo onClick = {this.toggleImage}/>
                </div>
                <div className="detail__content">
                    <div className="detail__module">
                        <ScoreSummary/>
                    </div>
                    <div className="detail__module">
                        <CollapsibleText>
                            <div className="detail__overview">
                                唐仁（王宝强 饰）为巨额奖金欺骗秦风（刘昊然 饰）到纽约参加世界名侦探大赛，然而随着和世界各国侦探们啼笑皆非的较量，两人却发现了隐藏在这次挑战背后的更大秘展开,两人却发现了隐藏在这次挑战背后的更大秘展开
                            </div>
                        </CollapsibleText>
                    </div>
                    <div className="detail__module">
                        <h3 className="detail__moduleTitle">演职人员</h3>
                        <Artist data={artist}/>
                    </div>
                    <div className="detail__module">
                        <div className="detail__append">
                            <h3 className="detail__moduleTitle detail__item">热门评论</h3>
                            <button className="detail__write">写影评</button>
                        </div>
                        <Comment />
                    </div>
                    <div className="detail__module">
                            <h3 className="detail__moduleTitle">影片资料</h3>
                        <div>
                            <LineLick href="xxx" title="幕后花絮" />
                            <LineLick href="xxx" title="台词精选" />
                            <LineLick href="xxx" title="出品发行" />  
                        </div>
                    </div>
                </div>
                <Link to="/seat" className="detail__buyBtn" >购票选座</Link>
                { this.state.showImage && <ImageSlider onClose={this.toggleImage}/>}
            </div>
        );
    }
}

Detail.propTypes = {};

export default Detail;
