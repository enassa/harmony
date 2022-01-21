import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood2, potbelly2, vertical } from '../contants/uiConstants';
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
class DeliveryForm extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,field,fields) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        this.props.history.push(`/potbelly/forms/options/delivery/2`)
    }
   
    render() {
   
        const innerWidth = getWindowWidth()
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:`url(${potbelly2})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
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
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"Which delivery service did you use?",
                        groupItems:[
                            {
                                name: "deliveryService",
                                label: "Glovo",
                                placeholder: "Glovo",
                                required: true,
                            },
                            {
                                name: "deliveryService",
                                label: "Jumia",
                                placeholder: "Jumia",
                                required: true,
                            },
                            {
                                name: "deliveryService",
                                label: "Bolts Food",
                                placeholder: "Bolts Food",
                                required: true,
                            },
                            {
                                name: "deliveryService",
                                label: "Hubtel",
                                placeholder: "Hubtel",
                                required: true,
                            },
                            {
                                name: "deliveryService",
                                label: "Potbelly Inhouse",
                                placeholder: "Potbelly Inhouse",
                                required: true,
                            },
                            {
                                name: "deliveryService",
                                label: "Others",
                                placeholder: "Others",
                                required: true,
                            },
                            
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"Did the food arrive intact?",
                        groupItems:[
                            {
                                name: "intactDelivery",
                                label: "Yes",
                                placeholder: "Yes",
                                required: true,
                            },
                            {
                                name: "intactDelivery",
                                label: "No",
                                placeholder: "No",
                                required: true,
                            },
                            {
                                name: "intactDelivery",
                                label: "Packaging Needs some improvement",
                                placeholder: "Packaging Needs some improvement",
                                required: true,
                            }
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"Was the order accurate?",
                        groupItems:[
                            {
                                name: "orderAccuracy",
                                label: "Yes",
                                placeholder: "Yes",
                                required: true,
                            },
                            {
                                name: "orderAccuracy",
                                label: "No",
                                placeholder: "No",
                                required: true,
                            },
                            {
                                name: "orderAccuracy",
                                label: "Missing Products",
                                placeholder: "Missing products",
                                required: true,
                            },
                            {
                                name: "orderAccuracy",
                                label: "Wrong Products",
                                placeholder: "Wrong Products",
                                required: true,
                            },
                        ],
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DeliveryForm));
