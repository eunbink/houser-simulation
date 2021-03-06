import React, { Component } from 'react';
import Header from '../header/Header'
import './WizardFour.css'
import { Link } from 'react-router-dom'
import stepActive from '../../assets/step_active.png'
import stepCompleted from '../../assets/step_completed.png'
import stepInactive from '../../assets/step_inactive.png'
import axios from 'axios'
import { connect } from 'react-redux'


class WizardFour extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='main_container'>
                    <div className='content_container'>
                        <div className='addListing'>
                            <h3>Add new listing</h3>
                            <Link to='/dashboard'><button>Cancel</button></Link>
                        </div>
                        <div className='step'>
                            <span>Step 4</span>
                            <div className='what_stage'>
                                <img src={stepCompleted} />
                                <img src={stepCompleted} />
                                <img src={stepCompleted} />
                                <img src={stepActive} />
                                <img src={stepInactive} />
                            </div>

                            <div className='stepContent'> 
                                <span>Loan Amount</span>
                                <input></input>
                                <span>Monthly Mortgage</span>
                                <input></input>
                            </div>
                        </div>

                        <Link to='/wizard/3'><button>Previous</button></Link>
                        <Link to='/wizard/5'><button>Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}


export default WizardFour