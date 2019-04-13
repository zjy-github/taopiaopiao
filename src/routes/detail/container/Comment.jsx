import React, { Component } from 'react';
import ScoreDistribute from '../components/ScoreDistribute';
import TagList from '../components/TagList';
import CommentList from '../components/CommentList';
import request from '../../../helpers/request';
import './Comment.css';
 
class Comment extends Component {
  state = {
    tags: [],
    comments: [],
    current: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data = await request("comment");
    const {tags, list} = data;

    this.setState({
      tags,
      comments: list,
      current: tags[0] ? tags[0].text : ''
    })
  }

  changeTag = (value) => {
    this.setState({
      current: value
    })
  }

  render() {
    const {tags, comments, current} = this.state;
    return (
      <div className="mComment">
        <ScoreDistribute/>
        <div style={{ marginTop : 16 }}>
          <TagList data={tags} current={current} onClick={this.changeTag} />
        </div>
        <div style={{ marginTop : 16 }}>
          <CommentList data={comments} />
        </div>
      </div>
    );
  }
}

Comment.propTypes = {

};

export default Comment;