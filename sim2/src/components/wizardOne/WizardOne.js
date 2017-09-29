import React, { Component } from 'react';
import Header from '../header/Header'
import './WizardOne.css'
import { Link } from 'react-router-dom'


class WizardOne extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='main_container'>
                    <div className='content_container'>



                    <Link to='/wizard/2'><button>Next Step</button></Link>
                    </div>

                </div>
                </div>
                )
    }
}


export default WizardOne