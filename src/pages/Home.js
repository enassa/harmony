import React, { Component } from 'react'
import NavbarAlt2 from '../component_bag/NavbarAlt2'
import { PAGE, PAGES, fontFamily5 } from '../contants/uiConstants';
import Responses from './responses/Responses';
import { Dashboard} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DetailsPage from './statisticts/DetailsPage';
import { ALL_URLS } from '../contants/urls';
import {Switch, Route } from 'react-router-dom'
import DashboardPage from './dashboard/Resultspage';
import { getAnswers } from '../store/actions/answersActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnswerers } from '../store/actions/answerersAction';
import { CheckCircleOutlineIcon } from '@mui/icons-material/CheckCircleOutline';
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            activePage:'dashboard'

        }
    }
    ejectSideNavItems = () => {
        return 
    }
    changePage = (page) => {
        console.log(this.props.match.params.institution)
        let institution = this.props.match.params.institution
        this.setState({activePage:page.title})
        this.props.history.push(`/${institution}/${page.url_name}`)
    }
    getSubPage = () => {
        switch (this.state.activePage) {
            case PAGES[0].title:
                return <DashboardPage/>
            case PAGES[1].title:
                return <Responses/>
            case PAGES[2].title:
                return <DetailsPage/>
            case PAGES[3].title:
                return <DetailsPage/>
            default:
                break;
        }
    }
    componentDidMount(){
      let institution = this.props.match.params.institution
       const a = this.props.match.url
       let b = a.split('/')
       let page = b[2]
    //    alert(page)
        switch (page) {
            case PAGES[0].url_name:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[1].url_name:
                    this.setState({activePage:PAGES[1].title})
                break;
            case PAGES[2].url_name:
                    this.setState({activePage:PAGES[2].title})
                break;
            case PAGES[3].url_name:
                    this.setState({activePage:PAGES[3].title})
                break;
           
            default:
                break;
        }
        // console.log(page)
        // this.props.
    }
    render() {
        const myfontFamly = fontFamily5
        const {activePage} = this.state;
        return (
            <div className='width-100-cent height-100-cent f-column j-start'>
                <NavbarAlt2 style={{borderRadius:"", borderBottom:"1px solid #F7F7F7"}} title1={'Questionnaire Responses'} />
                <div className='width-100-cent height-100-cent j-start '>
                    {/* <div className='min-width-320 d-flex f-column j-center a-start height-100-cent  nate-white-bg'>
                        <div className='width-100-cent height-100 padding-l-20 padding-t-20'>
                            {/* <span className='font-1-2-em nate-grey-text'>Alerts Page </span> 
                        </div>
                        <div className='width-100-cent height-100-cent f-column a-center'>
                            <div 
                                onClick = {() => {this.changePage(PAGES[0])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.dashboard?'aliceblue':''}`}} 
                                className='width-80-cent margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners'>
                                <span className='a-center height-100-cent '>
                                    <Dashboard style={{ color:"rgb(15 166 255)"}}/>
                                    <span style={{marginLeft:10,color:"rgb(15 166 255)"}}>{PAGE.dashboard}</span>
                                </span>
                                <div style={{color:"rgb(18 94 233)", backgroundColor:"rgb(184 231 254)"}} 
                                className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    15
                                </div>
                                {/* <div style={{color:"#E91212", backgroundColor:"#FEB8B8"}} 
                                className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    15
                                </div> *
                            </div>
                            <div 
                                onClick = {() => {this.changePage(PAGES[1])}} 
                                style={{borderRadius:20, cursor:"pointer",backgroundColor:`${activePage===PAGE.processing?'aliceblue':''}`,}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners'>
                                <span className='a-center height-100-cent '>
                                    <AccountCircleIcon style={{ color:"#FF931B"}}/>
                                    <span style={{marginLeft:10, color:"#FF931B"}}>{PAGE.processing}</span>
                                </span>
                                <div style={{color:"#FF8A0F", backgroundColor:"#FEDDB8"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    23
                                </div>
                            </div>
                            <div 
                                onClick = {() => {this.changePage(PAGES[2])}}
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.resolved?'aliceblue':''}`}} 
                                className='width-80-cent  margin-b-20 transition-all-fastheight-60 padding-10  j-space-between a-center curved-corners'
                            >
                                <span className='a-center height-100-cent '>
                                    <CheckCircleOutlineIcon style={{ color:"#078113"}}/>
                                    <span style={{marginLeft:10, color:"#399A42"}}>{PAGE.resolved}</span>
                                </span>
                                <div style={{color:"#078113", backgroundColor:"#C8E3CB"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up '>
                                    08
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='width-100-cent height-100-cent  nate-white-bg padding-20'>
                        {/* {this.getSubPage()} */}
                        <Switch>
                            <Route exact path={ALL_URLS.dashboard} component={DashboardPage}/>
                            <Route exact path={ALL_URLS.responses} component={Responses}/>
                            <Route exact path={ALL_URLS.questionDetails} component={DetailsPage}/>
                            <Route exact path={ALL_URLS.personDetails} component={DetailsPage}/>
                            <Route exact path={ALL_URLS.responsePage} component={Responses}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getAnswers(10,'initial','potbelly'))
    return {
        getAnswers: (limit=10,typeOfFetch,institution) => dispatch(getAnswers(limit,typeOfFetch,institution)),
  }
}
const mapStateToProps = (state) => {
    return {
        answers:state.answersReducer.answers,
        loading: state.appState.loading,

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));

