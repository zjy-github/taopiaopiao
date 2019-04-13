import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './CollapsibleText.css';

class CollapsibleText extends Component {
    state = {
        isCollapse: false,
        isNeedCollapse: false
    }

    static defaultProps = {
        height: 84
    }
 
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        const value = this.props.height;

        if (dom.clientHeight > value) {
            this.setState({
                isCollapse: true,
                isNeedCollapse: true
            })
        }
    }

    toggleStates = () =>{
        if(this.state.isNeedCollapse){
            this.setState((prevState) => ({
                isCollapse: !prevState.isCollapse
            }));
        }
    }

    render() {
        const { isCollapse } = this.state;
        const cls = isCollapse ? 'collapsibleText--collapse' : '';
        const maxHeight = isCollapse ? this.props.height : 'none';
        return(
            <div className={`collapsibleText ${cls}`} style={{ maxHeight : maxHeight }} onClick={this.toggleStates}>
                {this.props.children}
                {isCollapse && <div className="collapsibleText__label">展开</div>}
            </div>
        )
    }
}

CollapsibleText.propTypes = {
    children: PropTypes.any,
    height: PropTypes.number
}

export default CollapsibleText; 