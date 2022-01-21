import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import potbelly2 from '../assets/images/potbelly.png';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood2, potbelly4, vertical } from '../contants/uiConstants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';

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
class DeliveryForm3 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,field,fields) => {
        console.log(data)
        delete data.undefined;
        this.props.sendAnswers(data)
        this.props.history.push(`/potbelly/forms/options/delivery/4`)
    }
   
    render() {
   
        const innerWidth = getWindowWidth()
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:`url(${potbelly4})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-more-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    // enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Next'
                    fields = {[
                   
                    // {
                    //     fieldType: FIELDS.imageBanner,
                    //     title: "P🥗T BELLY F🥘RM",
                    //     title: "Delivery Service",
                    //     name:"banner",
                    //     regexPattern:'#^23*&',
                    //     subtitle:"Select the service you use often",
                    //     image: potbelly,
                    // },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:true,
                        groups:true,
                        question:"What do you think of the delivery charge?",
                        // style:{display:"flex",justifyContent:"center", alignItems:"center"},
                        groupItems:[
                            {
                                name: "deliveryCharge",
                                label:"Okay",
                                placeholder: "okay",
                                required: true,
                            },
                            {
                                name: "deliveryCharge",
                                label: "Could be less",
                                placeholder: "Could be less",
                                required: true,
                            },
                            {
                                name: "deliveryCharge",
                                label: "High",
                                placeholder: "High",
                                required: true,
                            },
                            {
                                name: "deliveryCharge",
                                label: "Highway robbery",
                                placeholder: "Highway robbery",
                                required: true,
                            },
                            {
                                name: "deliveryCharge",
                                label:'Jesus is watching You (thief high)',
                                placeholder: "Jesus is watching You (thief high)",
                                required: true,
                            },
                           
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"How long did it take to arrive?",
                        groupItems:[
                            {
                                name: "arrivalTime",
                                label:"Under 30 minutes",
                                placeholder: "Under 30 minutes",
                                required: true,
                            },
                            {
                                name: "arrivalTime",
                                label:"Under 45 minutes",
                                placeholder: "Under 45 minutes",
                                required: true,
                            },
                            {
                                name: "arrivalTime",
                                label:"Over one hour",
                                placeholder: "Over one hour",
                                required: true,
                            },
                        ],
                    },
                    {
                        fieldType: FIELDS.select,
                        multiple:true,
                        vertical:vertical,
                        property:'name',
                        name: "orderInfo",
                        label: "What did you order?",
                        placeholder: "What did you order?",
                        dropDownList:FoodMenu,
                        required: true,
                    },
                    {
                        fieldType: FIELDS.select,
                        vertical:vertical,
                        property:'name',
                        name: "menuFavorite",
                        label: "What is your favorite food item on the menu?",
                        placeholder: "What is your favourite on our menu?",
                        dropDownList:FoodMenu,
                        required: true,
                        },
                    
                    
                ]}
                
                />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DeliveryForm3));
