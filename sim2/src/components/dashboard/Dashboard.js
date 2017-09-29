import React, { Component } from 'react';
import Header from '../header/Header.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import {updateCurrentProperties} from '../../ducks/reducer'




class Dashboard extends Component {
    componentDidMount() {
        axios.get('http://localhost:3002/api/properties/' + req.session.user.userid).then(response  => {
        this.props.updateCurrentProperties(response.data)
        })
    }
    render() {
        return (
            <div className='help'>
                <Header />
                <div>
                    {this.props.currentProperties}
                </div>
                <Link to='/wizard/1'><button>ADD NEW PROPERTY</button></Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {updateCurrentProperties} = state;
    return {
        currentProperties
    };
}


export default connect(mapStateToProps, {updateCurrentProperties})(Dashboard);