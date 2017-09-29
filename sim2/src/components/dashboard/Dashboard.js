import React, { Component } from 'react';
import Header from '../header/Header.js'
import { Link } from 'react-router-dom'



class Dashboard extends Component {

    render() {
        return (
            <div className='help'>
                <Header />
                <Link to='/wizard/1'><button>ADD NEW PROPERTY</button></Link>
            </div>
        )
    }
}



export default Dashboard;