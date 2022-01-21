import React, { Component } from 'react'
import { AccountCircleRounded, Add, AddAPhoto, Article, AssignmentInd, Close, CloudDownload, Delete, Edit, MoreVert, OpenWith, ReplyAll, TableView } from '@mui/icons-material';
import { fontFamily2, colors, fontFamily5, fontFamily3, fontFamily4, fontFamily1 } from '../../contants/uiConstants';
import { capitalizeFirstLetter, getFirstLetter, getRandomColor, getRandomInt } from '../../contants/generalFunctions';
import { ReadMoreIcon } from '@mui/icons-material/ReadMore';
import { TextField } from '@mui/material';
import PopUpButton from '../../component_bag/PopUpButton';
import SearchBar from '../../component_bag/SearchBar';
import { myData } from '../../dummydata/dummyData';
import { style } from '@mui/system';
import ActionTree from '../../component_bag/ActionTree';
const categories = [
    {title:"All staff"},
    // {title:"Group A"},
    // {title:"Group B"},
]
let actionsList = []

export const popUpItems = [
    {
        title:"Edit",
        icon:<Edit style={{fontSize:18}}/>
    },
    {
        title:"Delete",
        icon:<Delete/>   
    },
]
export default class AssignPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            hovCategory:"All staff",
            selecteditem:"All staff",
            hovered:'',
            hoveredRow:'',
            selectedRows:[],
            allData:myData,
            popUpState:'',
            editMode:false,
            editingItem:{},
            actionsState:true
        }
    }
    
    controlDisplay = (e) => {
        e.preventDefault(e)
        this.props.handleActionClick(e)
    }
    ejectCategories = () => {
        const {hovCategory,selecteditem} = this.state
        return categories.map((item,index) => {
            return <div 
                        onClick = {() => {this.setState({selecteditem:item.title})}}
                        onMouseOver = {() => {this.setState({hovCategory:item.title})}}
                        onMouseOut = {() => {this.setState({hovCategory:""})}}
                        style={{fontFamily:fontFamily5,backgroundColor:`${selecteditem === item.title?'#EEEEEE':hovCategory===item.title?'rgb(238 238 238 / 25%)':''}`}} 
                        className='width-100-cent padding-l-20 height-60 cursor-pointer a-center'>
                        {item.title}
                    </div>
        })
    }
   ejectEditingItems = () => {
       const {editingItem} = this.state;
       const obj =  this.state.editingItem
       let properties = Object.keys(this.state.editingItem)
       return properties.map((prop ,index) => {
            return <div className='width-100-cent margin-b-50'>
                <label style={{fontFamily:fontFamily3,fontWeight:300}} className='width-40-cent'>{capitalizeFirstLetter(prop)}</label>
                <input className='width-100-cent border-0 outline-none  border-b-nice' defaultValue={obj[prop]}/>
            </div>
       })
       
   }
   handleActionClick = (action) => {
       alert(action)
   }
   getEditPage = () => {
       return <div className='width-100-cent height-100-cent f-column j-start'>
       {/* editing information header */}
                <div className='width-100-cent height-25-cent position-relative j-start a-center border-b-nice padding-l-30 padding-r-30 '>
                    <div className='round-up width-120 a-center j-center margin-r-20 position-relative d-flex height-120 elevated-blend'>
                        <div style={{fontSize:60}} className='position-absolute round-up top-0 nate-white-text left-0 width-100-cent height-100-cent all-center nate-blue-bg'>
                            <span>A</span>
                        </div>
                        <div className='height-40 cursor-pointer all-center position-absolute right-0 bottom-0 width-40 above-all round-up partial-black-bg'>
                            <AddAPhoto style={{fontSize:"25px"}} className='nate-white-text pointer-events-none' />
                        </div>
                    </div>
                    <div className='nate-grey-text' style={{fontSize:30,color:"#4C4C4C"}}>
                        <span>Assan Ewudzi Nathaniel</span>
                    </div>
                    <div className='position-absolute right-50'>
                        <button className='padding-10 cursor-pointer padding-l-20 padding-r-20 outline-none nate-blue-bg border-0 nate-white-text curved-corners-light'>
                            Save
                        </button>
                    </div>
                </div>
                {/* Where item to be edited are rendered */}
                <div className='width-100-cent height-100-cent  f-column f-column y-auto  padding-40'>
                    <div style={{color:"grey"}} className='f-column width-50-cent height-auto margin-b-30'>
                        {this.ejectEditingItems()}
                    </div>
                </div>
            </div>
   }
    getTablePage = () => {
        const {hoveredRow, selectedRows,editMode, actionsState} = this.state
        let deleteItem = (itemIndex) => {
            let arr = [...this.state.allData]; // make a separate copy of the array
            arr.splice(itemIndex, 1);
            this.setState({allData: arr});
            return
        }
        let handleAction = (action,data) => {
            if(action.toLowerCase()==='delete'){
                deleteItem(data)
            }
            if(action.toLowerCase()==='edit'){
                    this.setState({editMode:true})
                    this.setState({editingItem:data})
            }
            this.setState({popUpState:""})
        }

        let getActionsComponent = () => {
            let readyForActions = selectedRows.length
            let expanded = selectedRows.length&&actionsState
            let allIconsColor = 'blue'
            let allTextColor ='red'
            let handleClick = (action) => {
                alert (`No function passed for the ${action} action`)
            }
            let handleHover = (action) => {
                alert (`No function passed for the ${action} action`)
            }
            
            let styles = {
                action1:expanded?{top:"-2%",right:"-2%", bottom:""}:{top:"40%",right:"40%"},
                action2:expanded?{top:"-16.5%",left:"32%",right:"", bottom:""}:{top:"40%",left:"40%"},
                action3:expanded?{top:"0%",left:"-4%",right:"", bottom:""}:{top:"40%",left:"40%"},
                action4:expanded?{top:"",left:"-16.5%",right:"", bottom:"30%"}:{bottom:"40%",left:"40%"},
                action5:expanded?{top:"",left:"1.5%",right:"", bottom:"-5%"}:{bottom:"40%",left:"40%"},
            }

            let classes = {
                controllerAction:`${expanded?'nate-pink-bg nate-white-text':'nate-blue-bg nate-white-text'} width-60 above-all  height-60 cursor-pointer j-center a-center round-up  elevated-blend`,
                actions:`transition-all-fast f-column ${expanded
                    ?'width-100 height-100 cursor-pointer j-center a-center position-absolute  round-up nate-white-bg  elevated-bevel'
                    :'width-60 height-60 position-absolute j-center a-center round-up nate-blue-bg nate-alice-text elevated-blend'
                }`,
            }
           let  ejectActions = () => {
                return actionsList.map((action,index) => {
                    let actionStyle = styles[`action${index+1}`]
                    let iconColor = `${action.iconColor===undefined?allIconsColor:action.iconColor}`
                    let textColor = `${action.textColor===undefined?allTextColor:action.textColor}`
                    let actionClickHandler = `${action.handleClick===undefined?handleClick:action.handleClick}`
                    let actionHoverHandler = `${action.handleHover===undefined?handleHover:action.handleHover}`
                    return <div 
                                onClick = {() => {
                                    actionClickHandler()
                                }}
                                onHover = {() => {
                                    actionHoverHandler()
                                }}
                                style={actionStyle} className={classes.actions}
                            >
                                <span style={{color:iconColor}}>{action.icon}</span>
                                <span style={{lineHeight:1.2,color:textColor}} className='width-80-cent text-align-center'>
                                    {action.description}
                                </span>
                            </div>
                }) 
            }
            
            return  <div  style={{top:"",left:"%",right:"30px", bottom:"37px"}} className='width-300  height-300 round-up  position-absolute'>
                        <div className='fill-entire-page position-relative j-center a-center round-up '>
                           {ejectActions()}
                            <div  className={classes.controllerAction}>
                                {   
                                    expanded
                                    ?<div onClick={()=>{this.setState({actionsState:false})}} 
                                          className='fill-entire-page all-center'
                                    >
                                        <Close />
                                    </div>
                                    :<div onClick={() => {readyForActions?this.setState({actionsState:true}):console.log('')}} 
                                        className='fill-entire-page all-center'
                                    >
                                        <OpenWith/>
                                    </div>
                                }
                            </div>

                        </div>
                        {/* <div className='width-100-cent height-100-cent partial-black-bg round-up position-absolute top-0 left-0'></div> */}
                    </div>
        }
        let  ejectPopUpActions = (data) => {
            const {hovered} = this.state
            return popUpItems.map((item, index) => {
                return <span 
                        style={{backgroundColor:`${this.state.hovered===item.title?'#80808012':''}`}}
                        key = {index}
                        onMouseOver={() => {this.setState({hovered:item.title})}} 
                        onClick={(e) =>{
                            e.stopPropagation()
                            handleAction(item.title, data)} 
                        }
                        className='padding-r-10 pop-up-rise padding-l-10 a-center cursor-pointer width-100-cent height-40'
                        >
                            <span style={{marginRight:10, fontSize:3, color:"grey"}}>{item.icon}</span>
                            <span  style={{marginRight:10, color:"grey"}} className='a-center'>{item.title}</span>
                    </span>
            })
        } 
        let addToSelected = (item) => {
            if(selectedRows.includes(item.id)){
                let arr = [...this.state.selectedRows]; // make a separate copy of the array
                var index = arr.indexOf(item.id)
                if (index !== -1) {
                    arr.splice(index, 1);
                    this.setState({selectedRows: arr});
                    return
                }
            }
            this.setState({selectedRows:[...selectedRows,item.id]})
        }

        let properties =  Object.keys(myData[0]) 
        let  ejectTableHeaders = () => {
           return properties.map((item, index) => {
               return <th style={{borderBottom:"1px solid #F9F9F9", color:"#808080",fontFamily:fontFamily5}}>
                    {capitalizeFirstLetter(item)}
                   </th>

           })
        }
       
        let ejectTableRows = () => {
        return  this.state.allData.map((item,counter) => {
            let color = colors[counter];
            if(color===undefined){
                color = colors[1]
            }
            let properties = Object.keys(item)
             return <tr 
                        onMouseOver = {() => {
                            this.setState({hoveredRow:item.id})
                        }}
                        onMouseOut = {() => {
                            this.setState({hoveredRow:''})
                        }}
                        onClick = {() => {
                            addToSelected(item)
                        }}
                        className='cursor-pointer position-relative'
                    > {properties.map((property, index) => {
                  return <td className=''>
                            {/* If it's the second item in the object then  the get first first letter and use as profile pic if there is no profile pic  */}
                            {index===1
                            ?<div className='j-start a-center'>
                            <div className='j-start a-center'>
                                <div style={{backgroundColor:color, fontSize:20, fontFamily:fontFamily5}} className='height-35 margin-l-10 width-35 all-center margin-r-20 round-up  nate-white-text'>
                                    {getFirstLetter(item[property])}
                                </div>
                            </div>
                                <span style={{fontFamily:fontFamily3}} className='elipse-overflow'>{item[property]}</span>
                            </div>
                            /* If it's the first item in the object then attach check box to it for selection  */
                            :index === 0
                            ?<div className='j-center a-center  position-relative'>
                                {/* If item is selected or hovered then show check box else don't */}
                               <div 
                                    style={{visibility:`${selectedRows.includes(item.id)||item.id === hoveredRow?'visible':'hidden'}`}} 
                                    className='a-center  j-start left-0  position-absolute '
                                >
                                    <input 
                                        checked = {selectedRows.includes(item.id)}
                                        className='cursor-pointer width-20 height-20' type="checkbox"
                                    /> 
                                </div>
                                <div style={{fontFamily:fontFamily3}} className='a-center j-start'>{item[property]}</div>
                            </div>
                             /* If it's the last item in the object then attach action buttons to the end of the item  */
                            :index === (properties.length-1)
                            ?<div className='j-start a-center  height-100-cent '>
                                  <div style={{fontFamily:fontFamily3}} className=' no-break'>{item[property]}</div>
                                 <div className=' j-center width-100-cent height-100-cent ' >
                                     {/* edit action */}
                                            <div
                                                style={{visibility:`${hoveredRow === item.id?'visible':'hidden'}`}}
                                                className='d-flex f-column   height-100-cent'
                                                    onClick = {() => {
                                                        this.setState({editMode:true})
                                                        this.setState({editingItem:item})
                                                    }}
                                            >
                                                <Edit 
                                                    className=' pointer-events-none nate-blue-text height-100-cent '
                                                />
                                            </div>
                                              {/* More action */}
                                            <div
                                                style={{visibility:`${hoveredRow === item.id?'visible':'hidden'}`}}
                                                className='d-flex  f-column height-100-cent'
                                                onClick = {(e) => {
                                                    e.stopPropagation()
                                                    this.setState({popUpState:item.id})
                                                }} 
                                            >
                                                <MoreVert 
                                                    className=' pointer-events-none nate-grey-text height-100-cent '
                                                />
                                            </div>
                                            
                                        </div>
                            </div>
                             /* If it's the anyother item in the object then just display it raw without adding anything */
                            :<div className='j-start a-center'>
                                <div style={{fontFamily:fontFamily3}}>{item[property]}</div>
                            </div>
                            }
                           
                        </td>    
                // }
            })
        }
            {   this.state.popUpState === item.id
                ?<div className='width-200 height-auto nate-white-bg above-all right-0 top-0 position-absolute nate-white-bg elevated-card'>
                    {ejectPopUpActions(item)}      
                </div>
                :null
            }
            </tr>
            })
        }
        return <div style={{fontFamily:fontFamily2,borderSpacing: '0 15px'}} className='width-100-cent f-column j-start a-start height-100-cent padding-20'>
                    <div style={{fontFamily:fontFamily5}} className='width-100-cent height-100-cent j-start f-column'>
                        {/* Table action bar */}
                        <div className='width-100-cent j-start'>
                            <div className='a-center cursor-pointer  nate-alice-bg -j-center margin-r-20 padding-5  padding-l-10 padding-r-10 width-uto curved-corners '>
                                <CloudDownload className='margin-r-10'/>
                                <span>Export all</span>
                            </div>
                            <div className='a-center cursor-pointer  nate-alice-bg -j-center margin-r-20 padding-5  padding-l-10 padding-r-10 width-uto curved-corners '>
                                <CloudDownload className='margin-r-10'/>
                                <span>Export Selected</span>
                            </div>
                            {/* <div className='a-center cursor-pointer   nate-alice-bg -j-center margin-r-20 padding-5  padding-l-10 padding-r-10 width-uto curved-corners '>
                                <MoreVert className='margin-r-10'/>
                                <span>More Functions</span>
                            </div> */}
                        </div>
                        <div className='full-width height-100-cent margin-t-30 y-auto d-flex f-column j-start a-start '>
                            <table style={{borderSpacing:"0 15px"}} className='width-100-cent margin-b-50 height-300'>
                               <thead className='width-100-cent position-sticky height-50 top-0 nate-white-bg above-all'> 
                                    <tr>
                                        {ejectTableHeaders()}
                                    </tr>
                                </thead>
                                <tbody style={{}} className='width-100-cent height-100-cent'>
                                    {ejectTableRows()}
                                </tbody>
                            </table>
                            <span>ss</span>
                        </div>
                        {/* {getActionsComponent()} */}
                        <ActionTree handleActionClick={(action) => {this.handleActionClick(action)}} actionsList = {actionsList} expandActions = {selectedRows.length?1:0}/>
                    </div>
                </div>
        
       
    }
    
    render() {
        actionsList = [
            {icon:<Delete/>,description:'Delete',iconColor:'red',handleClick:()=>console.log('hello')},
            {icon:<Edit/>,description:'Edit', iconColor:"blue",handleClick:(action)=>this.handleActionClick(action)},
            {icon:<AssignmentInd/>,description:'Assign', iconColor:"green"},
            {icon:<Article/>,description:'Export', iconColor:"#000080"},
            {icon:<TableView/>,description:'Export all', iconColor:"gold"},
        ]
        let {editMode} = this.state
        return (
            <div 
                className='width-100-cent height-100-cent a-start  j-start above-all top-0 left-0 position-fixed'
            >
                {/* Overlay */}
                <div onClick = {(e) =>this.controlDisplay(e) }
                    className='width-100-cent height-100-cent a-center j-center above-all top-0 left-0 nate-black-more-partial-bg position-fixed'
                >
                </div>
                {/* Main Container */}
                <div className='width-100-cent overflow-hidden above-all f-column j-start  curved-corners height-100-cent nate-white-bg elevated-blend'>

                    {/* upper side of container */}
                    <div className='width-100-cent a-center j-space-between height-100 padding-20 '>
                        <div className='elevated-blend padding-2  curved-corners'>
                            <button className='a-center cursor-pointer padding-5 padding-l-20 padding-r-20 curved-corners outline-none border-0'>
                                <Add style={{color:"#00369F"}} className=''/>
                                <span style={{color:"#00369F",fontSize:17, fontFamily:fontFamily5}}>Create staff</span>
                            </button>
                        </div>
                        <div className='width-50-cent '>
                        {!editMode
                        ?<SearchBar 
                            disableFilter
                            handleClick = {(inputValue,selectedFilter) => {
                                this.props.handleClick(inputValue,selectedFilter)
                            }}
                            style={{
                                backgroundColor:"white", 
                                border:"0px",
                                color:"#B0B0B1",
                                width:"100%",
                               
                                fontFamily:fontFamily3, 
                                borderRadius:"100px", 
                                padding:"0px 10px"
                            }}
                            innerStyle = {{
                                color:"#B0B0B1",
                                fontWeight:"bolder", 
                                fontSize:20
                            }}
                        />
                        :null
                        }
                        </div>
                        <button 
                            onClick = {() => {
                                this.props.handleDisplay()
                            }}
                            className='border-0 cursor-pointer nate-white-bg'>
                            <Close/>
                        </button>
                    </div>

                    {/* lower side of container */}
                    <div className='width-100-cent j-start a-start height-100-cent '>
                        {/* left navigation */}
                        <div className='width-20-cent padding-t-50  height-100-cent'>
                            {this.ejectCategories()}
                        </div>
                        {/* divider between left (All staff) and right side (table and edit data) */}
                        <span style={{width:2, marginTop:30,backgroundColor:"#EEEEEE"}} className='height-80-cent x-scroll  nate-blue-bg'></span>

                        <div className='width-80-cent j-start f-column height-100-cent margin-l-10'>
                            {/* Editing mode and Table toggle check */}
                            {editMode // if  in editing mode showediting page else show table page
                            ?this.getEditPage()
                            // Table 
                            :this.getTablePage()
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
