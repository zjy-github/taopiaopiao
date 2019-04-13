import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import RenderToBody from '../../components/RenderToBody';
import TabMenu from '../../components/TabMenu';
import TopBar from './components/TopBar';
import Slide from './components/Slide';
import MovieItem from './components/MovieItem';
import CityLayer from './components/CityLayer';
import './index.css';
import request from "../../helpers/request";

class Home extends Component {
    state = {
        city: '',
        poster: [], 
        movie: [],
        cityLayerVisible: false
    };

    showCitylayer = () => {
        this.setState({
            cityLayerVisible: true
        });
    };

    hideCityLayer = () => {
        this.setState({
            cityLayerVisible: false
        });
    };

    onChangeCity = (city) => {
        this.setState({
            city,
        });
        this.hideCityLayer();
    };

    componentWillMount() {
        this.getDate();
    }

    getDate = async () => {
        const data = await request("index");
        const {city, poster, movie} = data;
        this.setState({
            city,
            poster,
            movie
        });
    };

    render() {
        const {city, poster, movie, cityLayerVisible} = this.state;

        return (
            <div className="home">
                <TopBar city={city} showCitylayer={this.showCitylayer}/>
                <div className="home__slide">
                    <div className="home__slideWarp">
                        <Slide data={poster} />
                    </div>
                </div>
                <ul className="home__content">
                    {
                        movie.map(item => <li key={item.name}><MovieItem data={item} /></li>)
                    }
                </ul>
                <TabMenu current="movie"/>
                {  cityLayerVisible && <RenderToBody><CityLayer onClose={this.hideCityLayer} onSelect={this.onChangeCity}/></RenderToBody> }
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
