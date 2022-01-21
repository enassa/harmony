import React, { Component } from 'react'
import NewAlertCard from '../../component_bag/NewAlertCard';
import SearchBar from '../../component_bag/SearchBar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { letteringColor6, fontFamily4, fontFamily5, fontFamily3 } from '../../contants/uiConstants';
import ResolvedAlertCard from '../../component_bag/ResolvedAlertCard';
import { connect } from 'react-redux';
import { changeLoadingState } from '../../store/actions/AppStateActions';
import { getResolvedAlerts } from '../../store/actions/resolvedAlertsActions';
import LoadMore from '../../component_bag/LoadMore';
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

class ResolvedAlerts extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    getAlerts = (limit) => {
        this.props.getMoreAlerts(limit)
    }
    getNewAlerts = () => {
        // let alerts = this.props.resolvedAlerts
        let alerts = [0,1,2,3,4,5,6,6,7,9]
        return alerts.map((alert, index) => {
            return <ResolvedAlertCard 
                        handleActionClick = {
                            (typeOfAction, data) => this.handleActionClick(typeOfAction, data)
                        } 
                        cardData = {alert}
                />
        })
    }
    render() {
        return (
            <div className=' curved-corners j-start f-column width-100-cent height-90-cent overflow-hidden max-height-90-cent '>
                <div className='width-100-cent height-100  j-end a-center padding-r-20'>
                    <div style={{paddingLeft:60,color:"grey", fontSize:30,fontWeight:300, fontFamily:fontFamily3}} className='width-100-cent height-50 a-center font-1-2-em'>
                               <span className='a-center' ><ArrowRightIcon style={{width:"40px", height:"40px"}}/></span> 
                               <span>Approved List</span>
                        </div>
                    <span>
                    <SearchBar 
                            disableFilter
                            handleClick = {(inputValue,selectedFilter) => {
                                this.props.handleClick(inputValue,selectedFilter)
                            }}
                            style={{
                                backgroundColor:"white", 
                                border:"0px",
                                color:"#B0B0B1",
                                width:250,
                                marginRight:"100px",
                                fontFamily:fontFamily5, 
                                borderRadius:"100px", 
                                padding:"0px 10px"
                            }}
                            innerStyle = {{
                                color:"#B0B0B1",
                                fontWeight:"bolder", 
                                fontSize:20
                            }}
                    />
                    </span>
                </div>
                <div className='width-100-cent f-column j-start padding-t-20 a-center y-scroll height-100-cent'>
                  {this.getNewAlerts()}
                  {!this.props.loading
                    ?<div style={{width:"100%",display:"flex", justifyContent:"center"}}>
                        <LoadMore 
                        handleClick={()=>{this.getAlerts(10)}}
                        dataLimit = {10}
                        />
                    </div>
                    :null
                  }       
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getResolvedAlerts(10,'initial'))
    return {
        changeLoadingState: (userData) => dispatch(changeLoadingState()),
        getMoreAlerts: (limit=10,typeOfGroups) => dispatch(getResolvedAlerts(limit)),
        // quickSerch:(searchValue, typeOfGroups) => dispatch((quickSerchGroups(searchValue))),
        // fetchFromDifferentGroupsType:(limit=10) => dispatch(getFromDifferentGroupType(limit))
  }
}
const mapStateToProps = (state) => {
    return {
        resolvedAlerts: state.resolvedAlerts.resolvedAlerts,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResolvedAlerts);