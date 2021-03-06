import React, { Component } from 'react';
import Header from '../header/Header'
import './WizardOne.css'
import { Link } from 'react-router-dom'
import stepActive from '../../assets/step_active.png'
import stepCompleted from '../../assets/step_completed.png'
import stepInactive from '../../assets/step_inactive.png'
import axios from 'axios'
import { connect } from 'react-redux'


class WizardOne extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className='main_container'>
                    <div className='content_container'>
                        <div className='addListing'>
                            <h3 className='addListing_words'>Add new listing</h3>
                            <Link to='/dashboard'><button className='cancel'>Cancel</button></Link>
                        </div>
                        <div className='step'>
                            <span>Step 1</span>
                            <div className='what_stage'>
                            <img src={stepActive} />
                            <img src={stepInactive}/>
                            <img src={stepInactive}/>
                            <img src={stepInactive}/>
                            <img src={stepInactive}/>
                            </div>

                            <div className='step_content'>
                                <span>Property Name</span>
                                <input></input>
                                <span>Property Description</span>
                                <input></input>

                            </div>

                        </div>


                        <Link to='/wizard/2'><button>Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}


export default WizardOne