import React, { Component } from 'react';
import Header from '../header/Header';
import './WizardThree.css';
import { Link } from 'react-router-dom';
import stepActive from '../../assets/step_active.png';
import stepCompleted from '../../assets/step_completed.png';
import stepInactive from '../../assets/step_inactive.png';
import axios from 'axios';
import { connect } from 'react-router';

class WizardThree extends Component {

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
                            <span>Step 3</span>
                            <div className='what_stage'>
                            <img src={stepCompleted} />
                            <img src={stepCompleted}/>
                            <img src={stepActive}/>
                            <img src={stepInactive}/>
                            <img src={stepInactive}/>
                            </div>
                        </div>
                        <div className= 'imgContainer'>
                            <p>Preview</p>
                            </div>


                        <Link to='/wizard/4'><button>Next Step</button></Link>
                    </div>

                </div>
            </div>
        )
    }
}


export default WizardThree;