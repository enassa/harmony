import React, { Component } from 'react'
import  "../../css/pagewrapper.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CloseSharp, Menu, Notifications } from '@material-ui/icons';
import Profile from "../../resources/images/MyPic.png";
import Sidebar from '../../reusable/Sidebar';
import Dropdown from '../../reusable/Dropdown';
import ChatRoom from '../../reusable/Chartroom';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

  // Sidebar Componenet stuffs
  
class PageWrapper extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       useHomeSidebarToggler:true,
       showsideBar:false,
       showNotifications:false,
       useHomeFeedsToggler:true,
       usePopUpToggler:true,
       showPopUp:false,
       showWelcomeMessage:false,
      //  Side Componnent states
      showSubNav:false,
      activeDropdown:"Apps",
      // Nav bar component states
      useProfilePicHolder:true,
    }
  }
  togglesideBar = () => {
    this.setState({showsideBar:!this.state.showsideBar})
  }
  toggleNotifications = () => {
    this.setState({showsideBar:!this.state.showsideBar})
  }
  toggleNotifications = () => {
    this.setState({showNotifications:!this.state.showNotifications})
  }
  togglePopUp = () => {
    this.setState({showPopUp:!this.state.showPopUp})
  }

  toggleSubNav = (itemName) => {
    itemName==this.state.activeDropdown
    ?this.setState({activeDropdown:null})
    :this.setState({activeDropdown:itemName})
  }
  render() {
    const data = [
      {"id":"1","SYMBOL":"20MICRONS","NAME OF COMPANY":"20 Microns Limited","SERIES":"EQ","DATE OF LISTING":"06-Oct-08","PAID UP VALUE":5,"MARKET LOT":1,"ISIN NUMBER":"INE144J01027","FACE VALUE":5,"DATE":"30-10-2020","PREV CLOSE":27.35,"OPEN":28.4,"HIGH":28.55,"LOW":27,"LAST":28.2,"CLOSE":28.4,"VWAP":28.13,"VOLUME":55022,"TURNOVER":155000000000,"TRADES":278,"DELIVERABLE VOLUME":40405,"DELIVERABLE%":0.7343},
      {"id":"2","SYMBOL":"21STCENMGM","NAME OF COMPANY":"21st Century Management Services Limited","SERIES":"EQ","DATE OF LISTING":"03-May-95","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE253B01015","FACE VALUE":10,"DATE":"30-10-2020","PREV CLOSE":9.8,"OPEN":9.8,"HIGH":9.9,"LOW":9.8,"LAST":9.9,"CLOSE":9.85,"VWAP":9.87,"VOLUME":407,"TURNOVER":401720000,"TRADES":9,"DELIVERABLE VOLUME":407,"DELIVERABLE%":1},
      {"id":"6","SYMBOL":"3IINFOTECH","NAME OF COMPANY":"3i Infotech Limited","SERIES":"EQ","DATE OF LISTING":"22-Apr-05","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE748C01020","FACE VALUE":10,"DATE":"30-10-2020","PREV CLOSE":2.95,"OPEN":2.95,"HIGH":3.05,"LOW":2.95,"LAST":2.95,"CLOSE":3,"VWAP":2.99,"VOLUME":1212482,"TURNOVER":363000000000,"TRADES":1225,"DELIVERABLE VOLUME":677679,"DELIVERABLE%":0.5589},
      {"id":"3","SYMBOL":"3PLAND","NAME OF COMPANY":"3P Land Holdings Limited","SERIES":"EQ","DATE OF LISTING":"19-Jul-95","PAID UP VALUE":2,"MARKET LOT":1,"ISIN NUMBER":"INE105C01023","FACE VALUE":2,"DATE":"30-10-2020","PREV CLOSE":6.5,"OPEN":6.8,"HIGH":6.8,"LOW":6.8,"LAST":6.8,"CLOSE":6.8,"VWAP":6.8,"VOLUME":1204,"TURNOVER":818720000,"TRADES":8,"DELIVERABLE VOLUME":1204,"DELIVERABLE%":1},
      {"id":"0","SYMBOL":"3MINDIA","NAME OF COMPANY":"3M India Limited","SERIES":"EQ","DATE OF LISTING":"13-Aug-04","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE470A01017","FACE VALUE":10,"DATE":"30-10-2020","PREV CLOSE":18717.75,"OPEN":18699.95,"HIGH":18998,"LOW":18480,"LAST":18480,"CLOSE":18675.35,"VWAP":18650.04,"VOLUME":2367,"TURNOVER":4410000000000,"TRADES":1397,"DELIVERABLE VOLUME":1584,"DELIVERABLE%":0.6692},
      {"id":"4","SYMBOL":"5PAISA","NAME OF COMPANY":"5Paisa Capital Limited","SERIES":"EQ","DATE OF LISTING":"16-Nov-17","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE618L01018","FACE VALUE":10,"DATE":"17-08-2020","PREV CLOSE":355.35,"OPEN":355,"HIGH":355,"LOW":337.6,"LAST":337.6,"CLOSE":337.6,"VWAP":339.16,"VOLUME":29017,"TURNOVER":984000000000,"TRADES":1632,"DELIVERABLE VOLUME":24978,"DELIVERABLE%":0.8608}
    ]
  const columns = [
      { field : 'SYMBOL', headerName: 'Symbol'},
      { field : 'NAME OF COMPANY', headerName: 'Name Of Company'},
      { field : 'DATE OF LISTING', headerName: 'Date of Listing'},
      { field : 'PREV CLOSE', headerName: 'Previous Close'},
      { field : 'CLOSE', headerName: 'Close'}
  ];
    const {useProfilePicHolder,useHomeSidebarToggler,showsideBar,showNotifications,useHomeFeedsToggler,usePopUpToggler,showPopUp} = this.state;
    return (
      <div id={"home-main-container"} className={``}>
        <div id={"home-maincontainer-wrapper"} className={null}>
          <div id={"dark-over-lay"} style={{display:`${showsideBar?"flex":"none"}`}}onClick={()=>{this.togglesideBar()}}></div>
          <div id={"home-side-bar-region"} className={null}>
            <div id={"home-sidebar-wrapper"}>
              <div id="home-sidebar-container" className={this.state.showsideBar?'sidebar-visible':null}>
                  <Sidebar  userImage={Profile} userName="Isaac Newton"/>
              </div>
            </div>
          </div>
          <div id={"home-content-region"} className={null}>
            <div id={"home-content-nav-bar-main"} className={null}>
              <div id={"home-nav-bar-wrapper"} className={null}>
                <div id={"home-nav-bar-container"}>
                  {/* If you have a toggle icon or button on your navbar componenet, please set usetoggler state to false */}
                  {useHomeSidebarToggler
                  ?
                  <div id={"sidebar-toggler-container"}>
                    <Menu onClick={()=>{this.togglesideBar()}}/>
                  </div>
                  :
                  null
                  }
                   {usePopUpToggler
                  ?
                  <div id={"popup-toggler-container"}>
                    <Notifications onClick={()=>this.toggleNotifications()} />
                  </div>
                  :
                  null
                  }
                  {useProfilePicHolder
                  ?<div id={"nav-user-profile-toggler"} onClick={()=>{this.togglePopUp()}}>
                   <img id={"nav-user-profile-image"} src={Profile}/>
                  </div>
                  :
                  null
                  }
                  {/* Drop your navbar component here and delete navbar-maincontainer */}
                  <div id={"navbar-main-container"}>
                    <div id={"navbar-left-region"} className={"nav-bar-regions"}></div>
                    <div id={"navbar-middle-region"} className={"nav-bar-regions"}></div>
                    <div id={"navbar-right-region"} className={"nav-bar-regions"}></div>
                  </div>
                </div>
              </div>
            </div>
            <div id={"home-popup-region"} >
              <div id={"home-popup-wrapper"}>
                  <div id={"home-popup-container"} className={showPopUp?"popup-visible":null}>
                      {/* Drop your popup Component here */}
                      <div style={{display:'flex', justifyContent:"center", alignItems:"center", width:200, height:100}} >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <p style={{marginRight:10}}>Log out</p>
                      </div>
                  </div>
              </div>
            </div>
            <div id={"home-content-workspace-main"} className={null}>
              <div id={"workspace-wrapper"} className={null}>
                <div id={"home-content-workspace-left"} className={null}>
                {/* <div style={{height:"60px", width:"100%", backgroundColor:"red"}}></div> */}
                    {this.props.children}
                </div>
                  <div id={"home-content-workspace-right"}>
                    <div id={"home-feeds-wrapper"}>
                      <div id={"home-feeds-container"} className={showNotifications?"notification-visible":null}>
                        {/* If you have a toggle close icon or button on your feeds componenet, please set usefeedstoggler state to false */}
                        {useHomeFeedsToggler
                        ?
                          <div id="feeds-toggler-container">
                            <CloseSharp onClick={()=>{this.toggleNotifications()}}/>
                          </div>
                        :
                        null
                        }
                        {/* Drop your feeds component here and delete feeds-maincontainer */}
                        <div id={"feeds-main-container"} >
                          <div id="feeds-top-most">
                            
                            <div id={"feeds-details-holder"}>
                            <Dropdown 
                                instructionText={"2014 GROUP"}
                                handleSelect = {(itemName)=>this.handleUserTypeSelect(itemName)} 
                                pillStyles={{maxWidth:171, maxHeight:36 , minWidth:171, minHeight:36 , overFlow:"hidden"}}  asType={"pill"}/>
                            </div>
                            <div id={"feeds-profile-maincontainer"}>
                              
                            </div>
                          </div>
                          <div className={"feeds-section-1-main"}>
                              <div className={"feeds-section-1-heading"}>
                                {/* <hr style={{width:"100%"}}/> */}
                                <span classNmae={"feeds-section-1-header-text"}>2014 year group</span>
                              </div>
                              <div className={"feeds-section-1-items-holder"}>
                                {/* {this.ejectOnlineUsers()} */}
                                <ChatRoom/>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageWrapper;