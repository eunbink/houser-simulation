import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard.js'
import Login from './components/login/Login.js'
import WizardOne from './components/wizardOne/WizardOne'
import WizardTwo from './components/wizardTwo/WizardTwo.js'
import WizardThree from './components/wizardThree/WizardThree.js'
import WizardFour from './components/wizardFour/WizardFour'
import WizardFive from './components/wizardFive/WizardFive'


export default (
    <div>
    
    <Switch>
        <Route component={ Login } exact path='/'/>
        <Route component={ Dashboard } path='/dashboard'/>
        <Route component ={ WizardOne } path='/wizard/1'/>
        <Route component ={ WizardTwo } path='/wizard/2'/>
        <Route component ={ WizardThree } path='/wizard/3'/>
        <Route component ={ WizardFour } path='/wizard/4'/>
        <Route component ={ WizardFive } path='/wizard/5'/>
    </Switch>
    </div>
  )