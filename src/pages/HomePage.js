import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import { getTodaysDate, getWindowWidth, readyForMapping, getDateAndTime, getTodaysDateWithoutDash } from '../contants/generalFunctions';
import { fontFamily5, letteringColor4, letteringColor6, opine, potbelly1 } from '../contants/uiConstants';
import animeEmoji from '../assets/images/animecontent.gif'
import HorizontalScroller from '../component_bag/HorizontalScroller';
import GroupCard from '../component_bag/GroupCard';
import SearchBar from '../component_bag/SearchBar';
import LoadMore from "../component_bag/LoadMore";

import GridLayOut from '../component_bag/GridLayout';
import { getGroups, getDifferentGroupType, quickSerchGroups, getFromDifferentGroupType } from '../store/actions/groupsActions';
import { connect } from 'react-redux';

const TouristSite = [
    {
        name:"Mole Park"
    },
    {
        name:"Kakum National Park"
    },
    {
        name:"Cape Coast Castle"
    },
    {
        name:"Elmina Castle"
    },
    {
        name:"National Museum"
    },
    {
        name:"Aburi Botanical Garden"
    },
    {
        name:"Mountain Afadjato "
    },
    {
        name:"W.E.B. Dubois Centre " 
    },
    {
        name:"Manhyia Palace " 
    },
    {
        name:"Boabeng Fiema Monkey Sanctuary" 
    },
    {
        name:"Kintampo Balls" 
    },
    {
        name:"Tango Hills"
    },
    {
        name:"Cape Three Points " 
    },
    {
        name:"Kumasi Zoo" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Paga Zenga Crocodile Pond" 
    },
    {
        name:"Xavi Bird Sanctuary " 
    },
    {
        name:"Labadi Beach" 
    },
    {
        name:"Lake Bosomtwe" 
    },
    {
        name:"Wli Waterfalls" 
    },
    {
        name:"Lakeside Marina Park" 
    },
    {
        name:"The Manhyia Palace" 
    },
    {
        name:"Kwame Nkrumah Memorial Park and Mausoleum" 
    },
    {
        name:"Boti Falls" 
    },
    {
        name:"St Agustine College " 
    },
]
const FoodMenu = [
    {
        name:"Chicken Wings"
    },
    {
        name:"Pizza"
    },
    {
        name:"Burgers"
    },
    {
        name:"Meatballs"
    },
    {
        name:"BBQ Ribs"
    },
    {
        name:"Tacos"
    },
    {
        name:"Pasta"
    },
    {
        name:"Asian Fusion" 
    },
    {
        name:"Hotdogs" 
    },
    {
        name:"Fish and Chips" 
    },
    {
        name:"Full Chicken" 
    },
    {
        name:"Steaks"
    },
    {
        name:"Seafood" 
    },
    {
        name:"Salad" 
    },
    {
        name:"Breakfast" 
    },
    {
        name:"Others" 
    },
]
class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded:false
        }
    }
    handleSubmit = (data,resetForm,completed) => {
        const myData = {
            'name':data.name?data.name:null,
            // 'phone':data.phone?`${countryCode}${data.phone}`:null,
            'email':data.email?data.email:null,
            'password':data.password?data.password:null,
            'password_confirm':data.password_confirm?data.password_confirm:null,
            'institution':data.institution?data.institution:null,
            'yearCompleted':data.year?data.year:null,
            'gender':data.gender?data.gender:null,
        }
    }
    ejectCards() {
        if(readyForMapping(this.props.groups)){
          return this.props.groups.map((data, index)=>{
            return  <GroupCard cardData={data} outerStyles={{minWidth:200}}/>
          })
        }
    }
    quickSerch = (e) => {
        if(e.target.value === "" || e.target.value === " "){
          this.props.fetchFromDifferentGroupsType(10)
          return 0;
        }
        this.props.quickSerch(e.target.value,this.state.institutionType)
    }
    getMoreData = (limit) => {
        this.props.fetchGroups(limit,this.state.institutionType)
      }
    generateAnimes = () => {
        let myArr;
        let myValue = ['🤗','😎','❤️','😍','🥰','🍒','🎃','👑','🍎','🍊','🍋','🍉','🍇','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🥪','🫓','🥙','🧆','🌮','🌯','🫔','🫕','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🦪','🍚','🥮','🥧','🍦','🍧','🍨','🧁','🥧','🍰','🎂','🍮','🍫','🍿','🍩','🍪','🌰','🥜','🥛','🍵','☕️','🫖','🧃','🥤','🧋','🍺','🍻','🥂','🍷','🥃','🍷','🥂','🥃','🍸','🧉','🧉','🍾','🍽','🥣']     
       return  myValue.map((item,index) => {
            // myArr = myValue
           return <span className=''>{item}</span>
        })
    }
    render() {
        console.log(Date())
        const innerWidth = getWindowWidth()
        return (
            <div style={{backgroundColor:"F3F3F3"}} className={`width-100-cent height-100-cent a-center ${innerWidth<800?'padding-0':'padding-20'}   f-column j-start `}>
                <div className={`${innerWidth<800?'width-100-cent':'width-90-cent curved-corners '} d-flex f-column above-all nate-white-bg overflow-hidden height-100-cent elevated-blend ${innerWidth<800?'padding-0':'padding-20'} position-relative`}>
                    <FormGenerator
                        fields = {[
                        {
                            fieldType: FIELDS.imageBanner,
                            // title: "P🥗T BELLY F🥘RM",
                            title: "Your Opinion Counts!",
                            subtitle:"Tell Us about it 😎",
                            image: opine,
                            } 
                        ]}
                        redirectText = {"Already have an account? Login"}
                        handleOnSubmit = {(data, resetFunc,completed)=>{
                            this.handleSubmit(data,resetFunc,completed)
                        }}
                        removeButton
                        buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    />
                        <div style={{marginBottom:100}} className={`${innerWidth<800?' top--10 j-center a-center width-100-cent bottom-20':'right-30 top-0 padding-r-20 j-end a-end width-95-cent'}  height-200 position-absolute  above-all  `}>
                                    <SearchBar 
                                        disableFilter
                                        handleClick = {(inputValue,selectedFilter) => {
                                            this.props.handleClick(inputValue,selectedFilter)
                                        }}
                                        handleChange={(e) => {this.quickSerch(e)}}
                                        style={{
                                            backgroundColor:"white", 
                                            border:"0px",
                                            color:"#B0B0B1",
                                            width:250,
                                        
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
                        </div>
                    <div style={{fontSize:20, fontFamily:fontFamily5}} 
                            className='width-100-cent f-column j-start a-center height-100-cent nate-grey-text'
                    >
                        <div style={{}} className='j-start width-100-cent height-100-cent f-column j-start'>
                            
                            <div className='width-100-cent padding-b-40 overflow-scroll height-80-cent f-column overflow-hidden'>
                                
                                <GridLayOut style={{gridTemplateColumns:`repeat(${innerWidth<900?innerWidth<600?'1':'2':'3'},1fr)`,}}>
                                    {this.ejectCards()}
                                </GridLayOut>
                                
                                {/* {!this.props.loading
                        ?<div style={{width:"1  00%",display:"flex", justifyContent:"center"}}>
                            <LoadMoress
                                handleClick={()=>{this.getMoreData(10)}}
                                dataLimit = {10}
                            />
                        </div>
                        :null
                        }  */}
                        </div>
                    </div>
                    <div>Powered by <a href={'//www.casantey.com'} target='_blank' className='nate-pink-text'>Casantey</a></div>
                    <div style={{fontSize:10}} className=''> Copyright &#169; 2022 | {getTodaysDateWithoutDash()}131820</div>
                    {/* <div style={{fontSize:10} } className=''> |</div> */}
                </div>
            </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    dispatch(getGroups(10,'TERTIARY','initial'))
    return {
        fetchGroups: (limit=10,typeOfGroups) => dispatch(getGroups(limit,typeOfGroups)),
        fetchFromDifferentGroupsType:(limit=10) => dispatch(getFromDifferentGroupType(limit)),
        quickSerch:(searchValue, typeOfGroups) => dispatch((quickSerchGroups(searchValue))),
  }
}
const mapStateToProps = (state) => {
    return {
        groups: state.groups.groups,
        joinedGroups: state.groups.joinedGroups,
        pendingGroups: state.groups.pendingGroups,
        loading: state.appState.loading,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

