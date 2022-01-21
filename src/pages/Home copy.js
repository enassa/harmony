import React, { Component } from 'react'
import NavbarAlt2 from '../component_bag/NavbarAlt2'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import { PAGE, PAGES, fontFamily5 } from '../contants/uiConstants';
import {BrowserRouter,Routes, Route, Navigate, } from 'react-router-dom'
import NewAlerts from './dashboard/Dashboard';
import ResolvedAlerts from './statisticts/Statistics';
import PrankAlerts from './prank_alerts/PrankAlerts';
import OverLay from '../component_bag/OverLay';
import Responses from './responses/Responses';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            activePage:PAGE.new
        }
    }
    ejectSideNavItems = () => {
        return 
    }
    changePage = (page) => {
        // console.log(page)
        this.setState({activePage:page.title})
        this.props.history.push(`${page.url}`)
    }
    getSubPage = () => {
        switch (this.state.activePage) {
            case PAGES[0].title:
                return <NewAlerts/>
            case PAGES[1].title:
                return <Responses/>
            case PAGES[2].title:
                return <ResolvedAlerts/>
            case PAGES[3].title:
                return <PrankAlerts/>
            default:
                break;
        }
    }
    componentDidMount(){
       const page = this.props.match.url
        switch (page) {
            case PAGES[0].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[1].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[2].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[3].url:
                    this.setState({activePage:PAGES[0].title})
                // break;
           
            default:
                break;
        }
        console.log(page)
    }
    render() {
        const myfontFamly = fontFamily5
        const {activePage} = this.state;
        return (
            <div className='width-100-cent height-100-cent f-column j-start'>
                <NavbarAlt2 style={{borderRadius:"", borderBottom:"1px solid #F7F7F7"}} title1={'Fire Service Ghana'} title2={'Achimota Branch'}/>
                <div className='width-100-cent height-100-cent j-start '>
                    <div className='min-width-320 d-flex f-column j-center a-start height-100-cent  nate-white-bg'>
                        <div className='width-100-cent height-100 padding-l-20 padding-t-20'>
                            {/* <span className='font-1-2-em nate-grey-text'>Alerts Page </span> */}
                        </div>
                        {/* side buttons container */}
                        <div className='width-100-cent height-100-cent f-column a-center'>
                            <div 
                                onClick = {() => {this.changePage(PAGES[0])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.new?'aliceblue':''}`}} 
                                className='width-80-cent margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners'>
                                <span className='a-center height-100-cent '>
                                    <ErrorOutlineIcon style={{ color:"#E11717"}}/>
                                    <span style={{marginLeft:10,color:"#FF0F0F"}}>{PAGE.new}</span>
                                </span>
                                <div style={{color:"#E91212", backgroundColor:"#FEB8B8"}} 
                                className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    15
                                </div>
                            </div>
                            <div 
                                onClick = {() => {this.changePage(PAGES[1])}} 
                                style={{borderRadius:20, cursor:"pointer",backgroundColor:`${activePage===PAGE.processing?'aliceblue':''}`,}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners'>
                                <span className='a-center height-100-cent '>
                                    <CachedIcon style={{ color:"#FF931B"}}/>
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
                            <div 
                                onClick = {() => {this.changePage(PAGES[3])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.prank?'aliceblue':''}`}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners'>
                                <span className='a-center height-100-cent'>
                                    <BlockIcon style={{ color:"#ADADAD"}}/>
                                    <span style={{marginLeft:10, color:"#A5A6A5"}}>{PAGE.prank}</span>
                                </span>
                                <div style={{color:"#6C6C6C", backgroundColor:"#E1E2E1"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up '>
                                    11
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='width-100-cent height-100-cent  nate-white-bg padding-20'>
                        {this.getSubPage()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Home