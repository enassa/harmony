import './App.css';
import React, { Component } from 'react'
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import { ALL_URLS } from './contants/urls';
import RestaurantForm from './pages/RestaurantForm';
import TourismForm from './pages/TourismForm';
import Dashboard from './pages/dashboard/Dashboard';
import SentPage from './pages/SentPage';
import HomePage from './pages/HomePage';
import FormsPage from './pages/FormsPage';
import DeliveryForm from './pages/DeliveryForm';
import DineInForm from './pages/DineInForm';
import DeliveryForm2 from './pages/DeliveryForm2';
import DineInForm2 from './pages/DineInForm2';
import TakoutsForm2 from './pages/TakoutsForm2';
import TakoutsForm from './pages/TakoutsForm';
import DeliveryForm3 from './pages/DeliveryForm3';
import DeliveryForm4 from './pages/DeliveryForm4';
import DineInForm3 from './pages/DineInForm3';
import DineInForm4 from './pages/DineInForm4';
import TakoutsForm3 from './pages/TakoutsForm3';
import TakoutsForm4 from './pages/TakoutsForm4';
import DetailsPage from './pages/statisticts/DetailsPage';
import Responses from './pages/responses/Responses';
import { connect } from 'react-redux';
import { sendAnswers } from './store/actions/answersActions';
import ResultsType from './pages/dashboard/ResultsType';
import NewDashboard from './pages/dashboard/NewDashboard';
import LoginPage from './component_bag/LoginPage';
import NewAlerts from './pages/new_alerts/NewAlerts';
import AdminHome from './pages/AdminHome';
// ..
 class Appp extends Component {
   constructor(props){
     super(props)
     this.state={
     }   
    }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ALL_URLS.base} component={LoginPage}/>
          <Route exact path={ALL_URLS.institution} component={AdminHome}/>
          <Route exact path={ALL_URLS.adminDashboard} component={AdminHome}/>
          <Route exact path={ALL_URLS.awaitingList} component={AdminHome}/>
          <Route exact path={ALL_URLS.approvedList} component={AdminHome}/>
          <Route exact path={ALL_URLS.agentPage} component={NewDashboard}/>

          <Route exact path={ALL_URLS.anyOther} component={HomePage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      sendAnswers: (answers) => dispatch(sendAnswers(answers)),
}
}
const mapStateToProps = (state) => {
  // console.log(state.answersReducer.receivedData)
  return {  
      submissionState:state.answersReducer.submissionState,
      receivedData:state.answersReducer.receivedData,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Appp);


