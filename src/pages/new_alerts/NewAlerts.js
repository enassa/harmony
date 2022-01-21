import React, { Component } from 'react'
import NewAlertCard from '../../component_bag/NewAlertCard';
import SearchBar from '../../component_bag/SearchBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { letteringColor6, fontFamily4, fontFamily5, fontFamily3, fontFamily1, fontFamily6 } from '../../contants/uiConstants';
import OverLay from '../../component_bag/OverLay';
import AssignPage from './AssignPage';
import OverlayLoader from '../../component_bag/OverlayLoader';
import MyModal from '../../component_bag/MyModal';
import LoadMore from '../../component_bag/LoadMore';
import OneColumnTable from '../../component_bag/OneColumnTable';
import OverlayWithChild from '../../component_bag/OverlayWithChild';
import { connect } from 'react-redux';
import { changeLoadingState } from '../../store/actions/AppStateActions';
import { getNewAlerts } from '../../store/actions/newAlertsActions';
import FromToDatePicker from '../../component_bag/FromToDatePicker';
import FromToDatePicker2 from '../../component_bag/FromToDatePicker2';
const alerts = [
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    },
    {
        sender:"",
        area:"",
        cordinates:"",
    }
]

class NewAlerts extends Component {
    constructor(props){
        super(props)
        this.state = {
            showAssignPage:false,
            loading:false,
            showModal:true,
            assignmentState:true,
            loadingComplete:false
        }
    }
    toggleAssignPage = () => {
        this.setState({showAssignPage:!this.state.showAssignPage})
    }
    getNewAlerts = () => {
        let alerts = this.props.newAlerts
        console.log(alerts)
        return alerts.map((alert, index) => {
            return <NewAlertCard toggleAssignPage={()=>this.toggleAssignPage()}  cardData = {alert}/>
        })
    }
    getAlerts = (limit) => {
        this.props.getMoreAlerts(limit,this.state.institutionType)
    }
    handleAssignment = (selected) => {
        this.setState({loading:true})
        setTimeout(()=>{
            this.setState({showModal:true,loadingComplete:true,loading:false,showAssignPage:false})
        },800)
    }
    
    handleSuccesfulAssignment = (response) => {
        if(response){
            this.setState({showModal:false})
        }
    }
    ejectCards = () => {
        let arr = [
            {title:"Total Schedules"},
            {title:"Yet To be Registered"},
            {title:"Total S"}
        ]
        return  arr.map((item,index) => {
            return <div style={{borderTop:`10px solid ${index===0?'#F75E5D':index===1?"#1990FF":"#6CCC3D"}`}} className='width-100 min-width-300 all-center f-column margin-r-20 curved-corners height-200 elevated-blend'>
                    <div style={{fontSize:40, fontWeight:300, fontFamily:fontFamily3,color:"rgb(47 47 47 / 78%)"}} className=''>30000000</div>
                    {/* <div style={{fontSize:19, fontFamily:fontFamily5, color:`${index===0?'#F75E5D':index===1?"#1990FF":"#6CCC3D"}`, fontWeight:300}}>Total Registered</div> */}
                    <div style={{fontSize:15, fontWeight:300, fontFamily:fontFamily3, color:`rgb(124 120 120)`}}>Total Registered</div>
            </div>
        }) 
    }

    render() {
        const {showAssignPage} = this.state
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-100-cent  max-height-100-cent'>
                {
                    showAssignPage
                    ?<OverlayWithChild  handleOverlayClick = {()=>this.toggleAssignPage()}>
                        {/* <div className='pointer-events-all pointer-events-all width-100-cent height-100-cent all-center'> */}
                            <OneColumnTable styles={{width:"30%",height:"80%",zIndex:"00"}} getSelected={(selected) => {this.handleAssignment(selected)}}/>
                        {/* </div> */}
                    </OverlayWithChild>
                :null
                }
                {
                    this.state.loading
                    ? <OverlayLoader/>
                    :null
                }
                {
                    this.state.showModal&&this.state.loadingComplete
                    ? <MyModal  
                            getResponse={(response) => {this.handleSuccesfulAssignment(response)}} 
                            state={this.state.assignmentState} 
                            showButtons
                            hideCancel
                        />
                    :null
                }
                <div className='width-100-cent height-100-cent f-column  j-stat a-start padding-r-20 padding-t-20'>
                    <div 
                            style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:300, fontFamily:fontFamily3}} 
                            className='width-100-cent height-50  a-center font-1-2-em'
                    >
                            <span className='a-center' >
                                <ArrowRightIcon style={{width:"40px", height:"40px"}}/>
                            </span> 
                            <span>Dashboard</span>
                            <FromToDatePicker2/>
                    </div>
                    <div className='width-100-cent height-100-cent j-start padding-20  padding-t-40'>
                       {this.ejectCards()}
                    </div>
                
                </div>
               
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getNewAlerts(10,'initial'))
    return {
        changeLoadingState: (userData) => dispatch(changeLoadingState()),
        getMoreAlerts: (limit=10,typeOfGroups) => dispatch(getNewAlerts(limit,typeOfGroups)),
        // quickSerch:(searchValue, typeOfGroups) => dispatch((quickSerchGroups(searchValue))),
        // fetchFromDifferentGroupsType:(limit=10) => dispatch(getFromDifferentGroupType(limit))
  }
}
const mapStateToProps = (state) => {
    return {
        newAlerts: state.newAlerts.newAlerts,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewAlerts);
